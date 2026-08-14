import TeamSection from '@/components/TeamSection';
import Script from 'next/script';
import type { Metadata } from 'next';
import { 
  Award, Heart, Zap, Eye, Sparkles, Globe, 
  Code, Printer, Cuboid, Palette, FileText, Gift 
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Mgst (Maogast Softworks) – Software, 3D Signage, Printing & AI Design in Nairobi',
  description: 'Meet Mgst (Maogast Softworks), a registered Kenyan company in Nairobi specializing in custom software, premium printing, 3D signage (MGST~Works), AI-powered design, content management, and training.',
  alternates: {
    canonical: 'https://maogastsoftworks.com/about',
  },
  openGraph: {
    title: 'About Mgst (Maogast Softworks) | Nairobi, Kenya',
    description: 'A Kenyan team of developers, designers, and creatives dedicated to exceptional software, 3D signage, printing, and AI solutions for local businesses.',
    url: 'https://maogastsoftworks.com/about',
    siteName: 'Maogast Softworks (MGST~Works)',
    images: [{ url: 'https://maogastsoftworks.com/og-about.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Mgst | Maogast Softworks Nairobi',
    description: 'Meet the local team behind the code, 3D signage, prints, and AI-powered designs in Kenya.',
    images: ['https://maogastsoftworks.com/og-about.jpg'],
  },
};

export default function AboutPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://maogastsoftworks.com" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://maogastsoftworks.com/about" }
    ]
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Maogast Softworks",
    "url": "https://maogastsoftworks.com",
    "logo": "https://maogastsoftworks.com/logo.png",
    "sameAs": [
      "https://wa.me/254768564533",
      "https://twitter.com/maogast",
      "https://linkedin.com/company/maogast-softworks",
      "https://instagram.com/maogastsoftworks"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254768564533",
      "contactType": "customer service",
      "areaServed": "KE",
      "availableLanguage": "English"
    }
  };

  return (
    <>
      <Script id="about-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />

      {/* Hero section */}
      <section className="py-16 bg-white dark:bg-gray-950 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 rounded-full px-4 py-1 mb-4">
                <span className="text-sm font-medium text-orange-700 dark:text-orange-300">📍 Based in Nairobi, Kenya</span>
              </div>
              <h1 className="text-4xl font-bold">About Maogast Softworks</h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-xl">
                We are a team of developers, designers, and creatives dedicated to delivering exceptional software, printing, 3D signage, and AI-powered design under one roof.
              </p>
            </div>
            {/* Hero Illustration – SVG */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 animate-float-3d">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="90" stroke="#F97316" strokeWidth="2" strokeDasharray="8 8" fill="none" className="opacity-30" />
                  <circle cx="100" cy="100" r="70" fill="#F97316" fillOpacity="0.1" />
                  {/* Code symbol */}
                  <path d="M70 85 L85 100 L70 115" stroke="#F97316" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d="M130 85 L115 100 L130 115" stroke="#F97316" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <circle cx="100" cy="100" r="15" stroke="#F97316" strokeWidth="3" fill="none" />
                  <circle cx="100" cy="100" r="8" fill="#F97316" fillOpacity="0.5" />
                  {/* AI star */}
                  <path d="M160 60 L165 70 L175 72 L167 80 L170 90 L160 85 L150 90 L153 80 L145 72 L155 70 Z" fill="#F97316" fillOpacity="0.8" />
                  {/* Cross */}
                  <path d="M40 60 L50 60 L50 50" stroke="#F97316" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d="M50 50 L50 60 L60 60" stroke="#F97316" strokeWidth="3" fill="none" strokeLinecap="round" />
                  {/* Camera */}
                  <rect x="30" y="130" width="24" height="18" rx="3" stroke="#F97316" strokeWidth="2" fill="none" />
                  <circle cx="42" cy="139" r="5" stroke="#F97316" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="storyPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="#F97316" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#storyPattern)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Story</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full" />
          </div>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            <p>
              Founded in <strong>Nairobi, Kenya</strong>, <strong>Maogast Softworks</strong> started with a simple belief: businesses shouldn’t have to juggle multiple vendors for their digital and physical branding needs. 
              We bring together <strong>custom software development, premium printing, 3D signage (MGST~Works), and AI‑powered design</strong> under one roof – saving you time, money, and headaches.
            </p>
            <p>
              What makes us different? We don’t just build; we partner. From the first wireframe to the final printed t‑shirt, our team stays obsessed with quality, speed, and your unique vision. 
              Over the years, we’ve helped dozens of startups, churches, and enterprises scale their ideas into reality – right here in Nairobi and across Kenya.
            </p>
            <p className="italic border-l-4 border-orange-500 pl-5 py-2 mt-6 bg-orange-50 dark:bg-orange-950/30 rounded-r-lg">
              “Your success is our blueprint. Whether it’s code, ink, or imagination – we make it happen.”
            </p>
          </div>
        </div>
      </section>

      {/* ✨ NEW: Services at a Glance Section (Added to include 3D Signage, etc.) */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Services at a Glance</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From complex software architecture to physical 3D branding—we handle it all for Kenyan businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Software Development', desc: 'Custom web & mobile apps, ERPs, and CMS systems.', icon: Code },
              { title: 'Printing & Branding', desc: 'T‑shirts, mugs, banners, and professional stationery.', icon: Printer },
              { title: '3D Signage (MGST~Works)', desc: 'Premium 3D acrylic, metal, and LED backlit signage.', icon: Cuboid },
              { title: 'AI-Powered Design', desc: 'Church branding, social media graphics, and poster design.', icon: Palette },
              { title: 'Content Management', desc: 'Website updates, social media, and digital strategy.', icon: FileText },
              { title: 'Training & Corporate Gifts', desc: 'Tech bootcamps, workshops, and custom branded products.', icon: Gift },
            ].map((service, idx) => (
              <div 
                key={idx} 
                className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition transform hover:-translate-y-1 duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors">
                  <service.icon className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What Drives Us</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Six core principles that guide every project we touch.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Award className="w-6 h-6 text-orange-600" />, title: 'Quality First', desc: 'We never compromise on code, ink, or creativity. Every pixel and print is double‑checked.' },
              { icon: <Heart className="w-6 h-6 text-orange-600" />, title: 'Customer Obsession', desc: 'Your goals become our goals. We listen, then deliver solutions that truly fit.' },
              { icon: <Zap className="w-6 h-6 text-orange-600" />, title: 'Speed & Agility', desc: 'Tight deadlines? No problem. We work fast without cutting corners.' },
              { icon: <Eye className="w-6 h-6 text-orange-600" />, title: 'Transparency', desc: 'Clear pricing, honest timelines, and open communication – always.' },
              { icon: <Sparkles className="w-6 h-6 text-orange-600" />, title: 'Innovation', desc: 'AI, modern frameworks, eco‑friendly inks – we constantly upgrade our tools.' },
              { icon: <Globe className="w-6 h-6 text-orange-600" />, title: 'Local Roots, Global Reach', desc: 'Proudly Kenyan, but our work speaks worldwide.' },
            ].map((value, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition transform hover:-translate-y-1 duration-300">
                <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div><div className="text-4xl font-bold">50+</div><div className="mt-2 text-orange-100">Projects Delivered</div></div>
            <div><div className="text-4xl font-bold">100%</div><div className="mt-2 text-orange-100">Client Commitment</div></div>
            <div><div className="text-4xl font-bold">24/7</div><div className="mt-2 text-orange-100">Support & Consultation</div></div>
          </div>
        </div>
      </section>

      <TeamSection />

      <section className="py-16 bg-gray-50 dark:bg-gray-900 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Ready to work together?</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Let’s turn your ideas into reality.</p>
          <div className="mt-6">
            <Link href="/quote" className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">Request a Quote →</Link>
          </div>
        </div>
      </section>
    </>
  );
}