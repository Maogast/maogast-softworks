import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      contact,
      service,
      message,
      // Optional — used by the Quote form
      projectType,
      budget,
      deadline,
      location,
    } = body;

    /* ---------- 1. Validate required fields ---------- */
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, service, message' },
        { status: 400 }
      );
    }

    /* ---------- 2. Config check ---------- */
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('❌ RESEND_API_KEY is missing');
      return NextResponse.json({ error: 'Email service config missing' }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const fromDomain = process.env.FROM_DOMAIN || 'maogastsoftworks.com';
    const toEmail = process.env.CONTACT_INBOX || 'maogastdevhub@gmail.com';

    const isQuote = Boolean(projectType);

    /* ---------- 3. Build a clean HTML email ---------- */
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #1f2937;">
        <div style="background: #0A192F; color: #fff; padding: 22px; border-radius: 10px 10px 0 0;">
          <h2 style="margin: 0; font-size: 20px;">
            ${isQuote ? '📋 New Quote Request' : '✉️ New Contact Message'}
          </h2>
          <p style="margin: 6px 0 0; font-size: 13px; color: #9ca3af;">maogastsoftworks.com</p>
        </div>

        <div style="background: #f9fafb; padding: 26px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb; border-top: none;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px 0; font-weight: 700; width: 140px; color: #374151;">Name:</td><td style="color: #111827;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 700; color: #374151;">Email:</td><td><a href="mailto:${escapeHtml(email)}" style="color: #F97316; text-decoration: none;">${escapeHtml(email)}</a></td></tr>
            ${contact ? `<tr><td style="padding: 8px 0; font-weight: 700; color: #374151;">Phone:</td><td>${escapeHtml(contact)}</td></tr>` : ''}
            <tr><td style="padding: 8px 0; font-weight: 700; color: #374151;">Service:</td><td>${escapeHtml(service)}</td></tr>
            ${projectType ? `<tr><td style="padding: 8px 0; font-weight: 700; color: #374151;">Project Type:</td><td>${escapeHtml(projectType)}</td></tr>` : ''}
            ${budget ? `<tr><td style="padding: 8px 0; font-weight: 700; color: #374151;">Budget:</td><td>${escapeHtml(budget)}</td></tr>` : ''}
            ${deadline ? `<tr><td style="padding: 8px 0; font-weight: 700; color: #374151;">Deadline:</td><td>${escapeHtml(deadline)}</td></tr>` : ''}
            ${location ? `<tr><td style="padding: 8px 0; font-weight: 700; color: #374151;">Location:</td><td>${escapeHtml(location)}</td></tr>` : ''}
          </table>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 22px 0;">

          <h3 style="margin: 0 0 10px; font-size: 15px; color: #0A192F;">Message</h3>
          <div style="white-space: pre-wrap; line-height: 1.65; background: #fff; padding: 16px; border-radius: 8px; border-left: 4px solid #F97316; color: #1f2937; font-size: 14px;">
            ${escapeHtml(message)}
          </div>

          <p style="font-size: 12px; color: #9ca3af; margin-top: 26px; text-align: center;">
            Sent via maogastsoftworks.com
          </p>
        </div>
      </div>
    `;

    const plainText = `
${isQuote ? 'NEW QUOTE REQUEST' : 'NEW CONTACT MESSAGE'} — maogastsoftworks.com

Name: ${name}
Email: ${email}
${contact ? `Phone: ${contact}\n` : ''}Service: ${service}
${projectType ? `Project Type: ${projectType}\n` : ''}${budget ? `Budget: ${budget}\n` : ''}${deadline ? `Deadline: ${deadline}\n` : ''}${location ? `Location: ${location}\n` : ''}
Message:
${message}

---
Reply directly to this email to reach the customer.
    `.trim();

    /* ---------- 4. Send via Resend ---------- */
    const result = await resend.emails.send({
      from: `"Maogast Website" <noreply@${fromDomain}>`,
      to: [toEmail],
      replyTo: email, // ✅ Replies go straight to the customer
      subject: isQuote
        ? `📋 Quote Request — ${name} (${service})`
        : `✉️ New Message — ${name} (${service})`,
      text: plainText,
      html: htmlBody,
    });

    const emailId = result.data?.id || 'unknown';
    console.log(`✅ ${isQuote ? 'Quote' : 'Contact'} email sent:`, emailId);

    return NextResponse.json({ success: true, emailId }, { status: 200 });
  } catch (error) {
    console.error('❌ send-email error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    );
  }
}

/* Small helper to prevent HTML injection in emails */
function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}