import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Mgst – Software, Printing & AI Design in Nairobi',
  description: 'Contact Mgst (Maogast Softworks) at info@maogastsoftworks.com or +254 768 564 533. Visit our office in Kasarani, Nairobi, Kenya. We offer custom software, printing, AI design, and content management.',
  alternates: {
    canonical: 'https://maogastsoftworks.com/contact',
  },
  openGraph: {
    title: 'Contact Mgst (Maogast Softworks) | Nairobi, Kenya',
    description: 'Reach out for software development, printing, branding, AI design, or training inquiries. We are located in Kasarani, Nairobi, Kenya.',
    url: 'https://maogastsoftworks.com/contact',
    siteName: 'Maogast Softworks (MGST~Works)',
    images: [{ url: 'https://maogastsoftworks.com/og-contact.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Mgst Softworks',
    description: 'Get in touch with our team in Nairobi, Kenya for all your software and branding needs.',
    images: ['https://maogastsoftworks.com/og-contact.jpg'],
  },
};

export default function ContactPage() {
  // Breadcrumb schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://maogastsoftworks.com" },
      { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://maogastsoftworks.com/contact" }
    ]
  };

  return (
    <>
      <Script id="contact-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero Section – enhanced H1 */}
      <section className="bg-gradient-to-br from-[#0A192F] to-[#0F2A3F] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contactGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#F97316" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contactGrid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Contact Our Nairobi Office
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Ready to start a project? Have a question? We’d love to hear from you.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <Phone className="w-5 h-5 text-orange-600 mt-0.5 group-hover:scale-110 transition" />
                  <div>
                    <p className="font-medium text-gray-700 dark:text-gray-300">Phone</p>
                    <a href="tel:+254768564533" className="text-gray-600 dark:text-gray-400 hover:text-orange-600">
                      +254 768 564 533
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <Mail className="w-5 h-5 text-orange-600 mt-0.5 group-hover:scale-110 transition" />
                  <div>
                    <p className="font-medium text-gray-700 dark:text-gray-300">Email</p>
                    <a
                      href="mailto:info@maogastsoftworks.com?subject=Project Inquiry - Maogast Softworks&body=Greetings Maogast Softworks,%0A%0AMy Name: [Enter Your Name]%0AService I need: [e.g., Software Development, Printing, AI Design, Training]%0ADetails of my request: [Describe your needs]%0ABudget (Optional): [Enter budget]%0A%0AThank you."
                      className="text-gray-600 dark:text-gray-400 hover:text-orange-600"
                    >
                      info@maogastsoftworks.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <MapPin className="w-5 h-5 text-orange-600 mt-0.5 group-hover:scale-110 transition" />
                  <div>
                    <p className="font-medium text-gray-700 dark:text-gray-300">Location</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Kasarani Sunton 9th Street, Nairobi, Kenya
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <Clock className="w-5 h-5 text-orange-600 mt-0.5 group-hover:scale-110 transition" />
                  <div>
                    <p className="font-medium text-gray-700 dark:text-gray-300">Office Hours</p>
                    <p className="text-gray-600 dark:text-gray-400">Sun – Fri: 8am – 5pm</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">Quick Chat</p>
                <a
                  href="https://wa.me/254768564533?text=Greetings Maogast Softworks, I would like to inquire about your services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  WhatsApp Us →
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Follow Us</h3>
              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href="#"
                  className="w-10 h-10 bg-orange-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-orange-600 hover:bg-orange-600 hover:text-white transition"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/share/1CXxFEVetp/"
                  className="w-10 h-10 bg-orange-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-orange-600 hover:bg-orange-600 hover:text-white transition"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/MaogastSoftworks"
                  className="w-10 h-10 bg-orange-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-orange-600 hover:bg-orange-600 hover:text-white transition"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/maogastsoftworks?igsh=MWNsODU2aG8zcjRlYg=="
                  className="w-10 h-10 bg-orange-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-orange-600 hover:bg-orange-600 hover:text-white transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://vt.tiktok.com/ZS9KyRwBw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-orange-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-orange-600 hover:bg-orange-600 hover:text-white transition"
                  aria-label="TikTok"
                >
                  <FaTiktok className="w-5 h-5" />
                </a>
                <a
                  href="https://whatsapp.com/channel/0029VbD0Mmp60eBnYmHz4p0f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-orange-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-orange-600 hover:bg-orange-600 hover:text-white transition"
                  aria-label="WhatsApp Channel"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>

      {/* Map Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Visit Our Office</h2>
          <div className="max-w-3xl mx-auto w-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=Kasarani+Sunton+9th+Street+Nairobi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-64 md:h-80 rounded-xl"
            ></iframe>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Kasarani Sunton 9th Street, Nairobi, Kenya
          </p>
        </div>
      </section>
    </>
  );
}