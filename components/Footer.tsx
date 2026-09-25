'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa';
import { ChevronDown, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import FooterQuoteRotator from './FooterQuoteRotator';

type SectionKey = 'services' | 'company' | 'contact';

/* ---------- Link Data ---------- */
const services = [
  { label: 'Software', href: '/software' },
  { label: 'Printing & Branding', href: '/printing' },
  { label: '3D Signage', href: '/3d-signage' },       // ✅ NEW
  { label: 'AI Design', href: '/ai-design' },
  { label: 'Content Management', href: '/content-management' },
  { label: 'Training & Webinars', href: '/training' },
  { label: 'Products', href: '/products' },
];

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Foundation', href: '/about/our-foundation' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Terms & Conditions', href: '/terms' },
];

const socials = [
  { href: 'https://wa.me/254768564533', label: 'WhatsApp', Icon: FaWhatsapp },
  { href: 'https://vt.tiktok.com/ZS9KyRwBw/', label: 'TikTok', Icon: FaTiktok },
  { href: 'https://www.facebook.com/share/1CXxFEVetp/', label: 'Facebook', Icon: FaFacebook },
  { href: 'https://x.com/MaogastSoftwork', label: 'Twitter / X', Icon: FaTwitter },
  { href: 'https://www.instagram.com/maogastsoftworks', label: 'Instagram', Icon: FaInstagram },
];

export default function Footer() {
  /* ✅ Services open by default so users see them immediately */
  const [open, setOpen] = useState<Record<SectionKey, boolean>>({
    services: true,
    company: false,
    contact: false,
  });

  const toggle = (key: SectionKey) =>
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A192F] text-gray-300">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* ROW 1 — Brand + Status + Socials                           */}
        {/* ========================================================= */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-5 border-b border-gray-800">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo3.jpg"
              alt="Maogast Softworks"
              width={36}
              height={36}
              className="h-9 w-9 object-contain rounded-md group-hover:scale-105 transition-transform"
              style={{ width: 'auto', height: 'auto' }}
            />
            <div>
              <div className="font-bold text-white text-base leading-tight">
                Maogast Softworks
              </div>
              <div className="text-[11px] text-gray-400 leading-tight">
                Software · Printing · AI Design
              </div>
            </div>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
            <div
              className="flex items-center gap-2 bg-green-500/10 border border-green-500/25 rounded-full px-3 py-1"
              title="All services online"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full w-2 h-2 bg-green-500" />
              </span>
              <span className="text-[11px] font-medium text-green-400 whitespace-nowrap">
                All systems operational
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-orange-600/90 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* ROW 2 — Collapsible sections with preview when closed      */}
        {/* ========================================================= */}
        <div className="grid md:grid-cols-3 gap-0 md:gap-8 divide-y md:divide-y-0 divide-gray-800">
          {/* SERVICES — open by default */}
          <FooterSection
            title="Services"
            isOpen={open.services}
            onToggle={() => toggle('services')}
            preview={services.slice(0, 4).map((s) => s.label).join(' · ')}
          >
            <ul className="space-y-2 pb-4 md:pb-0">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-orange-500/60 text-[10px] group-hover:translate-x-0.5 transition-transform">
                      ▸
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* COMPANY */}
          <FooterSection
            title="Company"
            isOpen={open.company}
            onToggle={() => toggle('company')}
            preview={company.slice(0, 4).map((c) => c.label).join(' · ')}
          >
            <ul className="space-y-2 pb-4 md:pb-0">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-orange-500/60 text-[10px] group-hover:translate-x-0.5 transition-transform">
                      ▸
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* GET IN TOUCH */}
          <FooterSection
            title="Get in Touch"
            isOpen={open.contact}
            onToggle={() => toggle('contact')}
            preview="+254 768 564 533 · info@maogastsoftworks.com"
          >
            <ul className="space-y-3 pb-4 md:pb-0">
              <li>
                <a
                  href="https://wa.me/254768564533"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-orange-500/80 group-hover:text-orange-400" />
                  +254 768 564 533
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@maogastsoftworks.com"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors group"
                >
                  <Mail className="w-4 h-4 text-orange-500/80 group-hover:text-orange-400" />
                  info@maogastsoftworks.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-orange-500/80 mt-0.5 shrink-0" />
                <span>
                  Nairobi, Kenya
                  <br />
                  <span className="text-xs text-gray-500">
                    Serving clients worldwide 🌍
                  </span>
                </span>
              </li>
            </ul>
          </FooterSection>
        </div>

        {/* ========================================================= */}
        {/* ROW 3 — Rotating Scripture                                 */}
        {/* ========================================================= */}
        <FooterQuoteRotator />

        {/* ========================================================= */}
        {/* ROW 4 — Bottom bar                                         */}
        {/* ========================================================= */}
        <div className="border-t border-gray-800 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-gray-500 text-center md:text-left">
            © {year} Maogast Softworks Limited. All rights reserved.
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-1.5 text-gray-500 hover:text-orange-400 transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================ */
/* Collapsible section — shows preview when closed              */
/* ============================================================ */
function FooterSection({
  title,
  isOpen,
  onToggle,
  preview,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  preview?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-3 md:py-6">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
          <span className="w-1 h-3 bg-orange-500 rounded-full" />
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-gray-500 group-hover:text-orange-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-orange-400' : ''
          }`}
        />
      </button>

      {/* Preview hint when collapsed */}
      {!isOpen && preview && (
        <p className="mt-2 text-xs text-gray-500 leading-relaxed line-clamp-2">
          {preview} <span className="text-orange-400/70">…</span>
        </p>
      )}

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
}