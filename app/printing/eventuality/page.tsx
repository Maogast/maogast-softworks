import Link from 'next/link';
import Script from 'next/script';
import { 
  Shirt, Heart, Image as ImageIcon, Flag, BookOpen, 
  CheckCircle, Upload, Eye, Truck, ChevronDown, Users, Calendar, Phone, Mail
} from 'lucide-react';
import type { Metadata } from 'next';
import WhatsAppShareButton from '@/components/WhatsAppShareButton';

export const metadata: Metadata = {
  title: 'Memorial & Funeral Printing Services – T‑Shirts, Banners, Photo Framing | Maogast Softworks',
  description: 'Respectful, high-quality printing for memorial services: custom T‑shirts, large banners, photo framing, condolence books, and remembrance cards. Fast turnaround in Nairobi, Kenya.',
  alternates: {
    canonical: 'https://maogastsoftworks.com/printing/eventuality',
  },
  openGraph: {
    title: 'Memorial & Funeral Printing Services in Nairobi | Maogast Softworks',
    description: 'Honor your loved ones with custom memorial T‑shirts, banners, framed photos, and remembrance materials – printed with care and delivered on time.',
    url: 'https://maogastsoftworks.com/printing/eventuality',
    siteName: 'Maogast Softworks',
    images: [{ url: 'https://maogastsoftworks.com/og-eventuality.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Memorial & Funeral Printing | Maogast Softworks',
    description: 'Custom memorial T‑shirts, banners, photo framing, and condolence books in Kenya.',
    images: ['https://maogastsoftworks.com/og-eventuality.jpg'],
  },
};

export default function EventualityPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Memorial & Funeral Printing Services",
    "serviceType": "Custom Memorial Printing",
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
      "name": "Memorial Printing Catalog",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Memorial T-Shirts" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Funeral Banners & Signage" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commemorative Photo Framing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Condolence Books & Cards" } }
      ]
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://maogastsoftworks.com" },
      { "@type": "ListItem", "position": 2, "name": "Printing & Branding", "item": "https://maogastsoftworks.com/printing" },
      { "@type": "ListItem", "position": 3, "name": "Memorial & Funeral Services", "item": "https://maogastsoftworks.com/printing/eventuality" }
    ]
  };

  return (
    <>
      <Script id="eventuality-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Script id="eventuality-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A1A2E] to-[#2D1B2D] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="memorialGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#F9A8D4" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#memorialGrid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Memorial & Funeral Printing
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            With compassion and care, we create printed memorial items that honor your loved ones and comfort those who mourn.
          </p>
          <div className="mt-8 animate-fade-in-up animation-delay-400">
            <Link href="/quote" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 transition transform hover:scale-105 hover:shadow-lg">
              Inquire Now – We Are Here For You
            </Link>
          </div>
        </div>
      </section>

      {/* Memorial Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How We Honor Your Loved Ones</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Our printing services are designed with dignity, respect, and careful attention to detail – so you can focus on family and remembrance.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Shirt className="w-8 h-8 text-rose-600" />, title: 'Memorial T‑Shirts', desc: 'Custom printed with the name, dates, photo, and a favorite verse or message. Available in all sizes.' },
              { icon: <Flag className="w-8 h-8 text-rose-600" />, title: 'Funeral Banners', desc: 'Large‑format banners for the church, hall, or graveside – vibrant, durable, and weather‑resistant.' },
              { icon: <ImageIcon className="w-8 h-8 text-rose-600" />, title: 'Commemorative Photo Framing', desc: 'Professional framing of a portrait or group photo for display at the service and as a lasting keepsake.' },
              { icon: <BookOpen className="w-8 h-8 text-rose-600" />, title: 'Condolence Books & Cards', desc: 'Elegant condolence registers, remembrance cards, and thank‑you notes for family and friends.' },
              { icon: <Heart className="w-8 h-8 text-rose-600" />, title: 'Remembrance Keepsakes', desc: 'Custom coasters, keychains, or small plaques engraved with name, date, and scripture.' },
              { icon: <Users className="w-8 h-8 text-rose-600" />, title: 'Bulk Memorial Packages', desc: 'Complete set – shirts, banners, photo frame, and condolence book – at a discounted bundle price.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-rose-200 dark:group-hover:bg-rose-900/50 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgent / Timeline Note */}
      <section className="py-16 bg-white dark:bg-gray-900 border-t border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="flex justify-center mb-4">
            <Calendar className="w-12 h-12 text-rose-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Urgent Orders Welcome</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            We understand that death often comes unexpectedly. <strong>We can prepare most memorial items within 24–48 hours</strong>, including T‑shirts, banners, and framing. Please reach out immediately – we will prioritize your order.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <a href="tel:0768564533" className="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition">
              <Phone className="w-4 h-4" /> Call 0768 564 533
            </a>
            <a href="mailto:info@maogastsoftworks.com" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <Mail className="w-4 h-4" /> Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Simple Step Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How to Order</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">We make it simple and respectful – you reach out, we handle the rest.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Reach Out', icon: <Phone className="w-6 h-6" />, desc: 'Call or WhatsApp us with your needs – we listen compassionately.' },
              { step: '2', title: 'Send Details', icon: <Upload className="w-6 h-6" />, desc: 'Share the name, dates, photo, and any design ideas or scripture.' },
              { step: '3', title: 'Approve Mockup', icon: <Eye className="w-6 h-6" />, desc: 'We send a digital proof for your approval before printing.' },
              { step: '4', title: 'Delivered with Care', icon: <Truck className="w-6 h-6" />, desc: 'We deliver to the funeral venue or your home – on time, with dignity.' }
            ].map((step) => (
              <div key={step.step} className="text-center group">
                <div className="w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Package / Bundle */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">📦 Memorial Package – One Stop</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">Our most common request – everything you need for a respectful, memorable service.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg flex items-center gap-2"><CheckCircle className="w-5 h-5 text-rose-600" /> What&apos;s Included</h3>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-rose-600 mt-0.5 shrink-0" /> 50 Memorial T‑Shirts (custom with photo, name, dates)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-rose-600 mt-0.5 shrink-0" /> 2 Large Funeral Banners (church + graveside)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-rose-600 mt-0.5 shrink-0" /> 1 Framed Portrait (premium frame, glass included)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-rose-600 mt-0.5 shrink-0" /> 50 Remembrance Cards (with verse and photo)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg flex items-center gap-2"><Heart className="w-5 h-5 text-rose-600" /> Bundle Price</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400">Regular price: <span className="line-through">KES 85,000</span></p>
                <p className="text-3xl font-bold text-rose-600 mt-2">KES 72,000</p>
                <p className="text-sm text-gray-500 mt-1">* Inclusive of design & delivery within Nairobi</p>
                <Link href="/quote" className="inline-block mt-4 px-6 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition">
                  Request This Package
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950 border-t border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-6"><Heart className="w-8 h-8 text-rose-500 mx-auto fill-rose-500" /></div>
          <blockquote className="text-center text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic">
            “When my father passed, I had no idea where to get memorial T‑shirts and a banner in time. Maogast made it so easy. The shirts were beautiful, the banner was large and clear, and they delivered it to the church on the day of the funeral. Thank you so much.”
          </blockquote>
          <p className="text-center mt-4 text-gray-500 dark:text-gray-400">— Grace W., Nairobi</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              { q: 'How quickly can you print memorial T‑shirts?', a: 'If we receive the photo and names by 10 AM, we can have the shirts ready for pickup or delivery the next day (Sunday through Friday).' },
              { q: 'Do you offer discounts for larger memorial orders?', a: 'Yes. For orders above 100 pieces, please contact us directly for a custom quote. We also have bundles for full memorial packages.' },
              { q: 'Can you deliver to Kisii or other upcountry towns?', a: 'Yes, we ship nationwide via courier. We work with the funeral home or family to arrange delivery to the venue or family home.' }
            ].map((faq, i) => (
              <details key={i} className="group bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm p-5 open:shadow-md transition">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-semibold text-gray-900 dark:text-white">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-rose-600 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-3 text-gray-600 dark:text-gray-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with WhatsApp */}
      <section className="py-20 bg-rose-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">In the time of grief, let us serve you</h2>
          <p className="mt-4 text-rose-100 max-w-xl mx-auto">We are here to help you honor your loved one with dignity. Reach out anytime – we respond fast.</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-rose-600 bg-white hover:bg-gray-100 transition transform hover:scale-105"
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