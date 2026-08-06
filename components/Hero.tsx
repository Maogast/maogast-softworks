"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Cuboid, Gift } from 'lucide-react'; // New icons for missing services

export default function Hero() {
  const [serviceIndex, setServiceIndex] = useState(0);
  const services = [
    'Software',
    'Printing',
    'AI Design',
    'Content',
    'Training',
    '3D Signage',
    'Custom Products',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="bg-[#0A192F] min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Visually hidden H1 for SEO (targets primary keyword) */}
      <h1 className="sr-only">
        Maogast Softworks – Software Development, Printing & AI Design in Nairobi, Kenya
      </h1>

      {/* Subtle grid/circuit background */}
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Build. Print. Create.<br />
              <span className="text-orange-500 inline-block border-r-2 border-orange-500 pr-1 animate-blink">
                — One Partner, All {services[serviceIndex]}.
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-lg">
              Custom software, premium printing, AI‑powered design, 3D signage, corporate gifts, content strategy, and expert training — all under one roof in <strong className="text-orange-400">Nairobi, Kenya</strong>.
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

          {/* Right side – 8 icons in a 4x2 grid (Updated to include missing services) */}
          <div className="grid grid-cols-4 gap-4 md:gap-5">
            {/* Software */}
            <div className="hero-icon bg-white/10 backdrop-blur-sm p-4 rounded-2xl animate-float-3d hover:scale-110 hover:rotate-3 transition-all duration-300">
              <Image
                src="/images/code-icon.webp"
                alt="Software Development in Nairobi"
                width={100}
                height={100}
                className="w-16 h-16 md:w-20 md:h-20 object-contain mx-auto"
              />
            </div>
            {/* Printing */}
            <div className="hero-icon bg-white/10 backdrop-blur-sm p-4 rounded-2xl animate-float-3d-delayed hover:scale-110 hover:-rotate-3 transition-all duration-300">
              <Image
                src="/images/printing-icon.webp"
                alt="Printing & Branding Services"
                width={100}
                height={100}
                className="w-16 h-16 md:w-20 md:h-20 object-contain mx-auto"
              />
            </div>
            {/* AI */}
            <div className="hero-icon bg-white/10 backdrop-blur-sm p-4 rounded-2xl animate-glow-pulse hover:scale-110 transition-all duration-300 relative">
              <div className="absolute inset-0 rounded-2xl bg-orange-500/30 animate-ping pointer-events-none" />
              <Image
                src="/images/ai-icon.webp"
                alt="AI-Powered Design Kenya"
                width={100}
                height={100}
                className="w-16 h-16 md:w-20 md:h-20 object-contain mx-auto relative z-10"
              />
            </div>
            {/* Content Management */}
            <div className="hero-icon bg-white/10 backdrop-blur-sm p-4 rounded-2xl hover:scale-110 transition-all duration-300">
              <Image
                src="/images/content-icon.webp"
                alt="Content Management Nairobi"
                width={100}
                height={100}
                className="w-16 h-16 md:w-20 md:h-20 object-contain mx-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            {/* Training */}
            <div className="hero-icon bg-white/10 backdrop-blur-sm p-4 rounded-2xl hover:scale-110 transition-all duration-300">
              <Image
                src="/images/training-icon.webp"
                alt="Tech Training & Webinars Kenya"
                width={100}
                height={100}
                className="w-16 h-16 md:w-20 md:h-20 object-contain mx-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            {/* 3D Signage (NEW - Fallback uses Lucide icon) */}
            <div className="hero-icon bg-white/10 backdrop-blur-sm p-4 rounded-2xl hover:scale-110 transition-all duration-300 flex flex-col items-center justify-center">
              <Cuboid className="w-12 h-12 md:w-16 md:h-16 text-orange-400" />
              <span className="text-[10px] text-gray-400 mt-1">3D Signage</span>
            </div>
            {/* Custom Products (NEW - Fallback uses Lucide icon) */}
            <div className="hero-icon bg-white/10 backdrop-blur-sm p-4 rounded-2xl hover:scale-110 transition-all duration-300 flex flex-col items-center justify-center">
              <Gift className="w-12 h-12 md:w-16 md:h-16 text-orange-400" />
              <span className="text-[10px] text-gray-400 mt-1">Custom Gifts</span>
            </div>
            {/* Portfolio */}
            <div className="hero-icon bg-white/10 backdrop-blur-sm p-4 rounded-2xl hover:scale-110 transition-all duration-300">
              <Image
                src="/images/portfolio-icon.webp"
                alt="Maogast Softworks Portfolio"
                width={100}
                height={100}
                className="w-16 h-16 md:w-20 md:h-20 object-contain mx-auto opacity-90 hover:opacity-100 transition-opacity"
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