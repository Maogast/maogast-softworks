import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
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
  GraduationCap,
  MapPin,
  Globe,
  ShoppingCart,
  FileText,
  Wrench,
  PenTool,
  Sparkles,
  Clock,
  Layers,
  Mail,
  BarChart3,
  AlertTriangle,
  Flame,
  Users,
  Building2,
  Target,
  ArrowRight,
  TrendingUp,
  Zap,
  Puzzle,
  Headphones,
  Briefcase,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Software Development Nairobi – Custom Web, Mobile & CMS | Mgst (Maogast Softworks)",
  description:
    "Full‑service software development in Nairobi, Kenya by Mgst. We build custom web apps, mobile apps, CMS (WordPress, Shopify), enterprise systems, and academic projects for students.",
  alternates: {
    canonical: "https://maogastsoftworks.com/software",
  },
  openGraph: {
    title: "Software Development Services in Nairobi | Mgst Softworks",
    description:
      "Custom web & mobile apps, CMS development (WordPress, Shopify), cloud integration, IT consulting, and academic research projects – tailored for the Kenyan market.",
    url: "https://maogastsoftworks.com/software",
    siteName: "Mgst (Maogast Softworks)",
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
    title: "Software Development | Mgst Softworks Nairobi",
    description:
      "Build fast, secure web and mobile apps with a modern tech stack in Kenya. Plus WordPress, Shopify, and CMS solutions.",
    images: ["https://maogastsoftworks.com/og-software.jpg"],
  },
};

export default function SoftwarePage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Software Development Services",
    serviceType:
      "Custom Software, Web & Mobile App Development, CMS, E‑commerce, Academic Projects",
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
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "CMS Development (WordPress, Shopify)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Enterprise Resource Planning (ERP) Systems" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Academic & Research Projects" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design & Prototyping" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Software Maintenance & Support" } },
      ],
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://maogastsoftworks.com" },
      { "@type": "ListItem", position: 2, name: "Software Development", item: "https://maogastsoftworks.com/software" },
    ],
  };

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
          text: "Our primary stack includes Next.js, React, Node.js, Supabase, PostgreSQL, and Tailwind CSS. We also work with Django, Firebase, MongoDB, WordPress, Shopify, and cloud platforms like AWS and Vercel.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help me with my university or postgraduate software project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We assist undergraduate, master's, and PhD students with custom software projects – from system design to full implementation. We ensure the work meets academic standards and can provide documentation support.",
        },
      },
      {
        "@type": "Question",
        name: "Do you build WordPress or Shopify websites?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We develop custom WordPress themes and plugins, and build Shopify stores with custom integrations. We can also migrate existing sites to modern platforms.",
        },
      },
    ],
  };

  return (
    <>
      <Script id="software-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Script id="software-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Script id="software-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            {/* ============================================================ */}
      {/* HERO — Image fully visible (restored to previous setting)     */}
      {/* ============================================================ */}
      <section className="relative bg-[#0A192F] text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/software/software-hero-city.webp)",
            opacity: 1,
            filter: "blur(0.5px) saturate(0.9)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,25,47,0.92) 0%, rgba(10,25,47,0.55) 50%, rgba(10,25,47,1) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Software Development in Nairobi
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Empowering Kenyan businesses, startups, and students with custom web & mobile apps, CMS solutions, enterprise systems, and academic research projects.
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

      {/* ============================================================ */}
      {/* BUSINESS CHALLENGES WE SOLVE                                  */}
      {/* ============================================================ */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="inline-block text-sm font-semibold text-orange-600 uppercase tracking-wider mb-3">
              The Problems We Solve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Business Challenges We Solve Every Day
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Technology should accelerate your business — not hold it back. These are the six most common problems our clients face before working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "Slow & Manual Processes", desc: "Paperwork, spreadsheets, and manual handoffs slow down operations and frustrate your team.", color: "orange" },
              { icon: Layers, title: "Siloed Information", desc: "Data lives in disconnected systems — CRM, accounting, and operations can't talk to each other.", color: "blue" },
              { icon: Mail, title: "Disjointed Workflows", desc: "Approvals happen over WhatsApp and email. Work moves between people, not through processes.", color: "purple" },
              { icon: BarChart3, title: "Limited Visibility", desc: "Leaders rely on outdated reports and spend hours validating numbers instead of making decisions.", color: "green" },
              { icon: AlertTriangle, title: "Growing Risk & Compliance", desc: "Inconsistent processes increase operational risk, data loss, and audit failures.", color: "red" },
              { icon: Flame, title: "IT Firefighting", desc: "Your tech team spends more time fixing problems than building new capabilities.", color: "amber" },
            ].map((item, idx) => {
              const Icon = item.icon;
              const colorMap: Record<string, string> = {
                orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-600",
                blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600",
                purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600",
                green: "bg-green-100 dark:bg-green-900/30 text-green-600",
                red: "bg-red-100 dark:bg-red-900/30 text-red-600",
                amber: "bg-amber-100 dark:bg-amber-900/30 text-amber-600",
              };
              return (
                <div
                  key={idx}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${colorMap[item.color]} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold group"
            >
              See how we fix these for your business
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHY CHOOSE                                                    */}
      {/* ============================================================ */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Why Nairobi Businesses Trust Maogast Softworks
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We understand the local market – from M‑Pesa integrations to high‑performance apps, CMS, and e‑commerce for Kenyan businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-5">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Nairobi‑Based Team</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Same time zone, fast communication, and on‑site meetings when needed.
              </p>
            </div>
            <div className="text-center p-5">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Code className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Modern Tech Stack</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Next.js, React, Node.js, Supabase – built for performance and scale.
              </p>
            </div>
            <div className="text-center p-5">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Secure & Compliant</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Data protection and role‑based access for Kenyan enterprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT WE BUILD                                                 */}
      {/* ============================================================ */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              What We Build
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              End‑to‑end software solutions for businesses, organizations, and academic researchers in Nairobi.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Code className="w-8 h-8 text-orange-600" />, title: "Custom Web Applications", desc: "Responsive, fast, and scalable web apps using Next.js, React, and modern frameworks." },
              { icon: <MonitorSmartphone className="w-8 h-8 text-orange-600" />, title: "Mobile Apps", desc: "Cross‑platform mobile apps (iOS & Android) built with React Native and Expo." },
              { icon: <Globe className="w-8 h-8 text-orange-600" />, title: "CMS & WordPress Development", desc: "Custom WordPress themes, plugins, and headless CMS solutions for blogs, corporate sites, and media platforms." },
              { icon: <ShoppingCart className="w-8 h-8 text-orange-600" />, title: "E‑commerce & Shopify Stores", desc: "Full‑featured online stores with Shopify, WooCommerce, and custom checkout integrations – including M‑Pesa Paybill." },
              { icon: <FileText className="w-8 h-8 text-orange-600" />, title: "Content Management Systems", desc: "Build custom CMS platforms for managing digital content, news, and media – tailored to your workflow." },
              { icon: <Database className="w-8 h-8 text-orange-600" />, title: "Enterprise Systems", desc: "Custom dashboards, inventory systems (ERPs), and internal tools to streamline operations." },
              { icon: <Cloud className="w-8 h-8 text-orange-600" />, title: "Cloud Integration", desc: "Seamless integration with Supabase, AWS, Firebase, and third‑party APIs." },
              { icon: <Shield className="w-8 h-8 text-orange-600" />, title: "Security & Compliance", desc: "Secure authentication, role‑based access, and data protection best practices." },
              { icon: <Rocket className="w-8 h-8 text-orange-600" />, title: "IT Consulting", desc: "Technology audits, stack recommendations, and project planning for Nairobi startups." },
              { icon: <GraduationCap className="w-8 h-8 text-orange-600" />, title: "Academic & Research Projects", desc: "Custom software solutions for undergraduate, master's, and PhD students – system design, development, and documentation support." },
              { icon: <PenTool className="w-8 h-8 text-orange-600" />, title: "UI/UX Design & Prototyping", desc: "User‑centred design, wireframing, and interactive prototypes before development begins." },
              { icon: <Wrench className="w-8 h-8 text-orange-600" />, title: "Software Maintenance & Support", desc: "Ongoing maintenance, bug fixes, performance optimisation, and 24/7 support for your software systems." },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
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

            {/* ============================================================ */}
      {/* FRAGMENTED → CONNECTED — SHRUNK + BACKGROUND FULLY VISIBLE   */}
      {/* ============================================================ */}
      <section className="py-10 md:py-14 text-white relative overflow-hidden">
        {/* ✅ Background — fully visible (as you originally had it) */}
        <div
          className="absolute inset-0 pointer-events-none bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/software/connected-systems-hero.webp)",
          }}
          aria-hidden="true"
        />

        {/* ✅ Thin dark gradient — top & bottom fade only, keeps middle visible */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,25,47,0.85) 0%, rgba(10,25,47,0.35) 30%, rgba(10,25,47,0.35) 70%, rgba(10,25,47,0.95) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center mb-6 md:mb-8 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-semibold text-orange-400 uppercase tracking-wider mb-2">
              The Transformation
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mb-2">
              From Fragmented to <span className="text-orange-500">Connected</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              We don&apos;t just write code — we unify your business systems so people, processes, and data flow together.
            </p>
          </div>

          {/* ✅ Central image — MUCH smaller */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-orange-500/20 mb-6 md:mb-8 mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9]">
              <Image
                src="/images/software/fragmented-to-connected.webp"
                alt="From fragmented systems to connected business systems — Maogast Softworks transformation"
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 448px, 512px"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/50 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Before / After columns — tighter */}
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {/* FROM — Fragmented */}
            <div>
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-3 py-1 mb-3 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span className="text-[10px] font-semibold text-red-300 uppercase tracking-wider">
                  From · Fragmented
                </span>
              </div>
              <ul className="space-y-2">
                {[
                  { icon: Clock, title: "Slow & Manual", desc: "Paperwork, spreadsheets, and manual handoffs cause delays." },
                  { icon: Layers, title: "Siloed Information", desc: "Data lives in different systems with little visibility." },
                  { icon: Mail, title: "Disjointed Workflows", desc: "Work moves between people, not through processes." },
                  { icon: BarChart3, title: "Limited Visibility", desc: "Leaders spend hours validating numbers." },
                  { icon: AlertTriangle, title: "Higher Risk", desc: "Inconsistent processes increase operational risk." },
                  { icon: Flame, title: "IT Firefighting", desc: "IT teams fix problems instead of driving innovation." },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <li key={idx} className="flex items-start gap-3 bg-[#0A192F]/70 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                      <div className="w-8 h-8 rounded-md bg-red-500/20 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-red-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-xs">{item.title}</h4>
                        <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">{item.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* TO — Connected */}
            <div>
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1 mb-3 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-[10px] font-semibold text-green-300 uppercase tracking-wider">
                  To · Connected
                </span>
              </div>
              <ul className="space-y-2">
                {[
                  { icon: Zap, title: "Faster Onboarding", desc: "Customer onboarding takes hours instead of days." },
                  { icon: Users, title: "360° Customer View", desc: "Your team sees every customer, every interaction, everywhere." },
                  { icon: CheckCircle, title: "Digital & Traceable Approvals", desc: "Internal approvals are digital, controlled, fully auditable." },
                  { icon: Building2, title: "Consistent Across Branches", desc: "Every location operates on the same standards." },
                  { icon: BarChart3, title: "Real-time Visibility", desc: "Executives access live dashboards, not delayed reports." },
                  { icon: TrendingUp, title: "IT as an Enabler", desc: "IT focuses on improvements and driving business forward." },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <li key={idx} className="flex items-start gap-3 bg-[#0A192F]/70 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                      <div className="w-8 h-8 rounded-md bg-green-500/20 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-xs">{item.title}</h4>
                        <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">{item.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Footer statement — tighter */}
          <div className="mt-6 md:mt-8 bg-[#0A192F]/80 backdrop-blur-md border border-orange-500/30 rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 md:gap-5">
            <div className="w-11 h-11 rounded-xl bg-orange-500 flex items-center justify-center shrink-0">
              <Target className="w-5 h-5 text-white" />
            </div>
            <p className="text-white text-sm md:text-base font-medium leading-snug text-center md:text-left">
              A modern business is{" "}
              <span className="text-orange-400 font-bold">
                connected, agile, and ready for what&apos;s next.
              </span>
            </p>
            <div className="flex flex-wrap items-center gap-3 md:ml-auto">
              {[
                { icon: Users, label: "Happier customers" },
                { icon: TrendingUp, label: "Stronger performance" },
                { icon: Shield, label: "Lower risk" },
                { icon: Rocket, label: "Sustainable growth" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-1.5 text-[10px] text-gray-300">
                    <Icon className="w-3 h-3 text-orange-400" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TECHNOLOGY OUTCOMES BY ROLE                                   */}
      {/* ============================================================ */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="inline-block text-sm font-semibold text-orange-600 uppercase tracking-wider mb-3">
              Who We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Technology Outcomes, By Role
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Different leaders have different priorities — but the goal is the same: technology that makes the business work better.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { role: "Startups & Founders", icon: Rocket, color: "blue", headline: "Ship fast. Scale confidently.", body: "We help founders go from idea to production in weeks — not months. Clean architecture, modern stack, ready to raise funding.", points: ["MVP in 4–6 weeks", "Investor-ready codebase", "Scalable from day one", "Full IP ownership"] },
              { role: "SMEs & Operations", icon: Briefcase, color: "orange", headline: "Automate. Gain control.", body: "From inventory to invoicing, we replace manual processes with systems that save hours and reduce costly errors.", points: ["Custom ERP systems", "M-Pesa integrations", "Inventory & POS", "Real-time reporting"] },
              { role: "Enterprise & IT Leaders", icon: Building2, color: "purple", headline: "Integrate. Reduce risk.", body: "We connect legacy systems, modernise infrastructure, and give your IT team the tools to drive innovation.", points: ["System integration", "Cloud migration", "Security & compliance", "Legacy modernisation"] },
              { role: "Academic & Research", icon: GraduationCap, color: "green", headline: "Build. Publish. Defend.", body: "Custom software for undergraduate, master's, and PhD projects — designed, developed, and documented to academic standards.", points: ["System design support", "Full implementation", "Documentation", "Defense-ready demos"] },
            ].map((item, idx) => {
              const Icon = item.icon;
              const colorMap: Record<string, { bg: string; text: string; border: string; accent: string }> = {
                blue: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-600 dark:text-blue-400", border: "border-blue-200 dark:border-blue-900", accent: "bg-blue-500" },
                orange: { bg: "bg-orange-100 dark:bg-orange-900/30", text: "text-orange-600 dark:text-orange-400", border: "border-orange-200 dark:border-orange-900", accent: "bg-orange-500" },
                purple: { bg: "bg-purple-100 dark:bg-purple-900/30", text: "text-purple-600 dark:text-purple-400", border: "border-purple-200 dark:border-purple-900", accent: "bg-purple-500" },
                green: { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-600 dark:text-green-400", border: "border-green-200 dark:border-green-900", accent: "bg-green-500" },
              };
              const c = colorMap[item.color];
              return (
                <div key={idx} className={`bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border ${c.border} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col`}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${c.bg}`}>
                    <Icon className={`w-7 h-7 ${c.text}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{item.role}</h3>
                  <div className={`w-10 h-0.5 ${c.accent} rounded-full mb-4`} />
                  <p className={`text-sm font-semibold ${c.text} mb-3`}>{item.headline}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-grow">{item.body}</p>
                  <ul className="space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <CheckCircle className={`w-3.5 h-3.5 ${c.text} shrink-0`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* DIGITAL TRANSFORMATION IN KENYA                               */}
      {/* ============================================================ */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block text-sm font-semibold text-orange-600 uppercase tracking-wider mb-3">
                Digital Transformation in Kenya
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-5">
                We&apos;re Building the Systems Kenya&apos;s Businesses Run On
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                From Nairobi&apos;s startups to established enterprises, from Mombasa retailers to Kisumu service providers — our software is powering the daily operations of Kenyan businesses.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  { icon: Puzzle, text: "Systems that fit how you already work" },
                  { icon: Headphones, text: "Support in your timezone, in your language" },
                  { icon: Zap, text: "Fast delivery — usually 4–12 weeks" },
                  { icon: Shield, text: "Data protection and business continuity built in" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.text} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-orange-600" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
              <Link href="/quote" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition transform hover:scale-105">
                Talk to Our Team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/software/digital-transformation-kenya.webp"
                  alt="Digital transformation for Kenyan businesses — Maogast Softworks team at work"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0A192F]/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white dark:bg-[#0A192F] rounded-2xl shadow-2xl p-4 border border-gray-100 dark:border-gray-800 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Avg. delivery</div>
                    <div className="text-base font-bold text-gray-900 dark:text-white">4–12 weeks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TECHNOLOGIES WE MASTER                                        */}
      {/* ============================================================ */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Technologies We Master</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Modern, battle‑tested tools to deliver high‑quality software.</p>

          {[
            { title: "Frontend & Mobile", items: ["Next.js", "React", "Angular", "Vue.js", "Svelte", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "React Native", "Expo", "Flutter", "Vite", "Redux Toolkit"], highlight: false },
            { title: "Backend & Databases", items: ["Node.js", "Django", "Laravel", "FastAPI", "Express.js", "NestJS", "Supabase", "Firebase", "PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "REST APIs", "GraphQL", "tRPC"], highlight: false },
            { title: "CMS & E‑commerce", items: ["WordPress", "Shopify", "WooCommerce", "Contentful", "Strapi", "Sanity", "BigCommerce"], highlight: false },
            { title: "DevOps & Cloud", items: ["Docker", "Kubernetes", "GitHub Actions", "AWS (EC2, S3, RDS, Lambda)", "Google Cloud", "Microsoft Azure", "Vercel", "Netlify", "Firebase Hosting", "CI/CD Pipelines", "Terraform", "Nginx"], highlight: false },
            { title: "AI & Modern Tooling", items: ["OpenAI API", "Claude API", "LangChain", "Hugging Face", "Cursor", "GitHub Copilot", "Claude Code", "ChatGPT", "Antigravity"], highlight: true },
            { title: "Payments & Integrations", items: ["M-Pesa (Daraja API)", "Stripe", "PayPal", "Flutterwave", "Twilio", "SendGrid", "Resend", "WhatsApp Business API"], highlight: true },
            { title: "Testing & Quality", items: ["Jest", "Cypress", "Playwright", "Vitest", "ESLint", "Prettier", "Postman"], highlight: false },
          ].map((section) => (
            <div key={section.title} className="mt-8">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">{section.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {section.items.map((tech) => (
                  <span
                    key={tech}
                    className={
                      section.highlight
                        ? "px-4 py-2 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors cursor-default"
                        : "px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors cursor-default"
                    }
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* OUR PROCESS                                                   */}
      {/* ============================================================ */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">How We Work</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">Our Process</h2>
                <p className="mt-3 text-gray-600 dark:text-gray-400">From idea to launch — we keep you in the loop at every step.</p>
              </div>
              <div className="relative">
                <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-500/20" aria-hidden="true" />
                <div className="space-y-6">
                  {[
                    { step: "01", title: "Discovery", icon: <Search className="w-5 h-5" />, desc: "Understand your goals, users, and requirements." },
                    { step: "02", title: "Design & Prototype", icon: <Layout className="w-5 h-5" />, desc: "Wireframes and interactive prototypes for feedback." },
                    { step: "03", title: "Development", icon: <Code className="w-5 h-5" />, desc: "Agile sprints, regular updates, and quality assurance." },
                    { step: "04", title: "Launch & Support", icon: <Rocket className="w-5 h-5" />, desc: "Deployment, training, and ongoing maintenance." },
                  ].map((step) => (
                    <div key={step.step} className="relative flex items-start gap-5 group">
                      <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-baseline gap-3">
                          <span className="text-xs font-mono font-bold text-orange-500">{step.step}</span>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{step.title}</h3>
                        </div>
                        <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square group">
                <Image src="/images/software/design-to-code.webp" alt="From design wireframes to production code — Maogast Softworks development process" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-bottom group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/85 via-transparent to-transparent" />
                <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/95 dark:bg-[#0A192F]/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                  <span className="text-xs font-semibold text-gray-900 dark:text-white">Design → Code</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-sm font-medium leading-relaxed">Every project starts on paper — then becomes production-grade code.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CASE STUDY                                                    */}
      {/* ============================================================ */}
      <section className="py-16 bg-white dark:bg-gray-900 border-t border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Success in Nairobi</h2>
            <p className="text-gray-600 dark:text-gray-400">A quick look at what we&apos;ve delivered locally</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg grid md:grid-cols-2 gap-0">
            <div className="p-8 flex flex-col justify-center">
              <span className="text-sm font-mono text-orange-600 bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full self-start">Case Study</span>
              <h3 className="text-2xl font-bold mt-4 text-gray-900 dark:text-white">Inventory Management System</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">Built a real-time dashboard for a Nairobi retailer, reducing stockouts by 40% and cutting manual work by 6 hours/week. Integrated M-Pesa Paybill for instant payments.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Next.js", "Supabase", "Tailwind", "M-Pesa API", "Chart.js"].map((tech) => (
                  <span key={tech} className="text-xs bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2.5 py-1 rounded-full border border-gray-200 dark:border-gray-600">{tech}</span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full"><CheckCircle className="w-5 h-5 text-green-600" /></div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Impact</div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">40% fewer stockouts</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[360px] overflow-hidden">
              <Image src="/images/software/mpesa-integration.webp" alt="M-Pesa Paybill integration for Maogast Softworks client project" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0A192F]/40 via-transparent to-transparent" />
              <div className="absolute top-4 right-4 bg-white/95 dark:bg-[#0A192F]/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
                <span className="text-xs font-semibold text-orange-600 dark:text-orange-400">M-Pesa Integrated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ                                                           */}
      {/* ============================================================ */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How long does it take to build a custom software application?", a: "Timelines vary depending on complexity. A typical MVP takes 4–8 weeks, while larger enterprise systems may take 3–6 months. We work in agile sprints to deliver value quickly." },
              { q: "Do you only work with clients in Nairobi?", a: "We are based in Nairobi, Kenya, but we serve clients nationwide and remotely. We have successfully delivered projects for businesses in Mombasa, Kisumu, and other regions." },
              { q: "What technologies do you specialize in?", a: "Our primary stack includes Next.js, React, Node.js, Supabase, PostgreSQL, and Tailwind CSS. We also work with Django, Firebase, MongoDB, WordPress, Shopify, and cloud platforms like AWS and Vercel." },
              { q: "Can you help me with my university or postgraduate software project?", a: "Absolutely. We assist undergraduate, master's, and PhD students with custom software projects – from system design to full implementation. We ensure the work meets academic standards and can provide documentation support." },
              { q: "Do you build WordPress or Shopify websites?", a: "Yes. We develop custom WordPress themes and plugins, and build Shopify stores with custom integrations. We can also migrate existing sites to modern platforms." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 open:shadow-md transition">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-semibold text-gray-900 dark:text-white">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-orange-600 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-3 text-gray-600 dark:text-gray-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA                                                     */}
      {/* ============================================================ */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to build your next software project?</h2>
          <p className="mt-4 text-orange-100 max-w-xl mx-auto">Let&apos;s talk about your idea. We&apos;ll help you choose the right technology and deliver on time.</p>
          <div className="mt-8">
            <Link href="/quote" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-orange-600 bg-white hover:bg-gray-100 transition transform hover:scale-105">
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}