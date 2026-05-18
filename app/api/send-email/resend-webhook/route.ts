import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    // 1. Parse the webhook payload from Resend
    const payload = await request.json();
    console.log('Incoming webhook from Resend:', payload);

    // 2. Extract email data (Resend sends 'email.received' events inside 'data')
    const emailData = payload.data || payload;
    const { from, to, subject, text, html } = emailData;

    if (!from || !to) {
      return NextResponse.json({ error: 'Missing email fields' }, { status: 400 });
    }

    // 3. Forward the email to your Gmail using Resend's own API
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is missing');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const fromDomain = process.env.FROM_DOMAIN || 'maogastsoftworks.com';

    await resend.emails.send({
      from: `"Maogast Forwarder" <info@${fromDomain}>`,
      to: ['maogastdevhub@gmail.com'], // Your personal Gmail
      subject: `[FORWARDED] ${subject || 'No Subject'}`,
      text: `From: ${from}\nTo: ${to}\n\n${text || '(No text content)'}`,
      html: html ? `<div>From: ${from}<br>To: ${to}<br><br>${html}</div>` : undefined,
    });

    // 4. Acknowledge receipt to Resend
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Failed to process webhook' }, { status: 500 });
  }
}