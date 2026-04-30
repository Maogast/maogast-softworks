import { NextResponse, type NextRequest } from 'next/server';
import { Resend } from 'resend';
import nodemailer from 'nodemailer';

// ---------- Gmail SMTP Configuration (Fallback) – only if credentials exist ----------
const gmailTransporter = (() => {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.warn('Gmail credentials missing – fallback disabled');
    return null;
  }
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
})();

async function sendViaGmail({
  to,
  subject,
  html,
  text,
}: {
  to: string;
  subject: string;
  html: string;
  text: string;
}) {
  if (!gmailTransporter) throw new Error('Gmail not configured');
  return gmailTransporter.sendMail({
    from: `"Maogast Softworks" <${process.env.GMAIL_USER}>`,
    to,
    subject,
    text,
    html,
  });
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, service, message } = await request.json();

    if (!name || !email || !service) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // ---------- Initialize Resend only at runtime (fixes build error) ----------
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is missing');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }
    const resend = new Resend(apiKey);
    const fromDomain = process.env.FROM_DOMAIN || 'maogastsoftworks.com';
    const fromEmail = `Maogast Softworks <info@${fromDomain}>`;
    const toEmail = process.env.TO_EMAIL || 'maogastdevhub@gmail.com';

    const messageText = message || 'No message provided';
    const messageHtml = message ? message.replace(/\n/g, '<br/>') : 'No message provided';

    // 1. Admin email (to you)
    const adminSubject = `New Quote Request: ${service} from ${name}`;
    const adminHtml = `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong></p>
      <p>${messageHtml}</p>
    `;
    const adminText = `Name: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${messageText}`;

    // 2. Client auto‑reply email
    const clientSubject = `Thank you for your quote request – Maogast Softworks`;
    const clientHtml = `
      <h2>Hello ${name},</h2>
      <p>Thank you for reaching out to Maogast Softworks. We have received your request for <strong>${service}</strong>.</p>
      <p>Our team will review your inquiry and get back to you within 24 hours.</p>
      <p>In the meantime, feel free to check our website for more information about our services.</p>
      <br/>
      <p>Best regards,<br/>The Maogast Softworks Team</p>
    `;
    const clientText = `Hello ${name},\n\nThank you for reaching out to Maogast Softworks. We have received your request for ${service}.\n\nOur team will review your inquiry and get back to you within 24 hours.\n\nBest regards,\nThe Maogast Softworks Team`;

    let adminSent = false;
    let clientSent = false;
    let errorDetails = null;

    // ---------- Try sending with Resend first ----------
    try {
      await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        subject: adminSubject,
        html: adminHtml,
        text: adminText,
      });
      adminSent = true;
    } catch (error) {
      console.error('Resend (admin) failed:', error);
      errorDetails = error;
    }

    try {
      await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: clientSubject,
        html: clientHtml,
        text: clientText,
      });
      clientSent = true;
    } catch (error) {
      console.error('Resend (client) failed:', error);
      errorDetails = error;
    }

    // ---------- Fallback to Gmail if either email failed and Gmail is configured ----------
    if ((!adminSent || !clientSent) && gmailTransporter) {
      console.log('Falling back to Gmail SMTP...');
      try {
        if (!adminSent) {
          await sendViaGmail({
            to: toEmail,
            subject: adminSubject,
            html: adminHtml,
            text: adminText,
          });
          adminSent = true;
        }
        if (!clientSent) {
          await sendViaGmail({
            to: email,
            subject: clientSubject,
            html: clientHtml,
            text: clientText,
          });
          clientSent = true;
        }
      } catch (gmailError) {
        console.error('Gmail fallback also failed:', gmailError);
        return NextResponse.json(
          { error: 'All email providers failed', details: errorDetails },
          { status: 500 }
        );
      }
    }

    if (!adminSent || !clientSent) {
      return NextResponse.json(
        { error: 'Failed to send one or more emails', details: errorDetails },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}