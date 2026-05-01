import Link from "next/link";
import Script from "next/script";
import {
  Code,
  Database,
  MonitorSmartphone,
  Cloud,
  Shield,
  Rocket,
  Search,
  Layout,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Nairobi – Custom Web & Mobile Apps | Maogast Softworks",
  description:
    "Expert software development in Nairobi, Kenya. We specialize in Next.js, React, and Node.js to build scalable enterprise systems and mobile apps for modern businesses.",
  alternates: {
    canonical: "https://maogastsoftworks.com/software",
  },
  openGraph: {
    title: "Software Development Services in Nairobi | Maogast Softworks",
    description:
      "Custom web & mobile apps, cloud integration, and IT consulting tailored for the Kenyan market. Build scalable solutions with Maogast Softworks.",
    url: "https://maogastsoftworks.com/software",
    siteName: "Maogast Softworks",
    images: [
      {
        url: "https://maogastsoftworks.com/og-software.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development | Maogast Softworks Nairobi",
    description:
      "Build fast, secure web and mobile apps with a modern tech stack in Kenya.",
    images: ["https://maogastsoftworks.com/og-software.jpg"],
  },
};

export default function SoftwarePage() {
  // 1. Service Structured Data (unchanged)
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Software Development Services",
    serviceType: "Custom Software, Web & Mobile App Development",
    provider: {
      "@type": "LocalBusiness",
      name: "Maogast Softworks",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
    },
    areaServed: { "@type": "State", name: "Nairobi" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Solutions",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Application Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Enterprise Resource Planning (ERP) Systems" } },
      ],
    },
  };

  // 2. BreadcrumbList schema for this page
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://maogastsoftworks.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Software Development",
        item: "https://maogastsoftworks.com/software",
      },
    ],
  };

  // 3. FAQ schema (based on the visible FAQ section below)
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does it take to build a custom software application?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Timelines vary depending on complexity. A typical MVP takes 4–8 weeks, while larger enterprise systems may take 3–6 months. We work in agile sprints to deliver value quickly.",
        },
      },
      {
        "@type": "Question",
        name: "Do you only work with clients in Nairobi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are based in Nairobi, Kenya, but we serve clients nationwide and remotely. We have successfully delivered projects for businesses in Mombasa, Kisumu, and other regions.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies do you specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our primary stack includes Next.js, React, Node.js, Supabase, PostgreSQL, and Tailwind CSS. We also work with Django, Firebase, MongoDB, and cloud platforms like AWS and Vercel.",
        },
      },
    ],
  };

  return (
    <>
      {/* Structured Data Scripts */}
      <Script
        id="software-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id="software-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="software-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section – unchanged */}
      <section className="bg-gradient-to-br from-[#0A192F] to-[#0F2A3F] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="codeGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#F97316" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#codeGrid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Software Development in Nairobi
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Empowering Kenyan businesses with custom web & mobile apps, enterprise systems, and IT consulting.
          </p>
          <div className="mt-8 animate-fade-in-up animation-delay-400">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition transform hover:scale-105 hover:shadow-lg"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid – unchanged */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              What We Build
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              End‑to‑end software solutions for modern businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8 text-orange-600" />,
                title: "Web Applications",
                desc: "Responsive, fast, and scalable web apps using Next.js, React, and modern frameworks.",
              },
              {
                icon: <MonitorSmartphone className="w-8 h-8 text-orange-600" />,
                title: "Mobile Apps",
                desc: "Cross‑platform mobile apps (iOS & Android) built with React Native and Expo.",
              },
              {
                icon: <Database className="w-8 h-8 text-orange-600" />,
                title: "Enterprise Systems",
                desc: "Custom dashboards, inventory systems (ERPs), and internal tools to streamline operations.",
              },
              {
                icon: <Cloud className="w-8 h-8 text-orange-600" />,
                title: "Cloud Integration",
                desc: "Seamless integration with Supabase, AWS, Firebase, and third‑party APIs.",
              },
              {
                icon: <Shield className="w-8 h-8 text-orange-600" />,
                title: "Security & Compliance",
                desc: "Secure authentication, role‑based access, and data protection best practices.",
              },
              {
                icon: <Rocket className="w-8 h-8 text-orange-600" />,
                title: "IT Consulting",
                desc: "Technology audits, stack recommendations, and project planning for Nairobi startups.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack – unchanged */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Technologies We Master
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Modern, battle‑tested tools to deliver high‑quality software.
          </p>
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">Frontend & Mobile</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "React Native", "Expo", "Vite", "Redux Toolkit"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">Backend & Databases</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Node.js", "Django", "Firebase", "Supabase", "PostgreSQL", "MongoDB", "Express.js", "Prisma", "REST APIs", "GraphQL"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">DevOps & Cloud</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Docker", "Kubernetes", "GitHub Actions", "AWS (EC2, S3, RDS)", "Vercel", "Netlify", "Firebase Hosting", "CI/CD Pipelines", "Terraform"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">Other Essentials</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Git", "GitHub", "Postman", "Figma", "Jest", "Cypress", "ESLint", "Prettier"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process – unchanged */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Process</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">From idea to launch – we keep you in the loop.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Discovery", icon: <Search className="w-6 h-6" />, desc: "Understand your goals, users, and requirements." },
              { step: "2", title: "Design & Prototype", icon: <Layout className="w-6 h-6" />, desc: "Wireframes and interactive prototypes for feedback." },
              { step: "3", title: "Development", icon: <Code className="w-6 h-6" />, desc: "Agile sprints, regular updates, and quality assurance." },
              { step: "4", title: "Launch & Support", icon: <Rocket className="w-6 h-6" />, desc: "Deployment, training, and ongoing maintenance." },
            ].map((step) => (
              <div key={step.step} className="text-center group">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study – unchanged */}
      <section className="py-16 bg-white dark:bg-gray-900 border-t border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Success in Nairobi</h2>
            <p className="text-gray-600 dark:text-gray-400">A quick look at what we’ve delivered locally</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <span className="text-sm font-mono text-orange-600 bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full">Case Study</span>
              <h3 className="text-xl font-bold mt-2 text-gray-900 dark:text-white">Inventory Management System</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Built a real‑time dashboard for a Nairobi retailer, reducing stockouts by 40% and cutting manual work by 6 hours/week.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Next.js", "Supabase", "Tailwind", "Chart.js"].map((tech) => (
                  <span key={tech} className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">{tech}</span>
                ))}
              </div>
            </div>
            <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* NEW: FAQ Section (both visible and structured) */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 open:shadow-md transition">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-semibold text-gray-900 dark:text-white">How long does it take to build a custom software application?</span>
                <ChevronDown className="w-5 h-5 text-orange-600 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Timelines vary depending on complexity. A typical MVP takes 4–8 weeks, while larger enterprise systems may take 3–6 months. We work in agile sprints to deliver value quickly.
              </p>
            </details>
            <details className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 open:shadow-md transition">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-semibold text-gray-900 dark:text-white">Do you only work with clients in Nairobi?</span>
                <ChevronDown className="w-5 h-5 text-orange-600 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                We are based in Nairobi, Kenya, but we serve clients nationwide and remotely. We have successfully delivered projects for businesses in Mombasa, Kisumu, and other regions.
              </p>
            </details>
            <details className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 open:shadow-md transition">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-semibold text-gray-900 dark:text-white">What technologies do you specialize in?</span>
                <ChevronDown className="w-5 h-5 text-orange-600 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Our primary stack includes Next.js, React, Node.js, Supabase, PostgreSQL, and Tailwind CSS. We also work with Django, Firebase, MongoDB, and cloud platforms like AWS and Vercel.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA – unchanged */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to build your next software project?</h2>
          <p className="mt-4 text-orange-100 max-w-xl mx-auto">
            Let’s talk about your idea. We’ll help you choose the right technology and deliver on time.
          </p>
          <div className="mt-8">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-orange-600 bg-white hover:bg-gray-100 transition transform hover:scale-105"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}