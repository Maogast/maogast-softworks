import { NextResponse, type NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, service, message } = await request.json();

    if (!name || !email || !service) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const results = await Promise.allSettled([
      // 1. Email to you (business owner)
      transporter.sendMail({
        from: `"Maogast Softworks" <${process.env.SMTP_USER}>`,
        to: 'maogastdevhub@gmail.com',   // change to your email
        subject: `New Quote Request: ${service} from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message || 'No message provided'}`,
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <p>${message ? message.replace(/\n/g, '<br/>') : 'No message provided'}</p>
        `,
      }),
      // 2. Auto-reply to client
      transporter.sendMail({
        from: `"Maogast Softworks" <${process.env.SMTP_USER}>`,
        to: email,
        subject: `Thank you for your quote request – Maogast Softworks`,
        text: `Hello ${name},\n\nThank you for reaching out to Maogast Softworks. We have received your request for ${service}.\n\nOur team will review your inquiry and get back to you within 24 hours.\n\nBest regards,\nThe Maogast Softworks Team`,
        html: `
          <h2>Hello ${name},</h2>
          <p>Thank you for reaching out to Maogast Softworks. We have received your request for <strong>${service}</strong>.</p>
          <p>Our team will review your inquiry and get back to you within 24 hours.</p>
          <p>In the meantime, feel free to check our website for more information about our services.</p>
          <br/>
          <p>Best regards,<br/>The Maogast Softworks Team</p>
        `,
      }),
    ]);

    const errors = results.filter(r => r.status === 'rejected');
    if (errors.length > 0) {
      console.error('Some emails failed:', errors);
      return NextResponse.json({ error: 'Partial failure' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}