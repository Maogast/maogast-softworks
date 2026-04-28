import Link from 'next/link';
import Image from 'next/image';
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
  },
  {
    title: 'NK Medical Missionaries',
    description: 'Premium organic herbs, spices, and natural products e‑commerce platform. 100% organic, lab‑tested, Kenya‑wide delivery.',
    image: '/images/nkmm-preview.webp',
    tech: ['Next.js', 'Supabase', 'Tailwind CSS', 'Paybill Integration'],
    demoUrl: 'https://nkmm.co.ke/',
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Our Work</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            A collection of projects we&apos;ve built for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition group"
            >
              <div className="relative h-48 w-full bg-gradient-to-br from-navy-700 to-orange-800/50 flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}