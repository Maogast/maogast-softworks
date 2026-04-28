import Link from 'next/link';
import { GraduationCap, Briefcase, Users, Award, Clock, CreditCard, Laptop, Palette, Megaphone, Brain, Zap, Target } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Training & Webinars – Upskill with Maogast Softworks',
  description: 'Join our software bootcamp, printing workshop, digital marketing course, or AI design training. Hands‑on projects, certificates, and flexible payment plans.',
  openGraph: {
    title: 'Training & Webinars | Maogast Softworks',
    description: 'Gain industry‑ready skills in software, branding, marketing, and AI design. Real‑world projects and expert instructors.',
    url: 'https://maogast-softworks.vercel.app/training',
    siteName: 'Maogast Softworks',
    images: [{ url: 'https://maogast-softworks.vercel.app/og-training.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Training & Webinars | Maogast Softworks',
    description: 'Practical, career‑focused courses – from software development to prompt engineering.',
    images: ['https://maogast-softworks.vercel.app/og-training.jpg'],
  },
};

const courses = [
  {
    icon: <Laptop className="w-8 h-8 text-orange-600" />,
    title: 'Software Development Bootcamp',
    desc: 'Master Next.js, React, TypeScript, and backend integration. Build real projects (e‑commerce, dashboards, inventory systems).',
    duration: '7 weeks',
    price: 'KES 60,000',
  },
  {
    icon: <Palette className="w-8 h-8 text-orange-600" />,
    title: 'Printing & Branding Workshop',
    desc: 'Learn heat press, vinyl cutting, sublimation, and design software. Start your own merchandise business.',
    duration: '4 weeks',
    price: 'KES 40,000',
  },
  {
    icon: <Megaphone className="w-8 h-8 text-orange-600" />,
    title: 'Digital Marketing & Social Media',
    desc: 'Social media strategy, ad campaigns, content creation, SEO, and analytics. Practical assignments for real brands.',
    duration: '4 weeks',
    price: 'KES 30,000',
  },
  {
    icon: <Brain className="w-8 h-8 text-orange-600" />,
    title: 'AI Poster & Prompt Design',
    desc: 'Generate stunning visuals with Midjourney, DALL·E, and Gemini. Master prompt engineering and design principles.',
    duration: '2 weeks',
    price: 'KES 35,000',
  },
];

const reasons = [
  {
    icon: <Award className="w-8 h-8 text-orange-600" />,
    title: 'Registered & Authentic',
    desc: 'Maogast Softworks Limited is a fully registered company in Kenya – you learn from a legitimate business.',
  },
  {
    icon: <Briefcase className="w-8 h-8 text-orange-600" />,
    title: 'Real‑World Projects',
    desc: 'Build a portfolio with actual client briefs (e.g., NK‑Organics, BrightSpark Electronics). Not just theory.',
  },
  {
    icon: <Users className="w-8 h-8 text-orange-600" />,
    title: 'Expert Instructors',
    desc: 'Trainers are active industry professionals with years of experience in software, design, and marketing.',
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-orange-600" />,
    title: 'Certificate of Completion',
    desc: 'Earn a certificate recognised by local businesses and churches. Boost your CV.',
  },
  {
    icon: <Clock className="w-8 h-8 text-orange-600" />,
    title: 'Flexible Schedule',
    desc: 'Evening and weekend classes available. Recorded sessions for those who miss live training.',
  },
  {
    icon: <CreditCard className="w-8 h-8 text-orange-600" />,
    title: 'Affordable & Payment Plans',
    desc: 'Pay in instalments (half upfront, half later). Early‑bird discounts for groups.',
  },
  {
    icon: <Target className="w-8 h-8 text-orange-600" />,
    title: 'Focused, Not Shallow',
    desc: 'University often spreads you thin across many subjects, leaving graduates unprepared and jobless. We drill deep into one field – so you master what the industry actually needs.',
  },
];

export default function TrainingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A192F] to-[#0F2A3F] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-400/30 rounded-full px-4 py-1 mb-6">
            <Zap className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-orange-300">Learn from the Experts</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Training & Webinars</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Gain in‑demand skills in software, branding, marketing, and AI design – taught by professionals who work in the industry.
          </p>
          <div className="mt-8">
            <Link
              href="#courses"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition transform hover:scale-105"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section id="courses" className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Training Programs</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Choose the course that fits your career goals. All include hands‑on projects and mentorship.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col"
              >
                <div className="p-5 flex-1">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{course.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">{course.desc}</p>
                  <div className="mt-4 flex justify-between items-center text-sm">
                    <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4" /> {course.duration}
                     </span>
                    <span className="font-bold text-orange-600">{course.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Learn with Maogast?</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              We are not just trainers – we are practitioners. Here’s what makes our training exceptional.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="shrink-0">{reason.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{reason.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How Training Works</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Simple steps from enrolment to certification.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Apply Online', desc: 'Fill out the registration form – no commitment yet.' },
              { step: '2', title: 'Attend a Free Intro', desc: 'Join a 1‑hour webinar to meet the trainer and see the curriculum.' },
              { step: '3', title: 'Enrol & Pay', desc: 'Secure your seat with a deposit (or full payment) via M‑PESA or bank.' },
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

      {/* Upcoming Courses / Webinars */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Next Webinar Starts Soon</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Software Development Bootcamp – 10th May 2026. Limited seats.
          </p>
          <div className="mt-8">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 transition"
            >
              Register Your Interest
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">Early bird discount ends 3rd May.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to upskill or start a new career?</h2>
          <p className="mt-4 text-orange-100 max-w-xl mx-auto">
            Talk to our training coordinator. We’ll help you choose the right course.
          </p>
          <div className="mt-8">
            <Link href="/quote" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}