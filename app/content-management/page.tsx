import Link from "next/link";
import Script from "next/script";
import {
  Globe,
  PenTool,
  Calendar,
  Video,
  BarChart,
  Users,
  CheckCircle,
  Search,
  Layout,
  Rocket,
  ChevronDown,
  MapPin,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Management Services – Social Media & Website | Maogast Softworks",
  description:
    "Professional content management for Kenyan businesses. We handle your website updates, social media posts, and digital strategy so you can focus on running your business.",
  alternates: {
    canonical: "https://maogastsoftworks.com/content-management",
  },
  openGraph: {
    title: "Content Management Services in Nairobi | Maogast Softworks",
    description:
      "Scale your online presence with expert content management. Daily social media posts, website updates, and content strategy tailored for businesses, institutions, and startups.",
    url: "https://maogastsoftworks.com/content-management",
    siteName: "Maogast Softworks",
    images: [
      {
        url: "https://maogastsoftworks.com/og-content-management.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Management | Maogast Softworks Nairobi",
    description:
      "Expert social media & website content management for Kenyan businesses.",
    images: ["https://maogastsoftworks.com/og-content-management.jpg"],
  },
};

export default function ContentManagementPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Content Management Services",
    serviceType: "Website Management, Social Media Management, Content Strategy",
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
      name: "Content Management Solutions",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Content Management" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Content Management" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content Strategy & Calendar" } },
      ],
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://maogastsoftworks.com" },
      { "@type": "ListItem", position: 2, name: "Content Management", item: "https://maogastsoftworks.com/content-management" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is included in content management?",
        acceptedAnswer: { "@type": "Answer", text: "We manage your website updates, blog posts, social media content (daily posts, stories, replies), and provide a content calendar to ensure consistent engagement." },
      },
      {
        "@type": "Question",
        name: "Do you handle social media for my business?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. We can manage your Facebook, Instagram, TikTok, LinkedIn, and Twitter accounts – from posting content to engaging with your audience." },
      },
      {
        "@type": "Question",
        name: "How much does content management cost in Nairobi?",
        acceptedAnswer: { "@type": "Answer", text: "Our plans start from KSh 10,000 per month for small businesses. We offer custom packages for institutions and larger enterprises. Contact us for a quote." },
      },
      {
        "@type": "Question",
        name: "Can you help me update my existing website content?",
        acceptedAnswer: { "@type": "Answer", text: "Absolutely. We can audit your current content, update product listings, fix outdated information, and keep your site fresh for visitors and search engines." },
      },
    ],
  };

  return (
    <>
      <Script id="content-management-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Script id="content-management-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Script id="content-management-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A192F] to-[#0F2A3F] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contentGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#F97316" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contentGrid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Content Management in Nairobi
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            We manage your online presence so you can run your business. Website updates, social media content, and digital strategy – all in one place.
          </p>
          <div className="mt-8 animate-fade-in-up animation-delay-400">
            <Link href="/quote" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition transform hover:scale-105 hover:shadow-lg">
              Get a Content Plan
            </Link>
          </div>
        </div>
      </section>

      {/* NEW: Why Choose Maogast for Content Management in Nairobi? */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Why Nairobi Businesses Trust Us with Their Content
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Consistent, high‑quality content builds trust and drives growth. We deliver both – with local expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-5">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Local Market Understanding</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">We know the Kenyan audience – culturally relevant content that truly engages.</p>
            </div>
            <div className="text-center p-5">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Multi‑Platform Expertise</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">From Facebook to TikTok, we manage all your channels seamlessly.</p>
            </div>
            <div className="text-center p-5">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <BarChart className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Data‑Driven Strategy</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">We track what works, then double down – monthly analytics included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (unchanged) */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              What We Manage
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              End‑to‑end content solutions for businesses, institutions, and startups.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8 text-orange-600" />,
                title: "Website Content Management",
                desc: "Keep your website fresh and accurate. We update product listings, service pages, blog posts, and ensure all information is current.",
              },
              {
                icon: <Users className="w-8 h-8 text-orange-600" />,
                title: "Social Media Management",
                desc: "Daily posts, stories, replies, and engagement across Facebook, Instagram, TikTok, and LinkedIn. Your brand stays active and visible.",
              },
              {
                icon: <PenTool className="w-8 h-8 text-orange-600" />,
                title: "Content Strategy & Planning",
                desc: "We build a monthly content calendar tailored to your business goals, audience, and key seasons.",
              },
              {
                icon: <Calendar className="w-8 h-8 text-orange-600" />,
                title: "Blog & Article Writing",
                desc: "Professional, SEO-friendly articles and blog posts that attract readers and improve your search engine ranking.",
              },
              {
                icon: <Video className="w-8 h-8 text-orange-600" />,
                title: "Visual Content Creation",
                desc: "Custom graphics, social media banners, and short video content designed to stop the scroll and engage your audience.",
              },
              {
                icon: <BarChart className="w-8 h-8 text-orange-600" />,
                title: "Analytics & Reporting",
                desc: "We track what works. Monthly reports on engagement, reach, and website traffic so you can see real results.",
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

      {/* Tools & Platforms (unchanged) */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Tools We Use
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We leverage the best content platforms to keep your brand consistent and impactful.
          </p>
          <div className="mt-8">
            <div className="flex flex-wrap justify-center gap-3">
              {["WordPress", "Contentful", "Wix", "SquareSpace", "Shopify", "Meta Business Suite", "Buffer", "Canva", "CapCut", "Google Analytics", "SEMrush", "Airtable"].map((tool) => (
                <span key={tool} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors cursor-default">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process (unchanged) */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Process</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">From planning to execution – we keep your content flowing.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Audit & Strategy", icon: <Search className="w-6 h-6" />, desc: "We review your current content and build a strategy around your goals." },
              { step: "2", title: "Calendar & Planning", icon: <Layout className="w-6 h-6" />, desc: "We create a monthly content calendar with topics, formats, and posting schedule." },
              { step: "3", title: "Creation & Scheduling", icon: <PenTool className="w-6 h-6" />, desc: "We write, design, and schedule your content across all platforms." },
              { step: "4", title: "Monitor & Optimize", icon: <Rocket className="w-6 h-6" />, desc: "We track engagement and adjust strategy to deliver better results month after month." },
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

      {/* Case Study (unchanged) */}
      <section className="py-16 bg-white dark:bg-gray-900 border-t border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Success in Content Management</h2>
            <p className="text-gray-600 dark:text-gray-400">How we helped a local restaurant chain grow their online audience</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <span className="text-sm font-mono text-orange-600 bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full">Case Study</span>
              <h3 className="text-xl font-bold mt-2 text-gray-900 dark:text-white">Social Media & Website Overhaul</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Managed daily content for a Nairobi restaurant chain, growing Instagram followers by 310% and driving a 45% increase in online orders through consistent posting and engagement.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Meta Business Suite", "Canva", "Google Analytics", "Airtable"].map((tool) => (
                  <span key={tool} className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">{tool}</span>
                ))}
              </div>
            </div>
            <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>
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
                <span className="font-semibold text-gray-900 dark:text-white">What is included in content management?</span>
                <ChevronDown className="w-5 h-5 text-orange-600 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                We manage your website updates, blog posts, social media content (daily posts, stories, replies), and provide a content calendar to ensure consistent engagement.
              </p>
            </details>
            <details className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 open:shadow-md transition">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-semibold text-gray-900 dark:text-white">Do you handle social media for my business?</span>
                <ChevronDown className="w-5 h-5 text-orange-600 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Yes. We can manage your Facebook, Instagram, TikTok, LinkedIn, and Twitter accounts – from posting content to engaging with your audience.
              </p>
            </details>
            <details className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 open:shadow-md transition">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-semibold text-gray-900 dark:text-white">How much does content management cost in Nairobi?</span>
                <ChevronDown className="w-5 h-5 text-orange-600 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Our plans start from KSh 10,000 per month for small businesses. We offer custom packages for institutions and larger enterprises. Contact us for a quote.
              </p>
            </details>
            <details className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 open:shadow-md transition">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-semibold text-gray-900 dark:text-white">Can you help me update my existing website content?</span>
                <ChevronDown className="w-5 h-5 text-orange-600 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Absolutely. We can audit your current content, update product listings, fix outdated information, and keep your site fresh for visitors and search engines.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA (unchanged) */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to grow your audience?</h2>
          <p className="mt-4 text-orange-100 max-w-xl mx-auto">
            Let’s build a content strategy that keeps your brand visible, engaged, and growing.
          </p>
          <div className="mt-8">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-orange-600 bg-white hover:bg-gray-100 transition transform hover:scale-105"
            >
              Start Your Content Plan
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}