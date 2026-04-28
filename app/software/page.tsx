import Link from 'next/link';
import { Code, Database, MonitorSmartphone, Cloud, Shield, Rocket } from 'lucide-react';

export default function SoftwarePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A192F] to-[#0F2A3F] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Software Development</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Custom web & mobile apps, enterprise systems, and IT consulting – tailored to your business.
          </p>
          <div className="mt-8">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition transform hover:scale-105"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What We Build</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              End‑to‑end software solutions for modern businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8 text-orange-600" />,
                title: 'Web Applications',
                desc: 'Responsive, fast, and scalable web apps using Next.js, React, and modern frameworks.',
              },
              {
                icon: <MonitorSmartphone className="w-8 h-8 text-orange-600" />,
                title: 'Mobile Apps',
                desc: 'Cross‑platform mobile apps (iOS & Android) built with React Native.',
              },
              {
                icon: <Database className="w-8 h-8 text-orange-600" />,
                title: 'Enterprise Systems',
                desc: 'Custom dashboards, inventory systems, and internal tools to streamline operations.',
              },
              {
                icon: <Cloud className="w-8 h-8 text-orange-600" />,
                title: 'Cloud Integration',
                desc: 'Seamless integration with Supabase, AWS, Firebase, and third‑party APIs.',
              },
              {
                icon: <Shield className="w-8 h-8 text-orange-600" />,
                title: 'Security & Compliance',
                desc: 'Secure authentication, role‑based access, and data protection best practices.',
              },
              {
                icon: <Rocket className="w-8 h-8 text-orange-600" />,
                title: 'IT Consulting',
                desc: 'Technology audits, stack recommendations, and project planning guidance.',
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Technologies We Master</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Modern, battle‑tested tools to deliver high‑quality software.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {['Next.js', 'React', 'TypeScript', 'Node.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Docker'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Process</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              From idea to launch – we keep you in the loop.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Discovery', desc: 'Understand your goals, users, and requirements.' },
              { step: '2', title: 'Design & Prototype', desc: 'Wireframes and interactive prototypes for feedback.' },
              { step: '3', title: 'Development', desc: 'Agile sprints, regular updates, and quality assurance.' },
              { step: '4', title: 'Launch & Support', desc: 'Deployment, training, and ongoing maintenance.' },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to build your next software project?</h2>
          <p className="mt-4 text-orange-100 max-w-xl mx-auto">
            Let’s talk about your idea. We’ll help you choose the right technology and deliver on time.
          </p>
          <div className="mt-8">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-orange-600 bg-white hover:bg-gray-100 transition"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}