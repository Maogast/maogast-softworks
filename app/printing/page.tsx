import Link from 'next/link';
import { Shirt, Coffee, Printer, Megaphone, Brush, Package, CheckCircle, HeartHandshake } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Printing & Branding – Custom Apparel, Merchandise & Signage | Maogast Softworks',
  description: 'Premium printing services: T‑shirts, mugs, banners, business stationery, and shop branding. Fast turnaround, high quality, and professional design support.',
  openGraph: {
    title: 'Printing & Branding | Maogast Softworks',
    description: 'From custom T‑shirts to complete storefront branding – we bring your brand to life.',
    url: 'https://maogast-softworks.vercel.app/printing',
    siteName: 'Maogast Softworks',
    images: [{ url: 'https://maogast-softworks.vercel.app/og-printing.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Printing & Branding | Maogast Softworks',
    description: 'High‑quality custom prints, promotional products, and professional branding services.',
    images: ['https://maogast-softworks.vercel.app/og-printing.jpg'],
  },
};

export default function PrintingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A192F] to-[#0F2A3F] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Printing & Branding</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            High‑quality printing, professional branding, and marketing materials that make your business stand out.
          </p>
          <div className="mt-8">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition transform hover:scale-105"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Products & Services Grid – unchanged */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What We Print & Brand</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              From merchandise to storefront signage – everything you need to build a memorable brand.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shirt className="w-8 h-8 text-orange-600" />,
                title: 'Custom Apparel',
                desc: 'T‑shirts, hoodies, caps, and uniforms with screen print or heat transfer.',
              },
              {
                icon: <Coffee className="w-8 h-8 text-orange-600" />,
                title: 'Promotional Products',
                desc: 'Mugs, water bottles, pens, bags, keychains – perfect for giveaways and events.',
              },
              {
                icon: <Printer className="w-8 h-8 text-orange-600" />,
                title: 'Business Stationery',
                desc: 'Letterheads, envelopes, business cards, and notepads with your logo.',
              },
              {
                icon: <Megaphone className="w-8 h-8 text-orange-600" />,
                title: 'Marketing Collateral',
                desc: 'Flyers, brochures, posters, banners, and roll‑up stands for advertising.',
              },
              {
                icon: <Brush className="w-8 h-8 text-orange-600" />,
                title: 'Shop & Firm Branding',
                desc: 'Storefront signage, window decals, vehicle wraps, and interior branding.',
              },
              {
                icon: <Package className="w-8 h-8 text-orange-600" />,
                title: 'Labels & Packaging',
                desc: 'Custom stickers, product labels, and branded packaging boxes.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
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
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                We use modern equipment and premium materials to ensure your prints are vivid, durable, and delivered on time.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  '8‑in‑1 heat press – for flawless T‑shirts, mugs, and more',
                  'High‑resolution large‑format printer – for banners and posters',
                  'Precise plotter cutter – for vinyl decals and stickers',
                  'Eco‑friendly sublimation inks – long‑lasting colors',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center">
              <div className="text-5xl mb-3">🖨️✨</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Our workshop is equipped to handle bulk orders and tight deadlines. No job is too small or too large.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How It Works</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              From artwork to finished product – smooth and transparent.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Send Your Design', desc: 'Upload a logo, sketch, or idea – we help refine it.' },
              { step: '2', title: 'Approve Proof', desc: 'We send a digital mockup for your approval.' },
              { step: '3', title: 'Production', desc: 'We print and quality check each item.' },
              { step: '4', title: 'Delivery', desc: 'Shipped to your door or ready for pickup.' },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing & Branding Add‑on */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Beyond Printing – Full Branding Support</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We don&apos;t just print – we help you build a cohesive brand identity that attracts customers.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl">
              <HeartHandshake className="w-10 h-10 text-orange-600 mx-auto mb-3" />
              <h3 className="text-xl font-semibold">Logo & Visual Identity</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Professional logo design and brand guidelines.</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl">
              <Megaphone className="w-10 h-10 text-orange-600 mx-auto mb-3" />
              <h3 className="text-xl font-semibold">Marketing Strategy</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Social media ads, flyer campaigns, and launch support.</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl">
              <Printer className="w-10 h-10 text-orange-600 mx-auto mb-3" />
              <h3 className="text-xl font-semibold">Shop Branding Packages</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Complete storefront branding – indoor & outdoor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to bring your brand to life?</h2>
          <p className="mt-4 text-orange-100 max-w-xl mx-auto">
            Let&apos;s discuss your project – whether it&apos;s a single T‑shirt order or a complete shop branding.
          </p>
          <div className="mt-8">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-orange-600 bg-white hover:bg-gray-100 transition"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}