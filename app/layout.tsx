import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://maogastsoftworks.com'),
  title: {
    default: 'Mgst (Maogast Softworks) – Software, Printing & AI Design in Nairobi',
    template: '%s | Mgst (Maogast Softworks)'
  },
  description: 'Premier software development, high-quality printing, and AI-driven design services in Nairobi, Kenya. Mgst builds scalable digital solutions for modern businesses.',
  keywords: ['Mgst', 'Software Development Nairobi', 'Printing Services Kenya', 'AI Design Nairobi', 'Next.js Developer Kenya', 'Maogast Softworks'],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 1. Local Business Schema (updated with Mgst branding)
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Mgst (Maogast Softworks)',
    'image': 'https://maogastsoftworks.com/og-image.jpg',
    '@id': 'https://maogastsoftworks.com',
    'url': 'https://maogastsoftworks.com',
    'telephone': '+254768564533',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Kasarani',
      'addressLocality': 'Nairobi',
      'addressRegion': 'Nairobi',
      'postalCode': '00100',
      'addressCountry': 'KE',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': -1.2921,
      'longitude': 36.8219,
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      'opens': '08:00',
      'closes': '17:00',
    },
    'sameAs': [
      'https://wa.me/254768564533',
      'https://twitter.com/maogast',
      'https://linkedin.com/company/maogast-softworks',
      'https://instagram.com/maogastsoftworks'
    ]
  };

  // 2. BreadcrumbList Schema (appears on every page)
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://maogastsoftworks.com'
      }
    ]
  };

  return (
    <html lang="en">
      <body className="antialiased">
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
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}