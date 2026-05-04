import Link from 'next/link';
import Script from 'next/script';
import { 
  Shirt, Coffee, Printer, Megaphone, Brush, Package, 
  CheckCircle, HeartHandshake, Upload, Eye, Hammer, Truck,
  Star, ChevronDown
} from 'lucide-react';
import type { Metadata } from 'next';
import WhatsAppShareButton from '@/components/WhatsAppShareButton';

export const metadata: Metadata = {
  title: 'Printing & Branding Nairobi – Custom Apparel, Merchandise & Signage | Maogast Softworks',
  description: 'Top-tier printing services in Nairobi, Kenya. We specialize in custom T‑shirts, mugs, banners, business stationery, and shop branding with fast turnaround.',
  alternates: {
    canonical: 'https://maogastsoftworks.com/printing',
  },
  openGraph: {
    title: 'Printing & Branding Services in Nairobi | Maogast Softworks',
    description: 'From custom T‑shirts to complete storefront branding in Kenya – we bring your brand to life with premium quality.',
    url: 'https://maogastsoftworks.com/printing',
    siteName: 'Maogast Softworks',
    images: [{ url: 'https://maogastsoftworks.com/og-printing.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Printing & Branding Nairobi | Maogast Softworks',
    description: 'High‑quality custom prints, promotional products, and professional shop branding in Kenya.',
    images: ['https://maogastsoftworks.com/og-printing.jpg'],
  },
};

export default function PrintingPage() {
  const printingServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Printing and Branding Services",
    "serviceType": "Custom Merchandise and Signage",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Maogast Softworks",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nairobi",
        "addressCountry": "KE"
      }
    },
    "areaServed": { "@type": "State", "name": "Nairobi" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Printing Catalog",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Apparel Printing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Merchandise Branding" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Large Format Banner Printing" } }
      ]
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://maogastsoftworks.com" },
      { "@type": "ListItem", "position": 2, "name": "Printing & Branding", "item": "https://maogastsoftworks.com/printing" }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What printing methods do you use?",
        "acceptedAnswer": { "@type": "Answer", "text": "We use screen printing, heat transfer (DTF/sublimation), large‑format inkjet, and vinyl cutting – depending on the material and design complexity." }
      },
      {
        "@type": "Question",
        "name": "How long does a typical order take?",
        "acceptedAnswer": { "@type": "Answer", "text": "Small orders (e.g., 20‑50 T‑shirts) are ready in 2‑3 days. Larger bulk orders or complex signage may take 5‑7 days. Rush orders may be possible – ask us." }
      },
      {
        "@type": "Question",
        "name": "Do you deliver outside Nairobi?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. We ship nationwide via courier. Delivery charges vary by location, and we can also arrange pick‑up from our studio in Kasarani, Nairobi." }
      }
    ]
  };

  const priceTiers = [
    { range: '1 – 4 (Standard)', discount: '0%', round: 650, polo: 800 },
    { range: '5 – 10', discount: '5%', round: 617.5, polo: 760 },
    { range: '11 – 20', discount: '10%', round: 585, polo: 720 },
    { range: '21 – 300+', discount: '15%', round: 552.5, polo: 680 },
  ];

  return (
    <>
      <Script id="printing-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(printingServiceJsonLd) }} />
      <Script id="printing-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Script id="printing-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A192F] to-[#0F2A3F] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="printGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#F97316" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#printGrid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Printing & Branding in Nairobi
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            High‑quality printing, professional branding, and marketing materials tailored for the Kenyan market.
          </p>
          <div className="mt-8 animate-fade-in-up animation-delay-400">
            <Link href="/quote" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition transform hover:scale-105 hover:shadow-lg">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Products & Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What We Print & Brand</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">From merchandise to storefront signage – everything you need to build a memorable brand in Nairobi.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Shirt className="w-8 h-8 text-orange-600" />, title: 'Custom Apparel', desc: 'T‑shirts, hoodies, caps, and uniforms with screen print or heat transfer.' },
              { icon: <Coffee className="w-8 h-8 text-orange-600" />, title: 'Promotional Products', desc: 'Mugs, water bottles, pens, bags, keychains – perfect for giveaways and events.' },
              { icon: <Printer className="w-8 h-8 text-orange-600" />, title: 'Business Stationery', desc: 'Letterheads, envelopes, business cards, and notepads with your logo.' },
              { icon: <Megaphone className="w-8 h-8 text-orange-600" />, title: 'Marketing Collateral', desc: 'Flyers, brochures, posters, banners, and roll‑up stands for advertising.' },
              { icon: <Brush className="w-8 h-8 text-orange-600" />, title: 'Shop & Firm Branding', desc: 'Storefront signage, window decals, vehicle wraps, and interior branding.' },
              { icon: <Package className="w-8 h-8 text-orange-600" />, title: 'Labels & Packaging', desc: 'Custom stickers, product labels, and branded packaging boxes.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Equipment Highlights */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Premium Quality, Fast Turnaround</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">We use modern equipment and premium materials to ensure your prints are vivid, durable, and delivered on time.</p>
              <ul className="mt-6 space-y-3">
                {[
                  '8‑in‑1 heat press – for flawless T‑shirts, mugs, and more',
                  'High‑resolution large‑format printer – for banners and posters',
                  'Precise plotter cutter – for vinyl decals and stickers',
                  'Eco‑friendly sublimation inks – long‑lasting colors',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 group">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-3">🖨️✨</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Our workshop is equipped to handle bulk orders and tight deadlines. No job is too small or too large.</p>
            </div>
          </div>
        </div>
      </section>

      {/* T‑Shirt Bulk Pricing Table */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">👕 T‑Shirt Bulk Pricing</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">The more you order, the more you save. Prices are per shirt (KES).</p>
          </div>
          <div className="overflow-x-auto rounded-xl shadow">
            <table className="min-w-full bg-white dark:bg-gray-800">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="px-6 py-3 text-left">Quantity</th>
                  <th className="px-6 py-3 text-left">Discount</th>
                  <th className="px-6 py-3 text-left">Round Neck (KES)</th>
                  <th className="px-6 py-3 text-left">Polo (KES)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {priceTiers.map((tier, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-6 py-4 font-medium">{tier.range}</td>
                    <td className="px-6 py-4">{tier.discount}</td>
                    <td className="px-6 py-4">{tier.round.toFixed(2)}</td>
                    <td className="px-6 py-4">{tier.polo.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 text-center mt-4">* Prices include design & setup fee. *</p>
        </div>
      </section>

      {/* Simple Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How It Works</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">From artwork to finished product – smooth and transparent.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Send Your Design', icon: <Upload className="w-6 h-6" />, desc: 'Upload a logo, sketch, or idea – we help refine it.' },
              { step: '2', title: 'Approve Proof', icon: <Eye className="w-6 h-6" />, desc: 'We send a digital mockup for your approval.' },
              { step: '3', title: 'Production', icon: <Hammer className="w-6 h-6" />, desc: 'We print and quality check each item.' },
              { step: '4', title: 'Delivery', icon: <Truck className="w-6 h-6" />, desc: 'Shipped to your door or ready for pickup.' }
            ].map((step) => (
              <div key={step.step} className="text-center group">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16 bg-white dark:bg-gray-900 border-t border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-6"><Star className="w-8 h-8 text-orange-500 mx-auto fill-orange-500" /></div>
          <blockquote className="text-center text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic">
            “Maogast delivered 200 custom T‑shirts for our event in under a week. The prints were flawless, and the team was incredibly helpful with design advice. Highly recommend!”
          </blockquote>
          <p className="text-center mt-4 text-gray-500 dark:text-gray-400">— James M., Event Organizer</p>
        </div>
      </section>

      {/* Marketing & Branding Add‑on */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Beyond Printing – Full Branding Support</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">We don&apos;t just print – we help you build a cohesive brand identity that attracts customers.</p>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1">
              <HeartHandshake className="w-10 h-10 text-orange-600 mx-auto mb-3" />
              <h3 className="text-xl font-semibold">Logo & Visual Identity</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Professional logo design and brand guidelines.</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1">
              <Megaphone className="w-10 h-10 text-orange-600 mx-auto mb-3" />
              <h3 className="text-xl font-semibold">Marketing Strategy</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Social media ads, flyer campaigns, and launch support.</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1">
              <Printer className="w-10 h-10 text-orange-600 mx-auto mb-3" />
              <h3 className="text-xl font-semibold">Shop Branding Packages</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Complete storefront branding – indoor & outdoor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              { q: 'What printing methods do you use?', a: 'We use screen printing, heat transfer (DTF/sublimation), large‑format inkjet, and vinyl cutting – depending on the material and design complexity.' },
              { q: 'How long does a typical order take?', a: 'Small orders (e.g., 20‑50 T‑shirts) are ready in 2‑3 days. Larger bulk orders or complex signage may take 5‑7 days. Rush orders may be possible – ask us.' },
              { q: 'Do you deliver outside Nairobi?', a: 'Yes. We ship nationwide via courier. Delivery charges vary by location, and we can also arrange pick‑up from our studio in Kasarani, Nairobi.' }
            ].map((faq, i) => (
              <details key={i} className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 open:shadow-md transition">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-semibold text-gray-900 dark:text-white">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-orange-600 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-3 text-gray-600 dark:text-gray-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with WhatsApp Share Button */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to bring your brand to life?</h2>
          <p className="mt-4 text-orange-100 max-w-xl mx-auto">Let&apos;s discuss your project – whether it&apos;s a single T‑shirt order or a complete shop branding.</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-orange-600 bg-white hover:bg-gray-100 transition transform hover:scale-105"
            >
              Request a Quote
            </Link>
            <WhatsAppShareButton />
          </div>
        </div>
      </section>
    </>
  );
}