import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'BrightSpark Electronics',
    description: 'Smart inventory & sales management for electronic shops. Track stock, manage sales, expenses, monthly reports, and tithe calculation.',
    image: '/images/brightspark-preview.webp',
    tech: ['Next.js', 'Supabase', 'Tailwind CSS'],
    demoUrl: 'https://brightspark-electronics.vercel.app/',
    codeUrl: '#',
  },
  {
    title: 'NK Medical Missionaries',
    description: 'Premium organic herbs, spices, and natural products e‑commerce platform. 100% organic, lab‑tested, Kenya‑wide delivery.',
    image: '/images/nkmm-preview.webp',
    tech: ['Django', 'Python', 'Tailwind CSS', 'Paybill Integration'],
    demoUrl: 'https://nkmm.co.ke/',
    codeUrl: '#',
  },
  // NEW PROJECT: Printing & Branding
  {
    title: 'Powerhub Electronics Poster & Branding',
    description: 'Professional retail poster design and branding materials for an electronics shop in Nairobi. Included product showcase, contact details, and urban aesthetic.',
    image: '/powered_design/powerhub-poster-example.jpg',
    tech: ['Poster Design', 'AI Prompt Engineering', 'Print Production'],
    demoUrl: '#',
    codeUrl: '#',
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Recent Work</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            A glimpse of what we&apos;ve built for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition group"
            >
              <div className="relative h-48 w-full bg-gradient-to-br from-navy-700 to-orange-800/50 flex items-center justify-center">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="text-center p-4">
                    <div className="text-4xl mb-2">⚡</div>
                    <p className="text-white/80 text-sm">Screenshot coming soon</p>
                  </div>
                )}
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
                      className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition"
                  >
                    Live Demo
                  </a>
                  {project.codeUrl && project.codeUrl !== '#' && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 transition"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}