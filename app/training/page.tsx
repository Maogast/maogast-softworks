import Link from 'next/link';
import Script from 'next/script';
import { 
  GraduationCap, Briefcase, Users, Award, Clock, CreditCard, Laptop, 
  Palette, Megaphone, Brain, Zap, Target, Send, Eye, FileCheck, Star,
  ChevronDown, MapPin
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Training & Webinars in Nairobi – Upskill with Maogast Softworks',
  description: 'Join our software bootcamp, printing workshop, digital marketing course, or AI design training in Nairobi. Hands‑on projects, certificates, and flexible payment plans.',
  alternates: {
    canonical: 'https://maogastsoftworks.com/training',
  },
  openGraph: {
    title: 'Training & Webinars in Nairobi | Maogast Softworks',
    description: 'Gain industry‑ready skills in software, branding, marketing, and AI design. Real‑world projects and expert instructors in Kenya.',
    url: 'https://maogastsoftworks.com/training',
    siteName: 'Maogast Softworks',
    images: [{ url: 'https://maogastsoftworks.com/og-training.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Training & Webinars | Maogast Softworks Nairobi',
    description: 'Practical, career‑focused courses – from software development to prompt engineering.',
    images: ['https://maogastsoftworks.com/og-training.jpg'],
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
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://maogastsoftworks.com" },
      { "@type": "ListItem", "position": 2, "name": "Training & Webinars", "item": "https://maogastsoftworks.com/training" }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you offer online or in‑person training?",
        "acceptedAnswer": { "@type": "Answer", "text": "We offer both. Our training is hybrid – you can attend physically at our Nairobi centre or join live via Zoom. Recordings are also available for later revision." }
      },
      {
        "@type": "Question",
        "name": "What certificates do I receive?",
        "acceptedAnswer": { "@type": "Answer", "text": "Upon successful completion, you receive a certificate of completion from Maogast Softworks Limited, recognised by various local businesses and churches." }
      },
      {
        "@type": "Question",
        "name": "Are there payment plans?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can pay 50% upfront and the remaining 50% halfway through the course. Group discounts and early‑bird offers are also available." }
      },
      {
        "@type": "Question",
        "name": "Do I need prior experience for the software bootcamp?",
        "acceptedAnswer": { "@type": "Answer", "text": "Basic computer literacy is enough. The bootcamp starts with fundamentals and builds up to advanced topics. We support beginners." }
      }
    ]
  };

  return (
    <>
      <Script id="training-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Script id="training-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A192F] to-[#0F2A3F] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="trainingGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#F97316" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#trainingGrid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-400/30 rounded-full px-4 py-1 mb-6 animate-fade-in-up">
            <Zap className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-orange-300">Learn from the Experts</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Training & Webinars in Nairobi
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Gain in‑demand skills in software, branding, marketing, and AI design – taught by professionals who work in the industry.
          </p>
          <div className="mt-8 animate-fade-in-up animation-delay-400">
            <Link
              href="#courses"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition transform hover:scale-105 hover:shadow-lg"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      {/* NEW: Why Train with Maogast in Nairobi? */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Why Choose Maogast for Your Training in Nairobi?
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We don’t just teach theory – we equip you with practical skills that the Kenyan job market urgently needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-5">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Hybrid Classes in Nairobi</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Attend physically at our centre or join live online – whichever works for you.</p>
            </div>
            <div className="text-center p-5">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Briefcase className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Real Client Projects</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Build a portfolio with actual briefs from local businesses – not fake exercises.</p>
            </div>
            <div className="text-center p-5">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Industry Expert Trainers</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Learn from professionals who are currently working in tech and design fields.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid (unchanged) */}
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
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col"
              >
                <div className="p-5 flex-1">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors">
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

      {/* Why Choose Us (unchanged) */}
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
              <div key={idx} className="flex gap-3 group p-3 rounded-xl transition-all duration-300 hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-800">
                <div className="shrink-0 group-hover:scale-110 transition-transform">{reason.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{reason.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works (unchanged) */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How Training Works</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Simple steps from enrolment to certification.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Apply Online', icon: <Send className="w-6 h-6" />, desc: 'Fill out the registration form – no commitment yet.' },
              { step: '2', title: 'Attend a Free Intro', icon: <Eye className="w-6 h-6" />, desc: 'Join a 1‑hour webinar to meet the trainer and see the curriculum.' },
              { step: '3', title: 'Enrol & Pay', icon: <FileCheck className="w-6 h-6" />, desc: 'Secure your seat with a deposit (or full payment) via M‑PESA or bank.' },
            ].map((step) => (
              <div key={step.step} className="text-center group">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonial (unchanged) */}
      <section className="py-16 bg-white dark:bg-gray-900 border-t border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-6"><Star className="w-8 h-8 text-orange-500 mx-auto fill-orange-500" /></div>
          <blockquote className="text-center text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic">
            “The Software Development Bootcamp changed my career. After 7 weeks, I built a full‑stack inventory app and got hired as a junior developer. The mentors are still available for support.”
          </blockquote>
          <p className="text-center mt-4 text-gray-500 dark:text-gray-400">— Kevin O., Graduate & Software Engineer</p>
        </div>
      </section>

      {/* FAQ Section (unchanged) */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 open:shadow-md transition">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-semibold text-gray-900 dark:text-white">Do you offer online or in‑person training?</span>
                <ChevronDown className="w-5 h-5 text-orange-600 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                We offer both. Our training is hybrid – you can attend physically at our Nairobi centre or join live via Zoom. Recordings are also available for later revision.
              </p>
            </details>
            <details className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 open:shadow-md transition">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-semibold text-gray-900 dark:text-white">What certificates do I receive?</span>
                <ChevronDown className="w-5 h-5 text-orange-600 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Upon successful completion, you receive a certificate of completion from Maogast Softworks Limited, recognised by various local businesses and churches.
              </p>
            </details>
            <details className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 open:shadow-md transition">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-semibold text-gray-900 dark:text-white">Are there payment plans?</span>
                <ChevronDown className="w-5 h-5 text-orange-600 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Yes. You can pay 50% upfront and the remaining 50% halfway through the course. Group discounts and early‑bird offers are also available.
              </p>
            </details>
            <details className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 open:shadow-md transition">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-semibold text-gray-900 dark:text-white">Do I need prior experience for the software bootcamp?</span>
                <ChevronDown className="w-5 h-5 text-orange-600 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Basic computer literacy is enough. The bootcamp starts with fundamentals and builds up to advanced topics. We support beginners.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Upcoming Webinar (unchanged) */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Next Webinar Starts Soon</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Software Development Bootcamp – 10th May 2026. Limited seats.
          </p>
          <div className="mt-8">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 transition transform hover:scale-105"
            >
              Register Your Interest
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">Early bird discount ends 3rd May.</p>
        </div>
      </section>

      {/* Final CTA (unchanged) */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to upskill or start a new career?</h2>
          <p className="mt-4 text-orange-100 max-w-xl mx-auto">
            Talk to our training coordinator. We’ll help you choose the right course.
          </p>
          <div className="mt-8">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-orange-600 bg-white hover:bg-gray-100 transition transform hover:scale-105"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}