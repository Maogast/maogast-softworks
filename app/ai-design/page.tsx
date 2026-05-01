import AIDesignClient from './AIDesignClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI‑Powered Design Nairobi – Church Branding & Prompt Engineering | Maogast Softworks',
  description: 'Professional AI‑powered design services in Kenya. We specialize in church posters, social media graphics, and expert prompt engineering for Midjourney and DALL·E.',
  alternates: {
    canonical: 'https://maogastsoftworks.com/ai-design',
  },
  openGraph: {
    title: 'AI‑Powered Design & Prompt Engineering | Maogast Softworks',
    description: 'Stunning visuals for churches, events, and organic brands – powered by expert prompt engineering in Nairobi.',
    url: 'https://maogastsoftworks.com/ai-design',
    siteName: 'Maogast Softworks',
    images: [{ url: 'https://maogastsoftworks.com/og-ai-design.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom AI Design & Prompts | Maogast Softworks',
    description: 'From sermon series posters to custom AI art – we create visuals that inspire and convert.',
    images: ['https://maogastsoftworks.com/og-ai-design.jpg'],
  },
};

export default function AIDesignPage() {
  return <AIDesignClient />;
}