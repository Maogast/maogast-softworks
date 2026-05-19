import Link from 'next/link';
import { Code, Printer, Sparkles, Globe, GraduationCap } from 'lucide-react';

const services = [
  {
    title: 'Software Development',
    description: 'Custom web apps, mobile apps, and enterprise systems tailored to your business.',
    icon: Code,
    link: '/software',
  },
  {
    title: 'Printing & Branding',
    description: 'T‑shirts, mugs, banners, stickers, labels, and more – high quality, fast turnaround.',
    icon: Printer,
    link: '/printing',
  },
  {
    title: 'AI‑Powered Design',
    description: 'Poster design, church branding, social media graphics, and prompt engineering.',
    icon: Sparkles,
    link: '/ai-design',
  },
  {
    title: 'Content Management',
    description: 'Website updates, social media content, blog posts, and strategic digital calendars.',
    icon: Globe,
    link: '/content-management',
  },
  {
    title: 'Training & Webinars',
    description: 'Upskill your team with expert training sessions, webinars, and hands-on tech workshops.',
    icon: GraduationCap,
    link: '/training',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"                      // 👈 makes the Explore button scroll to this section
      className="py-20 bg-gray-50 dark:bg-gray-900 scroll-mt-16"   // scroll-mt-16 avoids hiding under fixed header
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What We Do</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            End‑to‑end solutions for your business and company needs.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 mb-4 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}