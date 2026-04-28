import AIDesignClient from './AIDesignClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI‑Powered Design – Posters, Church Branding & Prompt Engineering | Maogast Softworks',
  description: 'Professional AI‑powered design services: church posters, social media graphics, product ads, and custom prompt engineering. Fast turnaround and expert craftsmanship.',
  openGraph: {
    title: 'AI‑Powered Design | Maogast Softworks',
    description: 'Stunning visuals for churches, events, and brands – powered by prompt engineering.',
    url: 'https://maogast-softworks.vercel.app/ai-design',
    siteName: 'Maogast Softworks',
    images: [{ url: 'https://maogast-softworks.vercel.app/og-ai-design.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI‑Powered Design | Maogast Softworks',
    description: 'From sermon series posters to AI art – we create visuals that inspire.',
    images: ['https://maogast-softworks.vercel.app/og-ai-design.jpg'],
  },
};

export default function AIDesignPage() {
  return <AIDesignClient />;
}