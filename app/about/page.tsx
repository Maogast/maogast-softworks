import TeamSection from '@/components/TeamSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Maogast Softworks – Team, Mission & Values',
  description: 'We are a registered Kenyan company specialising in software, printing, and AI design. Meet our team and learn what drives us.',
  openGraph: {
    title: 'About Maogast Softworks',
    description: 'A team of developers, designers, and creatives dedicated to exceptional solutions.',
    url: 'https://maogast-softworks.vercel.app/about',
    siteName: 'Maogast Softworks',
    images: [{ url: 'https://maogast-softworks.vercel.app/og-about.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Maogast Softworks',
    description: 'Meet the people behind the code, prints, and designs.',
    images: ['https://maogast-softworks.vercel.app/og-about.jpg'],
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl font-bold">About Maogast Softworks</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            We are a team of developers, designers, and creatives dedicated to delivering exceptional software, printing, and AI-powered design.
          </p>
        </div>
      </section>
      <TeamSection />
    </>
  );
}