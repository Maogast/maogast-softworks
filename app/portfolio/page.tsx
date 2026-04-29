import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, CheckCircle, Star } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio – Software, E‑commerce & Branding Projects | Maogast Softworks',
  description: 'See real projects we’ve delivered: BrightSpark Electronics inventory system, NK Medical Missionaries e‑commerce, and more.',
  openGraph: {
    title: 'Maogast Softworks Portfolio',
    description: 'Explore our work – from full‑stack applications to custom branding.',
    url: 'https://maogast-softworks.vercel.app/portfolio',
    siteName: 'Maogast Softworks',
    images: [{ url: 'https://maogast-softworks.vercel.app/og-portfolio.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maogast Softworks Portfolio',
    description: 'Real‑world projects that showcase our expertise.',
    images: ['https://maogast-softworks.vercel.app/og-portfolio.jpg'],
  },
};

const projects = [
  {
    title: 'BrightSpark Electronics',
    description: 'Smart inventory & sales management for electronic shops. Track stock, manage sales, expenses, monthly reports, and tithe calculation.',
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
  },
  {
    title: 'NK Medical Missionaries',
    description: 'Premium organic herbs, spices, and natural products e‑commerce platform. 100% organic, lab‑tested, Kenya‑wide delivery.',
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
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Section with fade animations */}
      <section className="bg-gradient-to-br from-[#0A192F] to-[#0F2A3F] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="portfolioGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#F97316" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#portfolioGrid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">Our Work</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            A collection of projects we’ve built for our clients – real solutions that deliver real results.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Project Image with gradient overlay */}
              <div className={`relative h-64 w-full bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover mix-blend-overlay opacity-90 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                <div className="relative z-10 text-white text-center p-4">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Feature list */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-orange-600 dark:text-orange-400 mb-3">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <CheckCircle className="w-4 h-4 text-orange-600 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
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

                {/* Live Demo Button */}
                <div className="mt-8">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition transform hover:scale-105"
                  >
                    Live Demo 
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More coming soon note */}
        <div className="text-center mt-16">
          <div className="inline-block bg-orange-100 dark:bg-orange-900/30 rounded-full px-4 py-2">
            <span className="text-orange-700 dark:text-orange-300 text-sm font-medium">
              ✨ More projects coming soon – we’re currently working on exciting new solutions.
            </span>
          </div>
        </div>

        {/* Back to Home button */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 transition transform hover:scale-105"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Testimonial section */}
      <section className="bg-white dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <Star className="w-8 h-8 text-orange-500 mx-auto fill-orange-500 mb-2" />
          <p className="text-gray-600 dark:text-gray-400 italic">
            “Working with Maogast transformed our online presence. The NK Medical Missionaries platform is fast, secure, and our customers love the easy checkout.”
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">— NK Medical Missionaries Team</p>
        </div>
      </section>
    </div>
  );
}