'use client';
import Link from 'next/link';
import Image from 'next/image';
import { JSX, useState } from 'react';
import { usePathname } from 'next/navigation';

/* ---------- Inline SVG icons ---------- */
const NavIcon = ({ name }: { name: string }) => {
  const icons: Record<string, JSX.Element> = {
    Home: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    Software: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    Services: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    Products: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    Portfolio: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    About: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    Contact: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  };
  return icons[name] || null;
};

interface DropdownItem {
  name: string;
  href: string;
  description?: string;
}

/* ---------- NAV STRUCTURE — Software is TOP-LEVEL ---------- */
const navItems = [
  { name: 'Home', href: '/' },

  // ⭐ SOFTWARE — direct top-level link (always visible)
  { name: 'Software', href: '/software' },

  // Services dropdown — the remaining complementary services
  {
    name: 'Services',
    href: '#',
    dropdown: [
      { name: 'Printing & Branding', href: '/printing', description: 'Apparel, signage & uniforms' },
      { name: 'AI Design', href: '/ai-design', description: 'AI-powered creative work' },
      { name: 'Content Management', href: '/content-management', description: 'Strategy & publishing' },
      { name: 'Training & Webinars', href: '/training', description: 'Team upskilling' },
    ] as DropdownItem[],
  },

  // Products dropdown
  {
    name: 'Products',
    href: '/products',
    dropdown: [
      { name: 'All Products', href: '/products' },
      { name: 'Mugs', href: '/products/mugs' },
      { name: 'Flasks', href: '/products/flasks' },
      { name: 'Gift Sets', href: '/products/gift-sets' },
      { name: 'Awards', href: '/products/awards' },
    ] as DropdownItem[],
  },

  { name: 'Portfolio', href: '/portfolio' },

  // About dropdown
  {
    name: 'About',
    href: '/about',
    dropdown: [
      { name: 'Overview', href: '/about' },
      { name: 'Our Foundation', href: '/about/our-foundation' },
      { name: 'Blog', href: '/blog' },
    ] as DropdownItem[],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  const isGroupActive = (item: (typeof navItems)[number]) => {
    if (item.dropdown) {
      return item.dropdown.some((sub) => isActive(sub.href));
    }
    return isActive(item.href);
  };

  const closeMobileNav = () => {
    setMobileMenuOpen(false);
    setMobileExpanded(null);
  };

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-[#0A192F] text-white text-sm py-2 px-4 border-b border-gray-800">
        <div className="container mx-auto flex justify-end items-center">
          <a
            href="https://wa.me/254768564533?text=Hello%20Maogast%20Softworks%2C%20I%20have%20a%20project%20in%20mind."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition flex items-center gap-1"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.297.298-.495.099-.198.05-.371-.025-.52-.074-.149-.67-1.614-.918-2.21-.242-.58-.488-.5-.67-.51-.173-.01-.371-.01-.57-.01-.198 0-.52.074-.792.371-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.075 4.487.708.306 1.26.489 1.69.625.71.227 1.357.195 1.868.118.57-.086 1.758-.72 2.006-1.415.247-.695.247-1.29.173-1.414-.074-.124-.272-.198-.57-.347Z" />
            </svg>
            +254 768 564 533
          </a>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#0A192F]/95 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo3.jpg"
                alt="Maogast Softworks"
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
                style={{ width: 'auto', height: 'auto' }}
              />
              <span className="font-bold text-xl text-gray-900 dark:text-white">Maogast</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const active = isGroupActive(item);

                if (item.dropdown) {
                  const isOpen = openDropdown === item.name;
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                          active
                            ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30'
                            : 'text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                        }`}
                      >
                        <NavIcon name={item.name} />
                        <span>{item.name}</span>
                        <svg
                          className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        {active && (
                          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-orange-500 rounded-full" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="absolute top-full left-0 pt-2 w-64 z-50">
                          <div className="bg-white dark:bg-[#112240] rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 py-2 overflow-hidden">
                            {item.dropdown.map((sub) => {
                              const subActive = isActive(sub.href);
                              return (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  className={`block px-4 py-2.5 text-sm transition-colors ${
                                    subActive
                                      ? 'bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400'
                                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/60 hover:text-orange-600 dark:hover:text-orange-400'
                                  }`}
                                >
                                  <div className="font-medium">{sub.name}</div>
                                  {sub.description && (
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                      {sub.description}
                                    </div>
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                      active
                        ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30'
                        : 'text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    <NavIcon name={item.name} />
                    <span>{item.name}</span>
                    {active && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-orange-500 rounded-full" />
                    )}
                  </Link>
                );
              })}

              {/* CTA button */}
              <Link
                href="/contact"
                className="ml-3 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 transform hover:scale-105"
              >
                <NavIcon name="Contact" />
                Contact
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
          onClick={closeMobileNav}
        >
          <div
            className="fixed top-0 right-0 h-full w-full max-w-[85%] sm:max-w-sm bg-white dark:bg-[#0A192F] shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-200 dark:border-gray-800">
              <Link href="/" className="flex items-center gap-2" onClick={closeMobileNav}>
                <Image
                  src="/logo3.jpg"
                  alt="Maogast Softworks"
                  width={32}
                  height={32}
                  className="h-8 w-auto object-contain"
                  style={{ width: 'auto', height: 'auto' }}
                />
                <span className="font-bold text-xl text-gray-900 dark:text-white">Maogast</span>
              </Link>
              <button
                onClick={closeMobileNav}
                className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav */}
            <nav className="px-4 py-4 space-y-1">
              {navItems.map((item) => {
                const active = isGroupActive(item);

                if (item.dropdown) {
                  const isExpanded = mobileExpanded === item.name;
                  return (
                    <div key={item.name} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
                      <button
                        onClick={() => setMobileExpanded(isExpanded ? null : item.name)}
                        className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                          active
                            ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30'
                            : 'text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <NavIcon name={item.name} />
                          <span>{item.name}</span>
                        </div>
                        <svg
                          className={`w-3 h-3 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isExpanded && (
                        <div className="pl-11 pb-3 space-y-1">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={closeMobileNav}
                              className="block px-3 py-2 text-sm rounded-lg text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMobileNav}
                    className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                      active
                        ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30'
                        : 'text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400'
                    }`}
                  >
                    <NavIcon name={item.name} />
                    {item.name}
                  </Link>
                );
              })}

              {/* CTA */}
              <div className="pt-3">
                <Link
                  href="/contact"
                  onClick={closeMobileNav}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold transition"
                >
                  <NavIcon name="Contact" />
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}