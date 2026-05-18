import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    // 1. Parse the webhook payload
    const payload = await request.json();
    console.log('✅ Webhook received:', JSON.stringify(payload, null, 2));

    // 2. Validate that this is an email.received event
    if (payload.type !== 'email.received') {
      console.log(`Ignoring webhook event: ${payload.type}`);
      return NextResponse.json({ status: 'ignored' });
    }

    // 3. Extract email data
    const emailData = payload.data;
    const { from, to, subject, text, html } = emailData;

    if (!from || !to) {
      console.warn('Missing from/to in email data');
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // 4. Forward using Resend
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is missing');
      return NextResponse.json({ error: 'Config missing' }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const fromDomain = process.env.FROM_DOMAIN || 'maogastsoftworks.com';

    await resend.emails.send({
      from: `"Maogast Forwarder" <info@${fromDomain}>`,
      to: ['maogastdevhub@gmail.com'],
      subject: `[FORWARDED] ${subject || 'No Subject'}`,
      text: `From: ${from}\nTo: ${to}\n\n${text || '(No text content)'}`,
      html: html ? `<div>From: ${from}<br>To: ${to}<br><br>${html}</div>` : undefined,
    });

    console.log('✅ Successfully forwarded to maogastdevhub@gmail.com');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('❌ Webhook error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}