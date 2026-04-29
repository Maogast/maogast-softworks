"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [serviceIndex, setServiceIndex] = useState(0);
  const services = ['Software', 'Print', 'AI'];

  useEffect(() => {
    const interval = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="bg-[#0A192F] min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Subtle grid/circuit background (unchanged) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F97316" strokeWidth="0.5"/>
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
          {/* Left side – text with typewriter */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Build. Print. Create.<br />
              <span className="text-orange-500 inline-block border-r-2 border-orange-500 pr-1 animate-blink">
                — One Partner, All {services[serviceIndex]}.
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-lg">
              Custom software, premium printing, and AI‑powered design – under one roof.
            </p>
            <div className="mt-8 flex gap-4 items-center">
              <Link href="/quote" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-orange-500/30">
                Request a Quote
              </Link>
              {/* Scroll hint */}
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
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

          {/* Right side – icons with hover */}
          <div className="flex justify-center gap-8 md:justify-end">
            <div className="hero-icon bg-white/10 backdrop-blur-sm p-5 rounded-2xl animate-float-3d hover:scale-110 hover:rotate-3 transition-all duration-300">
              <Image
                src="/images/code-icon.webp"
                alt="Software Development"
                width={120}
                height={120}
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            </div>
            <div className="hero-icon bg-white/10 backdrop-blur-sm p-5 rounded-2xl animate-float-3d-delayed hover:scale-110 hover:-rotate-3 transition-all duration-300">
              <Image
                src="/images/printing-icon.webp"
                alt="Printing & Branding"
                width={120}
                height={120}
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            </div>
            <div className="hero-icon bg-white/10 backdrop-blur-sm p-5 rounded-2xl animate-glow-pulse hover:scale-110 transition-all duration-300 relative">
              <div className="absolute inset-0 rounded-2xl bg-orange-500/30 animate-ping pointer-events-none" />
              <Image
                src="/images/ai-icon.webp"
                alt="AI Design"
                width={120}
                height={120}
                className="w-24 h-24 md:w-32 md:h-32 object-contain relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { border-color: transparent; }
          50% { border-color: #F97316; }
        }
        .animate-blink {
          animation: blink 0.8s step-end infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}