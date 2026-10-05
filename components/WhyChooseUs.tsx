import {
  Zap,
  Users,
  Shield,
  Clock,
  Headphones,
  Award,
  Sparkles,
  Globe2,
} from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Fast Turnaround',
    desc: 'Most projects delivered in 4–12 weeks. Rush options available for urgent launches.',
    color: 'orange',
  },
  {
    icon: Users,
    title: 'Direct Access to Team',
    desc: 'No account managers in between. You talk directly to the developers and designers.',
    color: 'blue',
  },
  {
    icon: Shield,
    title: 'Fixed-Price, No Surprises',
    desc: 'Clear quotes upfront. You know exactly what you pay before we start — no hidden fees.',
    color: 'green',
  },
  {
    icon: Clock,
    title: 'Deadline-Driven',
    desc: 'We commit to timelines and hit them. Weekly progress updates keep you in the loop.',
    color: 'purple',
  },
  {
    icon: Headphones,
    title: 'Post-Launch Support',
    desc: 'Free 30-day support after every project. Maintenance plans available for ongoing care.',
    color: 'rose',
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    desc: 'Every project is reviewed by a senior team member before delivery. 100% satisfaction policy.',
    color: 'amber',
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  orange: { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-600 dark:text-orange-400', border: 'border-orange-200 dark:border-orange-900' },
  blue: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-900' },
  green: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-600 dark:text-green-400', border: 'border-green-200 dark:border-green-900' },
  purple: { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-200 dark:border-purple-900' },
  rose: { bg: 'bg-rose-100 dark:bg-rose-900/30', text: 'text-rose-600 dark:text-rose-400', border: 'border-rose-200 dark:border-rose-900' },
  amber: { bg: 'bg-amber-100 dark:bg-amber-900/30', text: 'text-amber-600 dark:text-amber-400', border: 'border-amber-200 dark:border-amber-900' },
};

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      {/* Subtle tech constellation background */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/home/tech-constellation.webp)',
          opacity: 0.02,
          filter: 'grayscale(75%) brightness(0.55)',
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <span className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 font-semibold uppercase text-xs tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Why Maogast
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Why Clients Choose Us — And Stay
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            We combine engineering-grade precision with creative flair. Here&apos;s what makes us different.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            const c = colorMap[reason.color];
            return (
              <div
                key={idx}
                className={`group bg-white dark:bg-gray-800 rounded-2xl p-6 border ${c.border} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${c.text}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom trust strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          <span className="inline-flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-orange-500" /> Serving clients worldwide
          </span>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700">·</span>
          <span className="inline-flex items-center gap-2">
            <Shield className="w-4 h-4 text-orange-500" /> NDA & IP protection
          </span>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700">·</span>
          <span className="inline-flex items-center gap-2">
            <Headphones className="w-4 h-4 text-orange-500" /> 24/7 support available
          </span>
        </div>
      </div>
    </section>
  );
}