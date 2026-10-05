import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Maogast delivered our solar company website in 2 weeks — faster than any agency we spoke to. Their attention to detail on SEO and mobile responsiveness is unmatched. Highly recommend.",
    name: 'Lavan Solar Systems Team',
    role: 'Nairobi, Kenya',
    initials: 'LS',
    color: 'from-[#113F58] to-[#C59833]',
    rating: 5,
  },
  {
    quote:
      "They built our medical mission e-commerce platform end-to-end. M-Pesa checkout, inventory, SMS alerts — everything works flawlessly. We've processed hundreds of orders without a single issue.",
    name: 'NK Medical Missionaries',
    role: 'Kenya',
    initials: 'NK',
    color: 'from-emerald-600 to-teal-700',
    rating: 5,
  },
  {
    quote:
      "The inventory system they built for us cut stockouts by 40%. The team genuinely understood our retail business — not just the code. Outstanding partner.",
    name: 'BrightSpark Electronics',
    role: 'Nairobi, Kenya',
    initials: 'BS',
    color: 'from-blue-600 to-indigo-700',
    rating: 5,
  },
  {
    quote:
      "Working with Maogast from the US was seamless. Clear communication, on-time delivery, and quality that rivals agencies charging 5x more. Would work with them again.",
    name: 'International Client',
    role: 'USA',
    initials: 'IC',
    color: 'from-purple-600 to-pink-700',
    rating: 5,
  },
  {
    quote:
      "They designed and printed 200 custom T-shirts for our event in under a week. The prints were flawless and the team helped us refine the design at no extra charge.",
    name: 'James M.',
    role: 'Event Organizer, Nairobi',
    initials: 'JM',
    color: 'from-orange-600 to-red-700',
    rating: 5,
  },
  {
    quote:
      "The 3D signage they fabricated for our hotel lobby is a masterpiece. Brushed aluminum with concealed LEDs — guests constantly ask about it. Truly premium work.",
    name: 'Boutique Hotel Client',
    role: 'Westlands, Nairobi',
    initials: 'BH',
    color: 'from-amber-600 to-orange-700',
    rating: 5,
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5 mb-3">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      {/* Subtle background */}
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
          <span className="text-orange-600 dark:text-orange-400 font-semibold uppercase text-xs tracking-wider">
            Client Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3">
            Trusted by Businesses Worldwide
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Real feedback from real clients across Kenya, Romania, the USA and beyond.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-orange-500/20 mb-2" />

              {/* Rating */}
              <StarRow count={t.rating} />

              {/* Quote text */}
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-5 flex-grow">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0`}
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-gray-900 dark:text-white text-sm truncate">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall trust line */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-600 dark:text-gray-400">
          <span className="inline-flex items-center gap-2">
            <span className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
              ))}
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">5.0</span>
            <span>average rating</span>
          </span>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700">·</span>
          <span>
            Based on <strong className="text-gray-900 dark:text-white">80+</strong> completed projects
          </span>
        </div>
      </div>
    </section>
  );
}