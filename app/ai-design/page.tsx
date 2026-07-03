import AIDesignClient from './AIDesignClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI‑Powered Design in Nairobi | Mgst (Maogast Softworks)',
  description: 'Leading AI‑powered design services in Nairobi, Kenya. Mgst (Maogast Softworks) specializes in church branding, AI art, social media graphics, and expert prompt engineering for Midjourney and DALL·E.',
  alternates: {
    canonical: 'https://maogastsoftworks.com/ai-design',
  },
  openGraph: {
    title: 'AI‑Powered Design & Prompt Engineering | Mgst Softworks',
    description: 'Create stunning visuals for churches, events, and brands with expert AI prompt engineering in Nairobi, Kenya.',
    url: 'https://maogastsoftworks.com/ai-design',
    siteName: 'Maogast Softworks (MGST~Works)',
    images: [{ url: 'https://maogastsoftworks.com/og-ai-design.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom AI Design & Prompts | Mgst Softworks',
    description: 'From sermon series posters to custom AI art – Mgst creates visuals that inspire and convert for the Kenyan market.',
    images: ['https://maogastsoftworks.com/og-ai-design.jpg'],
  },
};

export default function AIDesignPage() {
  return <AIDesignClient />;
}