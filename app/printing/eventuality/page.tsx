import Script from 'next/script';
import { 
  Shirt, Heart, Image as ImageIcon, Flag, BookOpen, 
  CheckCircle, Upload, Eye, Truck, ChevronDown, Calendar, Phone, MessageCircle
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Memorial & Funeral Printing Services – Portraits, Banners, T-Shirts | Mgst Softworks',
  description: 'Respectful, high-quality printing for memorial services by Mgst: custom T-shirts, large banners, portrait framing, condolence books, and remembrance keepsakes. Fast, compassionate service in Nairobi, Kenya.',
  alternates: {
    canonical: 'https://maogastsoftworks.com/printing/eventuality',
  },
  openGraph: {
    title: 'Memorial & Funeral Printing Services in Nairobi | Mgst Softworks',
    description: 'Honor your loved one with custom memorial T-shirts, banners, framed portraits, and keepsakes – printed with care and delivered fast.',
    url: 'https://maogastsoftworks.com/printing/eventuality',
    siteName: 'Maogast Softworks',
    images: [{ url: 'https://maogastsoftworks.com/og-eventuality.jpg', width: 1200, height: 630 }],
  },
};

export default function EventualityPage() {
  // WhatsApp Link with a pre-filled compassionate message
  const whatsappMessage = encodeURIComponent("Hello Maogast Softworks, I need urgent assistance with memorial printing (Banners, T-shirts, Portrait, or Keepsakes). Please assist.");
  const whatsappLink = `https://wa.me/254768564533?text=${whatsappMessage}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Memorial & Funeral Printing Services",
    "serviceType": "Custom Memorial Printing",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Maogast Softworks",
      "telephone": "+254768564533",
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
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commemorative Photo Framing & Portraits" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Memorial Keepsakes" } }
      ]
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://maogastsoftworks.com" },
      { "@type": "ListItem", "position": 2, "name": "Printing & Branding", "item": "https://maogastsoftworks.com/printing" },
      { "@type": "ListItem", "position": 3, "name": "Memorial Services", "item": "https://maogastsoftworks.com/printing/eventuality" }
    ]
  };

  return (
    <>
      <Script id="eventuality-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Script id="eventuality-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* 1. EMPATHETIC HERO SECTION */}
      <section className="bg-gradient-to-br from-[#1A1A2E] to-[#2D1B2D] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="memorialGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F9A8D4" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#memorialGrid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-rose-600/20 border border-rose-400/30 rounded-full px-5 py-2 mb-8 animate-fade-in-up">
            <Heart className="w-4 h-4 text-rose-400" />
            <span className="text-sm font-medium text-rose-300">We are here for you during this difficult time</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up tracking-tight">
            Honoring a Life <span className="text-rose-400">Well Lived</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 leading-relaxed">
            In moments of grief, we help you create beautiful, dignified memorials. From custom portraits and banners to matching T-shirts and keepsakes, we handle the details with care so you can focus on family.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up animation-delay-400">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full shadow-lg text-white bg-green-600 hover:bg-green-700 transition transform hover:-translate-y-1 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Speak to us on WhatsApp
            </a>
            <a 
              href="tel:0768564533" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full shadow-lg text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition transform hover:-translate-y-1 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              Call: 0768 564 533
            </a>
          </div>
        </div>
      </section>

      {/* 2. MEMORIAL SERVICES GRID */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Memorial Services</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Everything you need to create a respectful and memorable service, prepared with the highest quality.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <ImageIcon className="w-8 h-8 text-rose-600" />, title: 'Memorial Portraits & Framing', desc: 'We professionally retouch, print, and frame large portraits of your loved one for display at the service and as a lasting family keepsake.' },
              { icon: <Shirt className="w-8 h-8 text-rose-600" />, title: 'Custom Memorial T-Shirts', desc: 'Beautifully printed shirts featuring the photo, name, dates, and a favorite verse. Available in all sizes and colors for family and friends.' },
              { icon: <Flag className="w-8 h-8 text-rose-600" />, title: 'Funeral Banners', desc: 'Large-format, high-resolution banners for the church, hall, or graveside. Designed to be easily readable and delivered on time.' },
              { icon: <Heart className="w-8 h-8 text-rose-600" />, title: 'Memorable Keepsakes', desc: 'Custom mugs, keychains, magnets, or small plaques engraved with their name, date, and a special message to cherish forever.' },
              { icon: <BookOpen className="w-8 h-8 text-rose-600" />, title: 'Condolence Books & Programmes', desc: 'Elegant funeral programme booklets, condolence registers, and thank-you cards designed to match your theme.' },
              { icon: <Truck className="w-8 h-8 text-rose-600" />, title: 'Nationwide Delivery', desc: 'We understand the urgency. We deliver directly to the funeral venue or family home across Kenya, ensuring everything arrives safely.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group border border-gray-100 dark:border-gray-700">
                <div className="w-14 h-14 bg-rose-50 dark:bg-rose-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE "COMPLETE MEMORIAL KIT" */}
      <section className="py-20 bg-white dark:bg-gray-900 border-t border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">The Complete Memorial Kit</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              We offer a customizable package so you can get exactly what you need without the stress of sourcing from different vendors.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                  <CheckCircle className="w-6 h-6 text-rose-600" /> Bundle & Save
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-rose-600 mt-1 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-lg"><strong>1x Framed Portrait</strong> (High-res retouch & premium frame)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-rose-600 mt-1 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-lg"><strong>2x Large Funeral Banners</strong> (For church & graveside)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-rose-600 mt-1 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-lg"><strong>Custom Memorial T-Shirts</strong> (For immediate family)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-rose-600 mt-1 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-lg"><strong>50x Memorable Keepsakes</strong> (Mugs or keychains)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-center">
                <Heart className="w-12 h-12 text-rose-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Flexible Pricing</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  We know budgets vary. Let us know what you need, and we will provide a transparent, respectful quote immediately.
                </p>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl transition shadow-lg"
                >
                  Request Custom Quote
                </a>
                <p className="text-xs text-gray-500 mt-4">No pressure. We are here to guide you.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. URGENT TIMELINE / PEACE OF MIND */}
      <section className="py-16 bg-[#1A1A2E] text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-rose-500/20 rounded-full">
              <Calendar className="w-10 h-10 text-rose-400" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">When Time is of the Essence</h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
            We understand that funerals often require quick turnaround times. <strong>We prioritize memorial orders.</strong> If you have the photo and text ready, we can often produce banners and T-shirts within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a 
              href="tel:0768564533" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition"
            >
              <Phone className="w-5 h-5" /> Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How to Order (It&apos;s Simple)</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">We make the process as smooth as possible during this difficult time.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Reach Out', icon: <MessageCircle className="w-6 h-6" />, desc: 'Send us a WhatsApp message or call with your requirements.' },
              { step: '2', title: 'Share Details', icon: <Upload className="w-6 h-6" />, desc: 'Send us the photo of your loved one and the wording you want.' },
              { step: '3', title: 'Quick Approval', icon: <Eye className="w-6 h-6" />, desc: 'We send a digital proof on WhatsApp for your immediate approval.' },
              { step: '4', title: 'Delivery', icon: <Truck className="w-6 h-6" />, desc: 'We print with care and deliver directly to you or the venue.' }
            ].map((step) => (
              <div key={step.step} className="text-center group">
                <div className="w-16 h-16 bg-white dark:bg-gray-800 border-2 border-rose-100 dark:border-rose-900 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIAL */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <Heart className="w-10 h-10 text-rose-500 mx-auto fill-rose-500 mb-4" />
          </div>
          <blockquote className="text-center text-2xl md:text-3xl font-light text-gray-700 dark:text-gray-300 italic leading-relaxed mb-6">
            “When we lost our mum, everything felt overwhelming. Maogast handled the portrait, the banners, and even the T-shirts for the family. They delivered everything to the church in Nairobi on time. The quality gave us peace of mind.”
          </blockquote>
          <p className="text-center text-gray-500 dark:text-gray-400 font-medium">— The Wanjiku Family, Nairobi</p>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Common Questions
          </h2>
          <div className="space-y-4">
            {[
              { q: 'How quickly can you print memorial T-shirts and banners?', a: 'We prioritize memorial orders. If you send the photo and details by 10 AM, we can usually have banners ready the same day and T-shirts within 24 hours.' },
              { q: 'Do you deliver to other counties?', a: 'Yes, we work with trusted courier services to deliver nationwide. We can also arrange delivery directly to the funeral home or venue.' },
              { q: 'Can you help us choose the best photo?', a: 'Absolutely. Send us whatever photos you have. Our designers are skilled at restoring and enhancing old or blurry photos to make them look perfect for printing.' }
            ].map((faq, i) => (
              <details key={i} className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 cursor-pointer open:shadow-md transition">
                <summary className="flex justify-between items-center list-none font-bold text-lg text-gray-900 dark:text-white">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-rose-600 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-24 bg-rose-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let us help you honor their memory.</h2>
          <p className="text-rose-100 max-w-xl mx-auto mb-10 text-lg">Reach out to us today. We will handle your request with the utmost respect, urgency, and care.</p>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 text-lg font-bold rounded-full shadow-xl text-rose-700 bg-white hover:bg-gray-50 transition transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" /> Chat with us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}