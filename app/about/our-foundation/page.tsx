import Link from 'next/link';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Foundation – Built on Code, Grounded in Faith | Mgst (Maogast Softworks)',
  description: 'Discover the motto, vision, mission, and values driving Mgst (Maogast Softworks) in Nairobi, Kenya: Code, Faith, Innovation, and Community. We provide software, 3D signage, printing, and AI design rooted in integrity.',
  alternates: {
    canonical: 'https://maogastsoftworks.com/about/our-foundation',
  },
  openGraph: {
    title: 'Our Foundation | Built on Code, Grounded in Faith | Mgst',
    description: 'Discover the 4 pillars of Mgst Softworks: Code, Faith, Innovation, and Community. Serving Kenya with purpose across software, 3D signage, and design.',
    url: 'https://maogastsoftworks.com/about/our-foundation',
    siteName: 'Maogast Softworks (MGST~Works)',
    images: [{ url: 'https://maogastsoftworks.com/og-our-foundation.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Foundation – Built on Code, Grounded in Faith | Mgst',
    description: 'The heart of Mgst (Maogast Softworks): Vision, Mission, and Values grounded in Nairobi.',
    images: ['https://maogastsoftworks.com/og-our-foundation.jpg'],
  },
};

export default function OurFoundationPage() {
  // ... (JSX remains exactly as you provided it, keeping your highlighted Link block untouched)
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://maogastsoftworks.com" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://maogastsoftworks.com/about" },
      { "@type": "ListItem", "position": 3, "name": "Our Foundation", "item": "https://maogastsoftworks.com/about/our-foundation" }
    ]
  };

  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Our Foundation – Built on Code, Grounded in Faith",
    "description": "Discover the motto, vision, mission, and corporate values of Maogast Softworks.",
    "url": "https://maogastsoftworks.com/about/our-foundation",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "item": { "@type": "CreativeWork", "name": "Motto", "text": "Built on Code, Grounded in Faith" } },
        { "@type": "ListItem", "position": 2, "item": { "@type": "Thing", "name": "Vision", "description": "To empower organizations across Africa with intelligent, accessible, and faith-centered technology." } },
        { "@type": "ListItem", "position": 3, "item": { "@type": "Thing", "name": "Mission", "description": "Deliver unconventional solutions in Software, AI Design, Printing, and Training founded on technical excellence and integrity." } },
        { "@type": "ListItem", "position": 4, "item": { "@type": "DefinedTermSet", "name": "Our Values", "description": "Code (Clean Architecture), Faith (Honesty & Community), Innovation (AI & Modern Tech), Community (Relationships over Transactions)" } }
      ]
    }
  };

  return (
    <>
      <Script id="our-foundation-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Script id="our-foundation-webpage" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }} />

      <div className="min-h-screen bg-white dark:bg-[#0A192F]">
        {/* Hero Section with Motto */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-orange-50/50 dark:from-blue-900/10 dark:to-orange-900/10 pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-block bg-blue-100 dark:bg-blue-900/30 rounded-full px-4 py-1 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wide mb-6 uppercase">
              The Heart of Maogast
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Built on Code, <br />
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Grounded in Faith</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Where technical precision meets moral direction. Our foundation bridges the gap between complex technology and uncompromising integrity.
            </p>
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 rounded-full px-4 py-1 mt-6">
              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">📍 Based in Nairobi, Kenya – Serving African businesses</span>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-white dark:bg-[#112240] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition group">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-50 dark:group-hover:bg-orange-900/30 transition-colors">
                <svg className="w-6 h-6 text-blue-600 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-400">
                To empower organizations across Africa with intelligent, accessible, and faith-centered technology – starting right here in Nairobi. We envision a future where every business thrives with ethical AI and custom software.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white dark:bg-[#112240] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition group">
              <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                <svg className="w-6 h-6 text-orange-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Deliver unconventional solutions in Software, AI Design, Printing, and Training that solve real Kenyan problems. Every product we ship – from mobile apps to branded mugs – is founded on technical excellence and integrity.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white dark:bg-[#112240] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition group">
              <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-50 dark:group-hover:bg-purple-900/30 transition-colors">
                <svg className="w-6 h-6 text-emerald-600 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Our Values</h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2"><span className="text-blue-600 text-xl">✦</span> <strong>Code:</strong> Clean, secure, and efficient architecture.</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 text-xl">✦</span> <strong>Faith:</strong> Honesty, compassion, and community focus.</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 text-xl">✦</span> <strong>Innovation:</strong> Always embracing the next frontier of AI & Tech.</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 text-xl">✦</span> <strong>Community:</strong> Building relationships over transactions.</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition shadow-lg hover:shadow-xl">
              Let’s Build Something Meaningful
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}