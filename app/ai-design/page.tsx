import AIDesignClient from './AIDesignClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Design & Cinematic Art in Nairobi | Mgst (Maogast Softworks)',
  description: 'AI-powered design, cinematic photo mounting, and expert prompt engineering in Nairobi, Kenya. Mgst specializes in church branding, AI art, and visual storytelling.',
  alternates: {
    canonical: 'https://maogastsoftworks.com/ai-design',
  },
  openGraph: {
    title: 'AI Design & Cinematic Art | Mgst Softworks',
    description: 'Create stunning AI visuals, cinematic portraits, and brands with expert prompt engineering and premium photo mounting in Nairobi.',
    url: 'https://maogastsoftworks.com/ai-design',
    siteName: 'Maogast Softworks (MGST~Works)',
    images: [{ url: 'https://maogastsoftworks.com/og-ai-design.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Design & Cinematic Art | Mgst Softworks',
    description: 'From sermon series posters to cinematic art, photo mounting, and AI-powered creativity.',
    images: ['https://maogastsoftworks.com/og-ai-design.jpg'],
  },
};

export default function AIDesignPage() {
  return <AIDesignClient />;
}