'use client';

import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { 
  Sparkles, Brain, Church, Image as ImageIcon, FileText, 
  Palette, Zap, Star, Send, Eye, Edit3, Layout, Gift, Printer, Camera,
  Store, Calendar, Megaphone, Users, Info, MapPin
} from 'lucide-react';

export default function AIDesignClient() {
  const portfolioItems = [
    { title: 'Church Poster Series', img: '/powered_design/church-poster.webp', category: 'Church Branding' },
    { title: 'Product Ad Mockup', img: '/powered_design/product-ad.webp', category: 'Social Media' },
    { title: 'Event Flyer', img: '/powered_design/event-flyer.webp', category: 'Poster Design' },
    { title: 'Prompt Art', img: '/powered_design/prompt-art.webp', category: 'AI Art' },
    { title: 'Prompt Art 2', img: '/powered_design/prompt-art1.webp', category: 'AI Art' },
    { title: 'Birthday Gallery Wish', img: '/powered_design/birthday1.webp', category: 'Personalized Design' },
    { title: 'Birthday Gallery Wish', img: '/powered_design/sylvester.webp', category: 'Personalized Design' },
    { title: 'Schools Branding', img: '/powered_design/training.webp', category: 'Education Branding' },
    // ✨ CINEMATIC & PHOTO MOUNTING IMAGES
    { title: 'Cinematic Portrait - Hoodie', img: '/images/cinematic/cinematic.jpg', category: 'Photo Mounting & Cinematic' },
    { title: 'Cinematic Portrait - Birthday', img: '/images/cinematic/cinematic1.jpg', category: 'Photo Mounting & Cinematic' },
    { title: 'Cinematic Portrait - Strength', img: '/images/cinematic/cinematic2.jpg', category: 'Photo Mounting & Cinematic' },
    { title: 'Cinematic Portrait - Woman', img: '/images/cinematic/cinematic3.jpg', category: 'Photo Mounting & Cinematic' },
  ];

  // Separate the cinematic images from the rest
  const generalPortfolio = portfolioItems.filter(item => item.category !== 'Photo Mounting & Cinematic');
  const cinematicPortfolio = portfolioItems.filter(item => item.category === 'Photo Mounting & Cinematic');

  const aiDesignJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI-Powered Design & Prompt Engineering",
    "serviceType": "Graphic Design and AI Consulting",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Maogast Softworks",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nairobi",
        "addressCountry": "KE"
      }
    },
    "description": "Professional design services utilizing AI prompt engineering for church branding, social media, and marketing materials."
  };

  const posterTypes = [
    { category: "Shop & Retail", description: "Promotional posters for supermarkets, boutiques, and electronics (e.g., the Powerhub example).", priceRange: "Ksh 500 – 800", icon: Store },
    { category: "Event & Concert", description: "High-impact posters for birthdays, concerts, weddings, and festivals.", priceRange: "Ksh 700 – 1,200", icon: Calendar },
    { category: "Advertisement & Marketing", description: "Eye-catching flyers, brochures, and digital ad visuals for campaigns.", priceRange: "Ksh 500 – 1,000", icon: Megaphone },
    { category: "Church & Religious", description: "Respectful and inspiring designs for conferences, retreats, and weekly services.", priceRange: "Ksh 500 – 900", icon: Church },
    { category: "Product & Restaurant", description: "Menu posters, product launch visuals, and restaurant branding.", priceRange: "Ksh 600 – 1,200", icon: Users },
    { category: "Custom & Premium", description: "Unique, large-format designs for special campaigns or high-end branding.", priceRange: "Ksh 1,000 – 2,500", icon: Star },
  ];

  return (
    <>
      <Script id="ai-design-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aiDesignJsonLd) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A192F] to-[#0F2A3F] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="aiGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#F97316" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#aiGrid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-400/30 rounded-full px-4 py-1 mb-6 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-orange-300">AI-Powered Creativity & Cinematic Art in Nairobi</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">AI-Powered Design & Cinematic Art</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Stunning posters, church branding, cinematic photo mounting, and product visuals – crafted with the precision of professional prompt engineering and artistic care.
          </p>
          <div className="mt-8 animate-fade-in-up animation-delay-400">
            <Link href="/quote" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition transform hover:scale-105 hover:shadow-lg">
              Request a Design
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Maogast for AI Design in Nairobi? */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Why Nairobi Businesses Trust Our AI Design
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We combine cutting‑edge AI tools with local creative insight – delivering visuals that connect with Kenyan audiences.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-5">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Nairobi‑Based Creative Team</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Fast turnaround, local support, and designs that speak to the Kenyan market.</p>
            </div>
            <div className="text-center p-5">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Brain className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Expert Prompt Engineering</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">We craft precise prompts for Midjourney, DALL·E, and Gemini – no generic AI output.</p>
            </div>
            <div className="text-center p-5">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Printer className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Print‑Ready & Framed</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">We don’t just design – we also print and mount your posters for immediate use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Design Expertise</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">From initial prompt to final pixel, we create visuals that resonate with your audience and reflect your brand identity.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Church className="w-8 h-8 text-orange-600" />, title: 'Church Branding', desc: 'Sermon series posters, event flyers, and complete visual identities for ministries in Kenya.' },
              { icon: <ImageIcon className="w-8 h-8 text-orange-600" />, title: 'Social Media Graphics', desc: 'Engaging carousels, story templates, and ad creatives optimized for conversion.' },
              { icon: <Palette className="w-8 h-8 text-orange-600" />, title: 'Poster & Flyer Design', desc: 'High‑resolution, print‑ready designs for community announcements and commercial events.' },
              { icon: <Brain className="w-8 h-8 text-orange-600" />, title: 'Prompt Engineering', desc: 'Expertly written prompts for Midjourney and DALL·E to generate high‑quality, consistent brand assets.' },
              { icon: <FileText className="w-8 h-8 text-orange-600" />, title: 'Print Layout & Editorial', desc: 'Professional brochures, newsletters, and book covers tailored for both print and digital use.' },
              { icon: <Zap className="w-8 h-8 text-orange-600" />, title: 'Rapid Prototyping', desc: 'Urgent design projects delivered within 24–48 hours without compromising on craftsmanship.' },
            ].map((service, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Poster & Flyer Design Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 rounded-full px-4 py-1 mb-4">
              <Palette className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Poster & Flyer Design</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Capture Attention with Stunning Posters</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">From shop promotions and event flyers to church services and marketing ads – we design it all.</p>
          </div>

          <div className="overflow-x-auto bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <table className="w-full text-left">
              <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                <tr><th className="px-6 py-4 font-semibold">Category</th><th className="px-6 py-4 font-semibold hidden md:table-cell">Description</th><th className="px-6 py-4 font-semibold text-right">Price (Ksh)</th></tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {posterTypes.map((poster, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600"><poster.icon className="w-5 h-5" /></div>
                      <span className="font-medium text-gray-900 dark:text-white">{poster.category}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400 hidden md:table-cell">{poster.description}</td>
                    <td className="px-6 py-4 text-right font-bold text-orange-600">{poster.priceRange}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">* Prices are estimates. Final cost depends on complexity, size, and printing requirements.</p>

          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">A Real Example: Your Powerhub Poster</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">We recently created this highly professional poster for an electronics shop in Nairobi. It showcases products clearly, includes contact information, and uses a city skyline background to evoke an urban, trustworthy feel. All for just <strong>Ksh 1200</strong>.</p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2"><Info className="w-5 h-5 text-orange-600 mt-1" /> <span><strong>Type:</strong> Retail Shop Poster (Electronics)</span></li>
                <li className="flex items-start gap-2"><Info className="w-5 h-5 text-orange-600 mt-1" /> <span><strong>Size:</strong> A2 / A1 Custom</span></li>
                <li className="flex items-start gap-2"><Info className="w-5 h-5 text-orange-600 mt-1" /> <span><strong>Price:</strong> Ksh 500 (for the design)</span></li>
                <li className="flex items-start gap-2"><Info className="w-5 h-5 text-orange-600 mt-1" /> <span><strong>Client:</strong> Powerhub (Electronics Hub – O.J)</span></li>
              </ul>
              <div className="mt-6"><Link href="/quote" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition">Request a Poster Design <Sparkles className="w-4 h-4" /></Link></div>
            </div>
            <div className="order-1 md:order-2 bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm">
              <Image src="/powered_design/powerhub-poster-example.jpg" alt="Powerhub Electronics Poster Example" width={600} height={800} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ✨ NEW SECTION: Photo Mounting & Cinematic Art Pricing */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 rounded-full px-4 py-1 mb-4">
              <Camera className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Photo Mounting & Cinematic Art</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Premium Framing & Mounting Sizes</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              We don’t just design stunning visuals – we print and mount them on high-quality materials so they are ready for display.
            </p>
          </div>

          <div className="overflow-x-auto bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <table className="w-full text-left">
              <thead className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200">
                <tr>
                  <th className="px-6 py-4 font-semibold">Print Size</th>
                  <th className="px-6 py-4 font-semibold text-right">Price (Ksh)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-white dark:hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">A2 Size</td>
                  <td className="px-6 py-4 text-right font-bold text-orange-600">Ksh 3,000</td>
                </tr>
                <tr className="hover:bg-white dark:hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">A3 Size</td>
                  <td className="px-6 py-4 text-right font-bold text-orange-600">Ksh 2,200</td>
                </tr>
                <tr className="hover:bg-white dark:hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">A4 Size</td>
                  <td className="px-6 py-4 text-right font-bold text-orange-600">Ksh 1,800</td>
                </tr>
                <tr className="hover:bg-white dark:hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">A5 Size</td>
                  <td className="px-6 py-4 text-right font-bold text-orange-600">Ksh 1,200</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">* Prices include the mounting/backing board and high-resolution printing. Additional costs apply for custom framing or lamination.</p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How We Create</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">A collaborative workflow combining human creativity with AI efficiency.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Share Your Vision', icon: <Send className="w-6 h-6" />, desc: 'Brief us on your brand goals and target audience.' },
              { step: '2', title: 'Craft Prompts', icon: <Edit3 className="w-6 h-6" />, desc: 'We engineer precise prompts to generate concepts.' },
              { step: '3', title: 'Refine & Approve', icon: <Eye className="w-6 h-6" />, desc: 'We fine-tune the art to match your exact standards.' },
              { step: '4', title: 'Deliver Files', icon: <Layout className="w-6 h-6" />, desc: 'Receive high-res, print-ready files ready for use.' },
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

      {/* 💡 UPDATED PORTFOLIO GALLERY SECTION */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Recent Work</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">A showcase of AI-enhanced visuals, custom graphic designs, and cinematic art.</p>
          </div>

          {/* General Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {generalPortfolio.map((item, idx) => (
              <div key={idx} className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:rotate-1" style={{ animationDelay: `${idx * 0.1}s` }}>
                {/* FIX: Added w-full, min-h-[150px], and bg-gray-100 to force height before aspect-ratio loads */}
                <div className="w-full aspect-square relative overflow-hidden bg-gray-100 dark:bg-gray-700 min-h-[150px]">
                  <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" />
                </div>
                <div className="p-4">
                  <p className="text-xs text-orange-600 uppercase font-semibold">{item.category}</p>
                  <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-1">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* ✨ SEPARATED CINEMATIC PORTFOLIO GRID */}
          <div className="border-t-2 border-orange-300 dark:border-orange-800 pt-10 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <Camera className="w-6 h-6 text-orange-600" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Photo Mounting & Cinematic Art</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cinematicPortfolio.map((item, idx) => (
                <div key={idx} className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:rotate-1" style={{ animationDelay: `${idx * 0.1}s` }}>
                  {/* FIX: Added w-full, min-h-[150px], and bg-gray-100 to force height before aspect-ratio loads */}
                  <div className="w-full aspect-[3/4] relative overflow-hidden bg-gray-100 dark:bg-gray-700 min-h-[150px]">
                    <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-orange-600 uppercase font-semibold">{item.category}</p>
                    <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-1">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/portfolio" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 transition transform hover:scale-105">View Full Portfolio</Link>
          </div>
        </div>
      </section>

      {/* Prompt Engineering Highlight */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-600/10 rounded-full px-3 py-1 mb-4"><Brain className="w-4 h-4 text-orange-600" /><span className="text-xs font-medium text-orange-700 dark:text-orange-400">Strategic Expertise</span></div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Expert Prompt Engineering</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Behind every great AI design is a well‑crafted prompt. We specialize in engineering inputs that produce consistent, brand‑aligned visuals – specifically optimized for marketing and community engagement.</p>
              <ul className="mt-6 space-y-2">
                {['Midjourney, DALL·E, and Gemini expertise','Custom prompt libraries for consistent branding','Workshops and training for organizational teams'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 group"><Star className="w-5 h-5 text-orange-600 mt-0.5 group-hover:scale-110 transition-transform" /><span className="text-gray-700 dark:text-gray-300">{item}</span></li>
                ))}
              </ul>
              <div className="mt-8"><Link href="/quote" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition transform hover:scale-105">Hire a Prompt Engineer</Link></div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition text-center border border-gray-100 dark:border-gray-700">
              <div className="text-5xl mb-4">✨🤖</div>
              <p className="text-gray-600 dark:text-gray-400 italic text-lg">&ldquo;We translate your abstract ideas into precise technical prompts to generate the exact aesthetic your brand requires.&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-gray-500">— Maogast Design Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Birthday & Event Keepsakes */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 rounded-full px-4 py-1 mb-4"><Gift className="w-4 h-4 text-orange-600" /><span className="text-sm font-medium text-orange-700 dark:text-orange-300">Celebrate Life’s Milestones</span></div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Birthday Wishes & Photo Keepsakes</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Turn memories into art. We design custom birthday posters, print them on premium materials, and mount photos for lasting gifts.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4"><Gift className="w-8 h-8 text-orange-600" /></div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Birthday Gallery Posters</h3>
              <p className="text-gray-600 dark:text-gray-400">We design personalized birthday posters – with poetic captions, photo collages, and elegant layouts. Perfect for family and friends.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4"><Printer className="w-8 h-8 text-orange-600" /></div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Premium Print Services</h3>
              <p className="text-gray-600 dark:text-gray-400">We print your custom designs on high‑quality paper, canvas, or fabric using our modern large‑format printer – ready for framing or gifting.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4"><Camera className="w-8 h-8 text-orange-600" /></div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Photo Mounting & Framing</h3>
              <p className="text-gray-600 dark:text-gray-400">Preserve your favorite memories with professional photo mounting – we attach photos to durable backings and offer framing options.</p>
            </div>
          </div>
          <div className="text-center mt-10"><Link href="/quote" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition transform hover:scale-105">Order a Birthday Poster <Gift className="w-4 h-4" /></Link></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Elevate your brand with AI‑powered visuals</h2>
          <p className="mt-4 text-orange-100 max-w-xl mx-auto">From church posters to product ad mockups – let’s build a visual identity that stands out in the Nairobi market.</p>
          <div className="mt-8"><Link href="/quote" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-orange-600 bg-white hover:bg-gray-100 transition transform hover:scale-105">Start a Design Project</Link></div>
        </div>
      </section>
    </>
  );
}