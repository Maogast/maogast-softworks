'use client';

import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { 
  Sparkles, Brain, Church, Image as ImageIcon, FileText, 
  Palette, Zap, Star, Send, Eye, Edit3, Layout 
} from 'lucide-react';

export default function AIDesignClient() {
  const portfolioItems = [
    { title: 'Church Poster Series', img: '/powered_design/church-poster.webp', category: 'Church Branding' },
    { title: 'Product Ad Mockup', img: '/powered_design/product-ad.webp', category: 'Social Media' },
    { title: 'Event Flyer', img: '/powered_design/event-flyer.webp', category: 'Poster Design' },
    { title: 'Prompt Art', img: '/powered_design/prompt-art.webp', category: 'AI Art' },
    { title: 'Prompt Art 2', img: '/powered_design/prompt-art1.webp', category: 'AI Art' },
  ];

  // Service Schema for AI and Design Services
  const aiDesignJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI-Powered Design & Prompt Engineering",
    "serviceType": "Graphic Design and AI Consulting",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Maogast Softworks",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nairobi",
        "addressCountry": "KE"
      }
    },
    "description": "Professional design services utilizing AI prompt engineering for church branding, social media, and marketing materials."
  };

  return (
    <>
      <Script
        id="ai-design-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiDesignJsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A192F] to-[#0F2A3F] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="aiGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#F97316" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#aiGrid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-400/30 rounded-full px-4 py-1 mb-6 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-orange-300">AI‑Powered Creativity in Nairobi</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">AI‑Powered Design</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Stunning posters, church branding, and product visuals – crafted with the precision of professional prompt engineering.
          </p>
          <div className="mt-8 animate-fade-in-up animation-delay-400">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition transform hover:scale-105 hover:shadow-lg"
            >
              Request a Design
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Design Expertise</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              From initial prompt to final pixel, we create visuals that resonate with your audience and reflect your brand identity.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Church className="w-8 h-8 text-orange-600" />,
                title: 'Church Branding',
                desc: 'Sermon series posters, event flyers, and complete visual identities for ministries in Kenya.',
              },
              {
                icon: <ImageIcon className="w-8 h-8 text-orange-600" />,
                title: 'Social Media Graphics',
                desc: 'Engaging carousels, story templates, and ad creatives optimized for conversion.',
              },
              {
                icon: <Palette className="w-8 h-8 text-orange-600" />,
                title: 'Poster & Flyer Design',
                desc: 'High‑resolution, print‑ready designs for community announcements and commercial events.',
              },
              {
                icon: <Brain className="w-8 h-8 text-orange-600" />,
                title: 'Prompt Engineering',
                desc: 'Expertly written prompts for Midjourney and DALL·E to generate high‑quality, consistent brand assets.',
              },
              {
                icon: <FileText className="w-8 h-8 text-orange-600" />,
                title: 'Print Layout & Editorial',
                desc: 'Professional brochures, newsletters, and book covers tailored for both print and digital use.',
              },
              {
                icon: <Zap className="w-8 h-8 text-orange-600" />,
                title: 'Rapid Prototyping',
                desc: 'Urgent design projects delivered within 24–48 hours without compromising on craftsmanship.',
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How We Create</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              A collaborative workflow combining human creativity with AI efficiency.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Share Your Vision', icon: <Send className="w-6 h-6" />, desc: 'Brief us on your brand goals and target audience.' },
              { step: '2', title: 'Craft Prompts', icon: <Edit3 className="w-6 h-6" />, desc: 'We engineer precise prompts to generate concepts.' },
              { step: '3', title: 'Refine & Approve', icon: <Eye className="w-6 h-6" />, desc: 'We fine-tune the art to match your exact standards.' },
              { step: '4', title: 'Deliver Files', icon: <Layout className="w-6 h-6" />, desc: 'Receive high-res, print-ready files ready for use.' },
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

      {/* Portfolio Gallery */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Recent Work</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              A showcase of AI-enhanced visuals and custom graphic designs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:rotate-1"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-orange-600 uppercase font-semibold">{item.category}</p>
                  <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-1">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 transition transform hover:scale-105"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Prompt Engineering Highlight */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-600/10 rounded-full px-3 py-1 mb-4">
                <Brain className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-medium text-orange-700 dark:text-orange-400">Strategic Expertise</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Expert Prompt Engineering</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Behind every great AI design is a well‑crafted prompt. We specialize in engineering inputs that produce consistent, brand‑aligned visuals – specifically optimized for marketing and community engagement.
              </p>
              <ul className="mt-6 space-y-2">
                {[
                  'Midjourney, DALL·E, and Gemini expertise',
                  'Custom prompt libraries for consistent branding',
                  'Workshops and training for organizational teams'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 group">
                    <Star className="w-5 h-5 text-orange-600 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition transform hover:scale-105"
                >
                  Hire a Prompt Engineer
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition text-center border border-gray-100 dark:border-gray-700">
              <div className="text-5xl mb-4">✨🤖</div>
              <p className="text-gray-600 dark:text-gray-400 italic text-lg">
                &ldquo;We translate your abstract ideas into precise technical prompts to generate the exact aesthetic your brand requires.&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-gray-500">— Maogast Design Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Elevate your brand with AI‑powered visuals</h2>
          <p className="mt-4 text-orange-100 max-w-xl mx-auto">
            From church posters to product ad mockups – let’s build a visual identity that stands out in the Nairobi market.
          </p>
          <div className="mt-8">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-orange-600 bg-white hover:bg-gray-100 transition transform hover:scale-105"
            >
              Start a Design Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}