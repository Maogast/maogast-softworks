import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import {
  Cuboid,
  Layout,
  CheckCircle,
  ChevronDown,
  Rocket,
  Paintbrush,
  Pickaxe,
  Settings,
  Target,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3D Signage & Lettering in Nairobi | MGST~Works by Maogast Softworks",
  description:
    "Premium 3D signage, acrylic letters, and LED backlit wall logos in Nairobi, Kenya. Custom fabricated for corporate offices, hotels, restaurants, and retail stores.",
  alternates: {
    canonical: "https://maogastsoftworks.com/3d-signage",
  },
  openGraph: {
    title: "3D Signage & Lettering | MGST~Works by Maogast Softworks",
    description:
      "Elevate your physical brand with custom 3D acrylic, metallic, and LED signage. Crafted with precision in Nairobi, Kenya.",
    url: "https://maogastsoftworks.com/3d-signage",
    siteName: "Maogast Softworks",
    images: [
      {
        url: "https://maogastsoftworks.com/og-3d-signage.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Signage & Lettering | MGST~Works",
    description:
      "Custom 3D wall logos, storefront signs, and executive nameplates in Nairobi.",
    images: ["https://maogastsoftworks.com/og-3d-signage.jpg"],
  },
};

export default function ThreeDSignagePage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "3D Signage & Lettering Services",
    serviceType:
      "Custom 3D Signage, Acrylic Lettering, LED Backlit Signs, Wall Logos, Directional Signage",
    provider: {
      "@type": "LocalBusiness",
      name: "Maogast Softworks (MGST~Works)",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
    },
    areaServed: { "@type": "State", name: "Nairobi" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "3D Signage Solutions",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "3D Acrylic Letters & Logos" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "LED Backlit Signage" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Lobby Branding" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Storefront & Hotel Signs" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Directional & Wayfinding Signs" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Nameplates & Door Signs" } },
      ],
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://maogastsoftworks.com" },
      { "@type": "ListItem", position: 2, name: "3D Signage", item: "https://maogastsoftworks.com/3d-signage" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does custom 3D signage cost in Nairobi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pricing depends on the materials and size. Standard acrylic letters start from KSh 4,500 per letter, while premium metal and LED backlit signs start from KSh 6,000 per letter. We provide free on-site estimates.",
        },
      },
      {
        "@type": "Question",
        name: "What materials do you use for 3D letters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We specialize in premium acrylic, brushed aluminum, stainless steel, brass, wood, and LED illuminated materials. We always use high-grade, weather-resistant materials for durability.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to manufacture and install a 3D sign?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Average production time is 5 to 14 business days, depending on the complexity of the design. We provide a timeline guarantee and handle the full installation process safely.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle the installation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, absolutely. We offer full installation and mounting services. Our team ensures proper leveling, wiring (for LED signs), and secure fastening to wood, drywall, glass, or tile surfaces.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="3d-signage-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id="3d-signage-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="3d-signage-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A192F] to-[#0F2A3F] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="signGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#F97316" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#signGrid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Premium 3D Signage & Lettering
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            <span className="text-orange-500 font-semibold">MGST~Works</span> — Bringing your physical brand to life with custom-cut acrylic, metal, wood, and LED backlit letters in Nairobi, Kenya.
          </p>
          <div className="mt-8 animate-fade-in-up animation-delay-400">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition transform hover:scale-105 hover:shadow-lg"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose MGST~Works in Nairobi */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Why Choose MGST~Works
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From digital design to physical fabrication, we combine premium materials with expert craftsmanship for Nairobi businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-5">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Cuboid className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Expert Craftsmanship</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Precision laser-cutting and hand-finishing ensure flawless edges and polished 3D surfaces.</p>
            </div>
            <div className="text-center p-5">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Paintbrush className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Premium Materials</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">We source high-grade acrylic, brushed metals, and durable woods to ensure long-lasting beauty.</p>
            </div>
            <div className="text-center p-5">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">On-Site Installation</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Full delivery and mounting service included. We handle the wiring, leveling, and safety checks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - CORRECTED WITH UNIQUE IMAGES */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              What We Fabricate
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Custom-designed and manufactured in Nairobi for corporate offices, hospitality, and retail.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "3D Acrylic Letters & Logos",
                desc: "Sleek, glossy, or matte acrylic cutouts with 3D depth. Ideal for lobby walls, reception desks, and interior spaces.",
                image: "/images/mgst-works/3D Acrylic Letters.webp",
              },
              {
                title: "LED Backlit Signage",
                desc: "Stunning illuminated letters and logos with hidden LED glow. Perfect for making a bold statement at night.",
                image: "/images/mgst-works/LED Backlit Signage.webp",
              },
              {
                title: "Corporate Lobby Branding",
                desc: "Complete wall installations for company headquarters, law firms, banks, and corporate offices.",
                image: "/images/mgst-works/Corporate Lobby Branding.webp",
              },
              {
                title: "Storefront & Retail Signs",
                desc: "Eye-catching 3D names and logos for boutique shops, supermarkets, liquor stores, and franchises.",
                image: "/images/mgst-works/Storefront & Retail.webp",
              },
              {
                title: "Hotel & Restaurant Branding",
                desc: "Luxury lobby signs, restaurant name walls, and directional floor signs that impress guests.",
                image: "/images/mgst-works/Hotel & Restaurant.webp",
              },
              {
                title: "Office Nameplates & Door Signs",
                desc: "Premium CEO and executive office nameplates, room numbers, and directional signage for any workplace.",
                image: "/images/mgst-works/Office Nameplates.webp",
              },
              {
                title: "Wayfinding & Directional Signs",
                desc: "Clear, professional indoor and outdoor directional signs, arrows, and exit signs for large facilities.",
                image: "/images/mgst-works/Wayfinding & Directional.webp",
              },
              {
                title: "Custom Wall Art & Features",
                desc: "Full-wall 3D visual features, quotes, and architectural accents that turn plain walls into brand pillars.",
                image: "/images/mgst-works/Custom Wall Art & Features.webp",
              },
              {
                title: "Installation & Mounting",
                desc: "Professional mounting on wood, drywall, glass, or concrete. Complete with leveling and electrical wiring for LEDs.",
                image: "/images/mgst-works/Installation & Mounting.webp",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials We Master */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Materials We Master
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We choose only the best materials to ensure your 3D sign stands the test of time and looks stunning.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Premium Acrylic", 
              "Brushed Aluminum", 
              "Stainless Steel", 
              "Solid Wood", 
              "MDF / HDF Boards", 
              "LED Neon Flex", 
              "PVC Foam Board", 
              "Glass & Mirror Finish",
              "Gold & Silver Leaf"
            ].map((material) => (
              <span key={material} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors cursor-default">
                {material}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Process</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">From the first design sketch to the final wall mount – we handle everything.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Consult & Design", icon: <Layout className="w-6 h-6" />, desc: "On-site consultation, measurement, and 3D render previews of your brand." },
              { step: "2", title: "Material & Cutting", icon: <Pickaxe className="w-6 h-6" />, desc: "We select the best material and laser-cut every letter to perfection." },
              { step: "3", title: "Craft & Assemble", icon: <Settings className="w-6 h-6" />, desc: "Hand-finished assembly, LED wiring, and rigorous quality checks." },
              { step: "4", title: "Install & Illuminate", icon: <Rocket className="w-6 h-6" />, desc: "Professional delivery and on-site mounting, with lighting tested for brilliance." },
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

      {/* Case Study */}
      <section className="py-16 bg-white dark:bg-gray-900 border-t border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Success in Nairobi</h2>
            <p className="text-gray-600 dark:text-gray-400">A quick look at a premium 3D installation</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <span className="text-sm font-mono text-orange-600 bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full">Case Study</span>
              <h3 className="text-xl font-bold mt-2 text-gray-900 dark:text-white">Boutique Hotel Lobby Sign</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Fabricated and installed a luxury brushed silver 3D wall logo for a high-end hotel lobby in Westlands. Included concealed LED backlighting for a dramatic nighttime effect.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Brushed Aluminum", "Acrylic Backing", "LED Strips", "Drywall Mount"].map((tech) => (
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

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 open:shadow-md transition">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-semibold text-gray-900 dark:text-white">How much does custom 3D signage cost in Nairobi?</span>
                <ChevronDown className="w-5 h-5 text-orange-600 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Pricing depends on the materials and size. Standard acrylic letters start from <strong>KSh 4,500 per letter</strong>, while premium metal and LED backlit signs start from <strong>KSh 6,000 per letter</strong>. We provide free on-site estimates.
              </p>
            </details>
            <details className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 open:shadow-md transition">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-semibold text-gray-900 dark:text-white">What materials do you use for 3D letters?</span>
                <ChevronDown className="w-5 h-5 text-orange-600 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                We specialize in premium acrylic, brushed aluminum, stainless steel, brass, wood, and LED illuminated materials. We always use high-grade, weather-resistant materials for long-term durability.
              </p>
            </details>
            <details className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 open:shadow-md transition">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-semibold text-gray-900 dark:text-white">How long does it take to manufacture and install a 3D sign?</span>
                <ChevronDown className="w-5 h-5 text-orange-600 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Average production time is 5 to 14 business days, depending on the complexity of the design. We provide a timeline guarantee and handle the full installation process safely and professionally.
              </p>
            </details>
            <details className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 open:shadow-md transition">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-semibold text-gray-900 dark:text-white">Do you handle the installation?</span>
                <ChevronDown className="w-5 h-5 text-orange-600 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Yes, absolutely. We offer full installation and mounting services. Our team ensures proper leveling, wiring (for LED signs), and secure fastening to wood, drywall, glass, or tile surfaces.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to elevate your physical brand?</h2>
          <p className="mt-4 text-orange-100 max-w-xl mx-auto">
            Let’s create a stunning 3D masterpiece for your office, lobby, or storefront. We design, fabricate, and install.
          </p>
          <div className="mt-8">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-orange-600 bg-white hover:bg-gray-100 transition transform hover:scale-105"
            >
              Get a Free Consultation
            </Link>
          </div>
          <p className="mt-4 text-orange-200 text-sm italic">
            MGST~Works — An exclusive division of Maogast Softworks. Built on Code, Grounded in Faith.
          </p>
        </div>
      </section>
    </>
  );
}