'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Brain, Church, Image as ImageIcon, FileText, Palette, Zap, Star } from 'lucide-react';

export default function AIDesignPage() {
  const portfolioItems = [
    { title: 'Church Poster Series', img: '/powered_design/church-poster.webp', category: 'Church Branding' },
    { title: 'Product Ad Mockup', img: '/powered_design/product-ad.webp', category: 'Social Media' },
    { title: 'Event Flyer', img: '/powered_design/event-flyer.webp', category: 'Poster Design' },
    { title: 'Prompt Art', img: '/powered_design/prompt-art.webp', category: 'AI Art' },
    { title: 'Prompt Art 2', img: '/powered_design/prompt-art1.webp', category: 'AI Art' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A192F] to-[#0F2A3F] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-400/30 rounded-full px-4 py-1 mb-6">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-orange-300">AI‑Powered Creativity</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI‑Powered Design</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stunning posters, church branding, social media graphics – and the prompt engineering that makes it all possible.
          </p>
          <div className="mt-8">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition transform hover:scale-105"
            >
              Request a Design
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Design Services</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              From prompt to pixel – I create visuals that communicate, inspire, and convert.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Church className="w-8 h-8 text-orange-600" />,
                title: 'Church Branding',
                desc: 'Sermon series posters, event flyers, prayer meeting graphics, and complete church visual identity.',
              },
              {
                icon: <ImageIcon className="w-8 h-8 text-orange-600" />,
                title: 'Social Media Graphics',
                desc: 'Carousels, story templates, quote posts, and ad creatives for all platforms.',
              },
              {
                icon: <Palette className="w-8 h-8 text-orange-600" />,
                title: 'Poster & Flyer Design',
                desc: 'High‑resolution print‑ready posters for events, concerts, campaigns, and announcements.',
              },
              {
                icon: <Brain className="w-8 h-8 text-orange-600" />,
                title: 'Prompt Engineering',
                desc: 'Expert prompts to generate consistent, high‑quality AI art – also available as a standalone service.',
              },
              {
                icon: <FileText className="w-8 h-8 text-orange-600" />,
                title: 'Print Layout & Editorial',
                desc: 'Brochures, newsletters, magazines, and book covers – print and digital ready.',
              },
              {
                icon: <Zap className="w-8 h-8 text-orange-600" />,
                title: 'Rapid Prototyping',
                desc: 'Turnaround in 24–48 hours for urgent projects. Fast, professional, and high‑impact.',
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

      {/* Portfolio Gallery with 3D Motion */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Recent Designs</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Hover over any image to see the 3D tilt effect – a glimpse of the motion you can expect.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, idx) => (
              <div
                key={idx}
                className="gallery-item relative bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md cursor-pointer"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="gallery-image object-cover transition duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const fallback = document.createElement('div');
                        fallback.className = 'w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/20';
                        fallback.innerHTML = `<span class="text-4xl">🎨</span>`;
                        parent.appendChild(fallback);
                      }
                    }}
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
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 transition"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Prompt Engineering Highlight */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-600/10 rounded-full px-3 py-1 mb-4">
                <Brain className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-medium text-orange-700 dark:text-orange-400">Expertise</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Prompt Engineering</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Behind every great AI design is a well‑crafted prompt. I specialise in writing prompts that produce consistent, brand‑aligned, and stunning visuals – saving you time and frustration.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-orange-600 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">Midjourney, DALL·E, Gemini, and Leonardo.ai expert</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-orange-600 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">Custom prompt libraries for your brand</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-orange-600 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">Workshops and training for your team</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition"
                >
                  Hire a Prompt Engineer
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md text-center">
              <div className="text-5xl mb-4">✨🤖</div>
              <p className="text-gray-600 dark:text-gray-400 italic">
                “I can generate exactly what you envision – or help you craft the prompts to do it yourself.”
              </p>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-500">— Stephen Magare, AI Prompt Engineer</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to stand out with AI‑powered visuals?</h2>
          <p className="mt-4 text-orange-100 max-w-xl mx-auto">
            Whether it&apos;s a single poster or a full campaign – let&apos;s bring your vision to life.
          </p>
          <div className="mt-8">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-orange-600 bg-white hover:bg-gray-100 transition"
            >
              Start a Design Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}