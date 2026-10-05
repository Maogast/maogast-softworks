import { Search, Palette, Code2, Rocket, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: 'We listen — your goals, your users, your deadline. Free 30-minute consultation.',
    icon: Search,
  },
  {
    num: '02',
    title: 'Design & Prototype',
    desc: 'You see a clickable mockup before we write a single line of code.',
    icon: Palette,
  },
  {
    num: '03',
    title: 'Build & Review',
    desc: 'Weekly updates, live previews. You approve each milestone before we move on.',
    icon: Code2,
  },
  {
    num: '04',
    title: 'Launch & Support',
    desc: 'We deploy, train your team, and stay on call for 30 days free.',
    icon: Rocket,
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-orange-600 dark:text-orange-400 font-semibold uppercase text-xs tracking-wider">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3">
            From Idea to Launch in 4 Simple Steps
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            No jargon, no hidden surprises — just a proven process we&apos;ve refined over hundreds of projects.
          </p>
        </div>

        {/* Desktop: horizontal timeline / Mobile: vertical */}
        <div className="relative">
          {/* Connector line — hidden on mobile */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" aria-hidden="true" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative group">
                  {/* Card */}
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                    {/* Icon circle */}
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-5 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform mx-auto lg:mx-0">
                      <Icon className="w-7 h-7 text-white" />
                      {/* Step number badge */}
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white dark:bg-[#0A192F] text-orange-600 text-[10px] font-bold flex items-center justify-center shadow border border-orange-500/30">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center lg:text-left">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-center lg:text-left flex-grow">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-orange-500/30"
          >
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
            Free 30-minute consultation · No commitment required
          </p>
        </div>
      </div>
    </section>
  );
}