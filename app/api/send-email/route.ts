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
    const websiteUrl = `https://${fromDomain}`;

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

    // 2. Client auto‑reply email – enhanced
    const clientSubject = `Thank you for your quote request – Maogast Softworks`;
    const clientHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #F97316;">Hello ${name},</h2>
        <p>Thank you for reaching out to <strong>Maogast Softworks</strong>. We have received your request for <strong>${service}</strong>.</p>
        <p>Our team will review your inquiry and get back to you within <strong>24 hours</strong>.</p>
        <p>In the meantime, feel free to explore our website to learn more about our services and past projects:</p>
        <div style="text-align: center; margin: 25px 0;">
          <a href="${websiteUrl}" style="background-color: #F97316; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block;">Visit Maogast Softworks →</a>
        </div>
        <p>You can also browse specific services directly:</p>
        <ul>
          <li><a href="${websiteUrl}/software">Software Development</a></li>
          <li><a href="${websiteUrl}/printing">Printing & Branding</a></li>
          <li><a href="${websiteUrl}/ai-design">AI‑Powered Design</a></li>
          <li><a href="${websiteUrl}/training">Training & Webinars</a></li>
        </ul>
        <br/>
        <p>Best regards,<br/><strong>The Maogast Softworks Team</strong></p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: #888;">${websiteUrl} | +254 768 564 533 | info@${fromDomain}</p>
      </div>
    `;
    const clientText = `Hello ${name},\n\nThank you for reaching out to Maogast Softworks. We have received your request for ${service}.\n\nOur team will review your inquiry and get back to you within 24 hours.\n\nIn the meantime, visit our website: ${websiteUrl}\n\nYou can also check our services:\n- Software Development: ${websiteUrl}/software\n- Printing & Branding: ${websiteUrl}/printing\n- AI Design: ${websiteUrl}/ai-design\n- Training: ${websiteUrl}/training\n\nBest regards,\nThe Maogast Softworks Team\n\n${websiteUrl} | +254 768 564 533 | info@${fromDomain}`;

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