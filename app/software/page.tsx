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
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Nairobi – Custom Web, Mobile & CMS | Mgst (Maogast Softworks)",
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

      {/* ============================================================ */}
      {/* HERO — softened background + strong navy gradient            */}
      {/* ============================================================ */}
      <section className="relative bg-[#0A192F] text-white py-20 overflow-hidden">
        {/* Background image — soft, desaturated, blurred */}
        <div
          className="absolute inset-0 pointer-events-none bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/software/software-hero-city.webp)',
            opacity: 0.90,
            filter: 'blur(0px) saturate(0.70)',
          }}
          aria-hidden="true"
        />

        {/* Strong navy gradient — guarantees text readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,25,47,0.92) 0%, rgba(10,25,47,0.75) 50%, rgba(10,25,47,1) 100%)',
          }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Software Development in Nairobi
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
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

      {/* Why Choose Local Software Development in Nairobi */}
      <section className="py-16 bg-white dark:bg-gray-900">
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
              <p className="text-gray-600 dark:text-gray-400 mt-2">Same time zone, fast communication, and on‑site meetings when needed.</p>
            </div>
            <div className="text-center p-5">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Code className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Modern Tech Stack</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Next.js, React, Node.js, Supabase – built for performance and scale.</p>
            </div>
            <div className="text-center p-5">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Secure & Compliant</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Data protection and role‑based access for Kenyan enterprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
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

      {/* Technologies We Master */}
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
              {["Next.js", "React", "Angular", "Vue.js", "Svelte", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "React Native", "Expo", "Flutter", "Vite", "Redux Toolkit"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">Backend & Databases</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Node.js", "Django", "Laravel", "FastAPI", "Express.js", "NestJS", "Supabase", "Firebase", "PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "REST APIs", "GraphQL", "tRPC"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">CMS & E‑commerce</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["WordPress", "Shopify", "WooCommerce", "Contentful", "Strapi", "Sanity", "BigCommerce"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">DevOps & Cloud</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Docker", "Kubernetes", "GitHub Actions", "AWS (EC2, S3, RDS, Lambda)", "Google Cloud", "Microsoft Azure", "Vercel", "Netlify", "Firebase Hosting", "CI/CD Pipelines", "Terraform", "Nginx"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">AI & Modern Tooling</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["OpenAI API", "Claude API", "LangChain", "Hugging Face", "Cursor", "GitHub Copilot", "Claude Code", "ChatGPT", "Antigravity"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">Payments & Integrations</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["M-Pesa (Daraja API)", "Stripe", "PayPal", "Flutterwave", "Twilio", "SendGrid", "Resend", "WhatsApp Business API"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">Testing & Quality</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Jest", "Cypress", "Playwright", "Vitest", "ESLint", "Prettier", "Postman"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process — Split layout with design-to-code image */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
                  How We Work
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
                  Our Process
                </h2>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  From idea to launch — we keep you in the loop at every step.
                </p>
              </div>

              <div className="relative">
                <div
                  className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-500/20"
                  aria-hidden="true"
                />

                <div className="space-y-6">
                  {[
                    { step: "01", title: "Discovery", icon: <Search className="w-5 h-5" />, desc: "Understand your goals, users, and requirements." },
                    { step: "02", title: "Design & Prototype", icon: <Layout className="w-5 h-5" />, desc: "Wireframes and interactive prototypes for feedback." },
                    { step: "03", title: "Development", icon: <Code className="w-5 h-5" />, desc: "Agile sprints, regular updates, and quality assurance." },
                    { step: "04", title: "Launch & Support", icon: <Rocket className="w-5 h-5" />, desc: "Deployment, training, and ongoing maintenance." },
                  ].map((step) => (
                    <div key={step.step} className="relative flex items-start gap-5 group">
                      <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-baseline gap-3">
                          <span className="text-xs font-mono font-bold text-orange-500">
                            {step.step}
                          </span>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                            {step.title}
                          </h3>
                        </div>
                        <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square group">
                <Image
                  src="/images/software/design-to-code.webp"
  alt="From design wireframes to production code — Maogast Softworks development process"
  fill
  sizes="(max-width: 1024px) 100vw, 50vw"
  className="object-cover object-bottom group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/85 via-transparent to-transparent" />

                <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/95 dark:bg-[#0A192F]/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                  <span className="text-xs font-semibold text-gray-900 dark:text-white">
                    Design → Code
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-sm font-medium leading-relaxed">
                    Every project starts on paper — then becomes production-grade code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study — with M-Pesa integration image */}
      <section className="py-16 bg-white dark:bg-gray-900 border-t border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Recent Success in Nairobi
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              A quick look at what we&apos;ve delivered locally
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg grid md:grid-cols-2 gap-0">
            <div className="p-8 flex flex-col justify-center">
              <span className="text-sm font-mono text-orange-600 bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full self-start">
                Case Study
              </span>
              <h3 className="text-2xl font-bold mt-4 text-gray-900 dark:text-white">
                Inventory Management System
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                Built a real-time dashboard for a Nairobi retailer, reducing stockouts by 40% and cutting manual work by 6 hours/week. Integrated M-Pesa Paybill for instant payments.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Next.js", "Supabase", "Tailwind", "M-Pesa API", "Chart.js"].map((tech) => (
                  <span key={tech} className="text-xs bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2.5 py-1 rounded-full border border-gray-200 dark:border-gray-600">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Impact</div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">40% fewer stockouts</div>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[360px] overflow-hidden">
              <Image
                src="/images/software/mpesa-integration.webp"
                alt="M-Pesa Paybill integration for Maogast Softworks client project"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0A192F]/40 via-transparent to-transparent" />
              <div className="absolute top-4 right-4 bg-white/95 dark:bg-[#0A192F]/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
                <span className="text-xs font-semibold text-orange-600 dark:text-orange-400">
                  M-Pesa Integrated
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
                Our primary stack includes Next.js, React, Node.js, Supabase, PostgreSQL, and Tailwind CSS. We also work with Django, Firebase, MongoDB, WordPress, Shopify, and cloud platforms like AWS and Vercel.
              </p>
            </details>
            <details className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 open:shadow-md transition">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-semibold text-gray-900 dark:text-white">Can you help me with my university or postgraduate software project?</span>
                <ChevronDown className="w-5 h-5 text-orange-600 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Absolutely. We assist undergraduate, master&apos;s, and PhD students with custom software projects – from system design to full implementation. We ensure the work meets academic standards and can provide documentation support.
              </p>
            </details>
            <details className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 open:shadow-md transition">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-semibold text-gray-900 dark:text-white">Do you build WordPress or Shopify websites?</span>
                <ChevronDown className="w-5 h-5 text-orange-600 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Yes. We develop custom WordPress themes and plugins, and build Shopify stores with custom integrations. We can also migrate existing sites to modern platforms.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to build your next software project?</h2>
          <p className="mt-4 text-orange-100 max-w-xl mx-auto">
            Let&apos;s talk about your idea. We&apos;ll help you choose the right technology and deliver on time.
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