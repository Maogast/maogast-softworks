import TeamSection from '@/components/TeamSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Maogast Softworks – Team, Mission & Values',
  description: 'We are a registered Kenyan company specialising in software, printing, and AI design. Meet our team and learn what drives us.',
  openGraph: {
    title: 'About Maogast Softworks',
    description: 'A team of developers, designers, and creatives dedicated to exceptional solutions.',
    url: 'https://maogast-softworks.vercel.app/about',
    siteName: 'Maogast Softworks',
    images: [{ url: 'https://maogast-softworks.vercel.app/og-about.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Maogast Softworks',
    description: 'Meet the people behind the code, prints, and designs.',
    images: ['https://maogast-softworks.vercel.app/og-about.jpg'],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero section – unchanged */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl font-bold">About Maogast Softworks</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            We are a team of developers, designers, and creatives dedicated to delivering exceptional software, printing, and AI-powered design.
          </p>
        </div>
      </section>

      {/* New: Our Story section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Story</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full" />
          </div>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            <p>
              Founded in Nairobi, <strong>Maogast Softworks</strong> started with a simple belief: businesses shouldn’t have to juggle multiple vendors for their digital and physical branding needs. 
              We bring together <strong>custom software development, premium printing, and AI‑powered design</strong> under one roof – saving you time, money, and headaches.
            </p>
            <p>
              What makes us different? We don’t just build; we partner. From the first wireframe to the final printed t‑shirt, our team stays obsessed with quality, speed, and your unique vision. 
              Over the years, we’ve helped dozens of startups, churches, and enterprises scale their ideas into reality.
            </p>
            <p className="italic border-l-4 border-orange-500 pl-5 py-2 mt-6 bg-orange-50 dark:bg-orange-950/30 rounded-r-lg">
              “Your success is our blueprint. Whether it’s code, ink, or imagination – we make it happen.”
            </p>
          </div>
        </div>
      </section>

      {/* New: Our Values section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What Drives Us</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Five core principles that guide every project we touch.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Quality First', desc: 'We never compromise on code, ink, or creativity. Every pixel and print is double‑checked.' },
              { title: 'Customer Obsession', desc: 'Your goals become our goals. We listen, then deliver solutions that truly fit.' },
              { title: 'Speed & Agility', desc: 'Tight deadlines? No problem. We work fast without cutting corners.' },
              { title: 'Transparency', desc: 'Clear pricing, honest timelines, and open communication – always.' },
              { title: 'Innovation', desc: 'AI, modern frameworks, eco‑friendly inks – we constantly upgrade our tools.' },
              { title: 'Local Roots, Global Reach', desc: 'Proudly Kenyan, but our work speaks worldwide.' },
            ].map((value) => (
              <div key={value.title} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New: Why Choose Us – stats bar */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold">50+</div>
              <div className="mt-2 text-orange-100">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold">100%</div>
              <div className="mt-2 text-orange-100">Client Commitment</div>
            </div>
            <div>
              <div className="text-4xl font-bold">24/7</div>
              <div className="mt-2 text-orange-100">Support & Consultation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Original TeamSection – unchanged */}
      <TeamSection />

      {/* Optional CTA */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Ready to work together?</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Let’s turn your ideas into reality.</p>
          <div className="mt-6">
            <a
              href="/quote"
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
            >
              Request a Quote →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}