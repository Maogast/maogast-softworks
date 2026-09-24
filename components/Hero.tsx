"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Cuboid, Gift } from 'lucide-react';

const services = [
  'Software',
  'Printing',
  'AI Design',
  'Content',
  'Training',
  '3D Signage',
  'Custom Products',
];

export default function Hero() {
  const [serviceIndex, setServiceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0A192F] min-h-[90vh] flex items-center relative overflow-hidden">
      {/* SEO H1 (visually hidden) */}
      <h1 className="sr-only">
        Maogast Softworks – Software Development, Printing & AI Design in Nairobi, Kenya – Serving Clients Worldwide
      </h1>

      {/* Grid background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F97316" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Build. Print. Create.
              <br />
              <span className="text-orange-500 inline-block border-r-2 border-orange-500 pr-1 animate-blink">
                — One Partner, All {services[serviceIndex]}.
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-lg">
              Custom software, premium printing, AI‑powered design, 3D signage, corporate
              gifts, content strategy, and expert training — all under one roof in{' '}
              <strong className="text-orange-400">Nairobi</strong> and{' '}
              <strong className="text-orange-400">delivered worldwide</strong>.
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              Recently served clients in{' '}
              <span className="text-gray-300">Kenya · Romania · USA</span>
            </div>
            <div className="mt-8 flex gap-4 items-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md text-base font-medium text-white bg-orange-600 hover:bg-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-orange-500/30"
              >
                Request a Quote
              </Link>
              <button
                onClick={() =>
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="text-gray-400 hover:text-orange-400 transition-colors flex flex-col items-center text-sm"
                aria-label="Scroll down"
              >
                <span className="mb-1">Explore</span>
                <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT — clean icon grid with labels */}
          <div className="grid grid-cols-4 gap-3 md:gap-4">
            {[
              { name: 'Software', src: '/images/code-icon.webp', alt: 'Software Development in Nairobi', style: 'float' },
              { name: 'Printing', src: '/images/printing-icon.webp', alt: 'Printing & Branding Services', style: 'float-delayed' },
              { name: 'AI Design', src: '/images/ai-icon.webp', alt: 'AI-Powered Design Kenya', style: 'glow' },
              { name: 'Content', src: '/images/content-icon.webp', alt: 'Content Management Nairobi', style: 'plain' },
              { name: 'Training', src: '/images/training-icon.webp', alt: 'Tech Training & Webinars Kenya', style: 'plain' },
              { name: '3D Signage', icon: 'cuboid', alt: '3D Signage Nairobi', style: 'plain' },
              { name: 'Custom Gifts', icon: 'gift', alt: 'Custom Corporate Gifts', style: 'plain' },
              { name: 'Portfolio', src: '/images/portfolio-icon.webp', alt: 'Maogast Softworks Portfolio', style: 'plain' },
            ].map((item, idx) => {
              const animClass =
                item.style === 'float'
                  ? 'animate-float-3d'
                  : item.style === 'float-delayed'
                  ? 'animate-float-3d-delayed'
                  : item.style === 'glow'
                  ? 'animate-glow-pulse relative'
                  : '';

              return (
                <div
                  key={idx}
                  className={`hero-icon bg-white/10 backdrop-blur-sm rounded-2xl p-3 flex flex-col items-center justify-center ${animClass}`}
                >
                  {item.icon === 'cuboid' ? (
                    <Cuboid className="w-10 h-10 md:w-12 md:h-12 text-orange-400" />
                  ) : item.icon === 'gift' ? (
                    <Gift className="w-10 h-10 md:w-12 md:h-12 text-orange-400" />
                  ) : (
                    <Image
                      src={item.src as string}
                      alt={item.alt as string}
                      width={80}
                      height={80}
                      className="w-12 h-12 md:w-16 md:h-16 object-contain"
                    />
                  )}
                  <span className="text-[10px] md:text-xs text-gray-300 mt-1.5 text-center font-medium leading-tight">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { border-color: transparent; }
          50% { border-color: #F97316; }
        }
        .animate-blink { animation: blink 0.8s step-end infinite; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </section>
  );
}