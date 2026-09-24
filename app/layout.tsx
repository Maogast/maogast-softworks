import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat'; // ✅ NEW
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';

/* ============================================================ */
/* ✅ Fonts — self-hosted, no layout shift                      */
/* ============================================================ */
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
});

/* ============================================================ */
/* ✅ Site-wide SEO Metadata                                    */
/* ============================================================ */
export const metadata: Metadata = {
  metadataBase: new URL('https://maogastsoftworks.com'),
  title: {
    default: 'Mgst (Maogast Softworks) – Software, Printing & AI Design in Nairobi',
    template: '%s | Mgst (Maogast Softworks)',
  },
  description:
    'Premier software development, high-quality printing, AI-driven design, 3D signage, corporate gifts, content management, and expert training services in Nairobi, Kenya. Mgst delivers scalable digital and creative solutions for modern businesses.',
  keywords: [
    'Mgst',
    'Maogast Softworks',
    'Software Development Nairobi',
    'Printing Services Kenya',
    'AI Design Nairobi',
    '3D Signage Nairobi',
    'Corporate Gifts Kenya',
    'Content Management Services',
    'Training & Webinars Nairobi',
    'Photo Mounting Framing',
    'Next.js Developer Kenya',
  ],
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
};

/* ============================================================ */
/* ✅ Root Layout                                                */
/* ============================================================ */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  /* ---------- Local Business Schema ---------- */
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Mgst (Maogast Softworks)',
    image: 'https://maogastsoftworks.com/og-image.jpg',
    '@id': 'https://maogastsoftworks.com',
    url: 'https://maogastsoftworks.com',
    telephone: '+254768564533',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kasarani',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi',
      postalCode: '00100',
      addressCountry: 'KE',
    },
    geo: { '@type': 'GeoCoordinates', latitude: -1.2921, longitude: 36.8219 },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    sameAs: [
      'https://wa.me/254768564533',
      'https://twitter.com/maogast',
      'https://linkedin.com/company/maogast-softworks',
      'https://instagram.com/maogastsoftworks',
      'https://www.facebook.com/share/1CXxFEVetp/',
      'https://www.tiktok.com/@maogastsoftworks',
    ],
  };

  /* ---------- Breadcrumb Schema ---------- */
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://maogastsoftworks.com' },
    ],
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body antialiased">
        {/* ---------- JSON-LD Structured Data ---------- */}
        <Script
          id="local-business-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Script
          id="breadcrumb-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        {/* ---------- Page Chrome ---------- */}
        <Header />
        <main>{children}</main>
        <Footer />

        {/* ✅ NEW: Global floating WhatsApp button — visible on every page */}
        <WhatsAppFloat />

        {/* ---------- Analytics ---------- */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}