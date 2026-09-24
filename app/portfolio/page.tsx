import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, CheckCircle, Star, Globe, MapPin } from 'lucide-react';
import Script from 'next/script';
import type { Metadata } from 'next';

/* ============================================================ */
/*  Metadata                                                     */
/* ============================================================ */
export const metadata: Metadata = {
  title:
    'Portfolio – Software, E‑commerce & Branding Projects | Mgst (Maogast Softworks)',
  description:
    'See real projects delivered by Mgst worldwide – from Nairobi, Kenya to Romania and the USA. Lavan Solar Systems website, BrightSpark Electronics inventory system, NK Medical Missionaries e‑commerce, Powerhub poster design, and more.',
  alternates: {
    canonical: 'https://maogastsoftworks.com/portfolio',
  },
  openGraph: {
    title: 'Mgst Softworks Portfolio – Trusted Worldwide',
    description:
      'Explore our work – full‑stack applications, e‑commerce, and branding for clients across Kenya, Romania, and the USA.',
    url: 'https://maogastsoftworks.com/portfolio',
    siteName: 'Maogast Softworks (MGST~Works)',
    images: [
      {
        url: 'https://maogastsoftworks.com/og-portfolio.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mgst Softworks Portfolio – Trusted Worldwide',
    description:
      'Real‑world projects delivered from Nairobi to the world — Kenya, Romania, USA.',
    images: ['https://maogastsoftworks.com/og-portfolio.jpg'],
  },
};

/* ============================================================ */
/*  Projects                                                     */
/* ============================================================ */
const projects = [
  {
    title: 'Lavan Solar Systems — Website & Brand',
    description:
      'Full-stack website for a Nairobi-based solar energy company. We delivered branding, UI/UX, Next.js development, SEO, dynamic project portfolio, service pages (Solar PV, Thermal Energy, Borehole Solarization, Hybrid, Power Backup), and social sharing. Deployed on Vercel with a Truehost domain and Workplace Pro business email.',
    image: '/images/lavansolar-preview.webp',
    tech: [
      'Next.js 16',
      'TypeScript',
      'Tailwind CSS',
      'Vercel',
      'Truehost DNS',
      'Dynamic [slug] Routes',
    ],
    demoUrl: 'https://www.lavansolar.co.ke/',
    features: [
      'Dynamic project portfolio with [slug] sharing',
      '3 service divisions + 8 dedicated service pages',
      'iStock-style centered watermark protection',
      'Vercel deployment + Truehost business email',
    ],
    color: 'from-[#113F58] to-[#C59833]',
    date: 'August 2026',
    badge: 'New',
    location: 'Nairobi, Kenya',
  },
  {
    title: 'BrightSpark Electronics',
    description:
      'Smart inventory & sales management for electronic shops. Track stock, manage sales, expenses, monthly reports, and tithe calculation.',
    image: '/images/brightspark-preview.webp',
    tech: ['Next.js', 'Supabase', 'Tailwind CSS'],
    demoUrl: 'https://brightspark-electronics.vercel.app/',
    features: [
      'Real‑time stock updates',
      'Sales & expense tracking',
      'Monthly profit/loss reports',
      'Built‑in tithe calculator',
    ],
    color: 'from-blue-600 to-indigo-700',
    date: '2026',
    badge: '',
    location: 'Nairobi, Kenya',
  },
  {
    title: 'NK Medical Missionaries',
    description:
      'Premium organic herbs, spices, and natural products e‑commerce platform. 100% organic, lab‑tested, Kenya‑wide delivery.',
    image: '/images/nkmm-preview.webp',
    tech: ['Next.js', 'Supabase', 'Tailwind CSS', 'Paybill Integration'],
    demoUrl: 'https://nkmm.co.ke/',
    features: [
      'Product catalog with filters',
      'M‑Pesa Paybill checkout',
      'Order tracking & SMS alerts',
      'Admin dashboard for inventory',
    ],
    color: 'from-emerald-600 to-teal-700',
    date: '2026',
    badge: '',
    location: 'Kenya',
  },
  {
    title: 'Powerhub Electronics Poster & Branding',
    description:
      'Professional retail poster design and branding materials for an electronics shop in Nairobi. Included product showcase, contact details, and urban aesthetic.',
    image: '/powered_design/powerhub-poster-example.jpg',
    tech: ['Poster Design', 'AI Prompt Engineering', 'Print Production'],
    demoUrl: '#',
    features: [
      'Retail poster design',
      'Product showcase layout',
      'Branding consistency',
      'Print-ready files',
    ],
    color: 'from-orange-600 to-red-700',
    date: '2026',
    badge: '',
    location: 'Nairobi, Kenya',
  },
];

/* ============================================================ */
/*  Page                                                         */
/* ============================================================ */
export default function PortfolioPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://maogastsoftworks.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Portfolio',
        item: 'https://maogastsoftworks.com/portfolio',
      },
    ],
  };

  const portfolioJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Mgst Softworks Portfolio',
    description:
      'Real-world software, e-commerce, and branding projects delivered by Maogast Softworks from Nairobi to clients worldwide.',
    url: 'https://maogastsoftworks.com/portfolio',
    hasPart: projects.map((p) => ({
      '@type': 'CreativeWork',
      name: p.title,
      description: p.description,
      url: p.demoUrl !== '#' ? p.demoUrl : undefined,
    })),
  };

  return (
    <>
      <Script
        id="portfolio-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="portfolio-collection"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        {/* ==================================================== */}
        {/* HERO                                                  */}
        {/* ==================================================== */}
        <section className="bg-gradient-to-br from-[#0A192F] to-[#0F2A3F] text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="portfolioGrid"
                  width="30"
                  height="30"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 30 0 L 0 0 0 30"
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#portfolioGrid)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-400/30 rounded-full px-4 py-1 mb-6 animate-fade-in-up">
              <Globe className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-xs font-medium text-orange-300 tracking-wide">
                Trusted worldwide · Kenya · Romania · USA
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              Our Work
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              A collection of projects we&apos;ve built from{' '}
              <strong className="text-orange-400">Nairobi</strong> for clients{' '}
              <strong className="text-orange-400">around the world</strong> —
              real solutions that deliver real results.
            </p>
          </div>
        </section>

        {/* ==================================================== */}
        {/* Reach strip — dual chips                              */}
        {/* ==================================================== */}
        <div className="container mx-auto px-4 pt-8 pb-4 max-w-4xl">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 rounded-full px-4 py-1">
              <MapPin className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">
                Proudly Delivered in Nairobi
              </span>
            </div>

            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 rounded-full px-4 py-1">
              <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Now Serving Global Clients
              </span>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-center">
            Every project you see here was conceptualized, developed, and
            supported right here in Kenya — from inventory systems for local
            retailers to websites serving clients across{' '}
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              Kenya, Romania, and the USA
            </span>
            .
          </p>
        </div>

        {/* ==================================================== */}
        {/* Projects Grid                                         */}
        {/* ==================================================== */}
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group ${
                  project.badge === 'New'
                    ? 'ring-2 ring-orange-400 ring-offset-2 dark:ring-offset-gray-950'
                    : ''
                }`}
              >
                <div
                  className={`relative h-64 w-full bg-gradient-to-r ${project.color} flex items-center justify-center`}
                >
                  {project.badge && (
                    <div className="absolute top-4 right-4 z-20 bg-orange-600 text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full shadow-lg">
                      {project.badge}
                    </div>
                  )}

                  {/* Location chip */}
                  {project.location && (
                    <div className="absolute top-4 left-4 z-20 bg-black/40 backdrop-blur-sm text-white text-[10px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </div>
                  )}

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover mix-blend-overlay opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  <div className="relative z-10 text-white text-center p-4">
                    <h2 className="text-2xl font-bold drop-shadow-lg">
                      {project.title}
                    </h2>
                    {project.date && (
                      <p className="text-xs text-white/70 mt-2 uppercase tracking-wider">
                        {project.date}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-orange-600 dark:text-orange-400 mb-3">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                        >
                          <CheckCircle className="w-4 h-4 text-orange-600 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-orange-600 dark:text-orange-400 mb-2">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    {project.demoUrl !== '#' ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition transform hover:scale-105"
                      >
                        Visit Live Site <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-400 text-white rounded-lg cursor-not-allowed">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming soon badge */}
          <div className="text-center mt-16">
            <div className="inline-block bg-orange-100 dark:bg-orange-900/30 rounded-full px-4 py-2">
              <span className="text-orange-700 dark:text-orange-300 text-sm font-medium">
                ✨ More projects coming soon — from Nairobi to the world 🌍
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 transition transform hover:scale-105"
            >
              ← Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition transform hover:scale-105"
            >
              Start Your Project →
            </Link>
          </div>
        </div>

        {/* ==================================================== */}
        {/* Testimonial                                           */}
        {/* ==================================================== */}
        <section className="bg-white dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <Star className="w-8 h-8 text-orange-500 mx-auto fill-orange-500 mb-2" />
            <p className="text-gray-600 dark:text-gray-400 italic">
              &ldquo;Working with Maogast transformed our online presence. The
              NK Medical Missionaries platform is fast, secure, and our
              customers love the easy checkout.&rdquo;
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
              — NK Medical Missionaries Team
            </p>
          </div>
        </section>
      </div>
    </>
  );
}