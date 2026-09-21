import Link from 'next/link';
import Image from 'next/image';

const projects = [
  // ✅ MOST RECENT — August 2026
  {
    title: 'Lavan Solar Systems',
    description:
      'Full-stack website for a Nairobi-based solar energy company. Branding, UI/UX, Next.js development, SEO, dynamic project portfolio with [slug] sharing, service pages, and Vercel deployment with Truehost business email.',
    image: '/images/lavansolar-preview.webp',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Truehost DNS'],
    demoUrl: 'https://www.lavansolar.co.ke/',
    codeUrl: '#',
    isNew: true, // shows "New" badge
    gradient: 'from-[#113F58] to-[#C59833]', // Lavan brand colors
  },
  {
    title: 'BrightSpark Electronics',
    description:
      'Smart inventory & sales management for electronic shops. Track stock, manage sales, expenses, monthly reports, and tithe calculation.',
    image: '/images/brightspark-preview.webp',
    tech: ['Next.js', 'Supabase', 'Tailwind CSS'],
    demoUrl: 'https://brightspark-electronics.vercel.app/',
    codeUrl: '#',
    isNew: false,
    gradient: 'from-blue-700 to-indigo-800',
  },
  {
    title: 'NK Medical Missionaries',
    description:
      'Premium organic herbs, spices, and natural products e‑commerce platform. 100% organic, lab‑tested, Kenya‑wide delivery.',
    image: '/images/nkmm-preview.webp',
    tech: ['Django', 'Python', 'Tailwind CSS', 'Paybill Integration'],
    demoUrl: 'https://nkmm.co.ke/',
    codeUrl: '#',
    isNew: false,
    gradient: 'from-emerald-700 to-teal-800',
  },
  {
    title: 'Powerhub Electronics Poster & Branding',
    description:
      'Professional retail poster design and branding materials for an electronics shop in Nairobi. Included product showcase, contact details, and urban aesthetic.',
    image: '/powered_design/powerhub-poster-example.jpg',
    tech: ['Poster Design', 'AI Prompt Engineering', 'Print Production'],
    demoUrl: '#',
    codeUrl: '#',
    isNew: false,
    gradient: 'from-orange-700 to-red-800',
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Recent Work
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            A glimpse of what we&apos;ve built for our clients.
          </p>
        </div>

        {/* ✅ 4 projects now fit cleanly across 4 columns on large screens */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group ${
                project.isNew
                  ? 'ring-2 ring-orange-400 ring-offset-2 dark:ring-offset-gray-950'
                  : ''
              }`}
            >
              {/* Image / Gradient Header */}
              <div
                className={`relative h-48 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                {project.isNew && (
                  <div className="absolute top-3 right-3 z-20 bg-orange-600 text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full shadow-lg">
                    New
                  </div>
                )}

                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="text-center p-4">
                    <div className="text-4xl mb-2">⚡</div>
                    <p className="text-white/80 text-sm">
                      Screenshot coming soon
                    </p>
                  </div>
                )}

                {/* Subtle darkening overlay for readability */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>

              {/* Card Body */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Tech chips */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-4 flex gap-2">
                  {project.demoUrl && project.demoUrl !== '#' ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition flex-1"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-gray-400 cursor-not-allowed flex-1">
                      Coming Soon
                    </span>
                  )}

                  {project.codeUrl && project.codeUrl !== '#' && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-3 py-1.5 border border-gray-300 dark:border-gray-600 text-xs font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 transition transform hover:scale-105"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}