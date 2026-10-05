'use client';

import { useEffect, useRef, useState } from 'react';
import { Briefcase, Users, Globe2, Star } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: 120, suffix: '+', label: 'Projects Delivered' },
  { icon: Users, value: 80, suffix: '+', label: 'Happy Clients' },
  { icon: Globe2, value: 3, suffix: '', label: 'Countries Served' },
  { icon: Star, value: 98, suffix: '%', label: 'Client Satisfaction' },
];

/* Animated number that counts up when scrolled into view */
function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const [hasRun, setHasRun] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun) {
          setHasRun(true);
          const duration = 1600;
          const startTime = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
            setDisplay(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(step);
            else setDisplay(value);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, hasRun]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="relative bg-[#0A192F] text-white py-12 md:py-16 overflow-hidden">
      {/* Subtle orange accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center group transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-orange-500/15 border border-orange-500/25 flex items-center justify-center group-hover:bg-orange-500/25 group-hover:scale-110 transition-all">
                  <Icon className="w-6 h-6 text-orange-400" />
                </div>

                {/* Number */}
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-1 tracking-tight">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div className="text-[11px] sm:text-xs md:text-sm uppercase tracking-wider text-gray-400 group-hover:text-orange-400 transition-colors">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}