'use client';
import Link from 'next/link';
import Image from 'next/image';
import { JSX, useState } from 'react';
import { usePathname } from 'next/navigation';

// SVG icons for each nav item
const NavIcon = ({ name }: { name: string }) => {
  const icons: Record<string, JSX.Element> = {
    Home: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    About: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    Software: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    Printing: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2z" />
      </svg>
    ),
    'AI Design': (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    Training: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    Portfolio: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const pathname = usePathname();

  const aboutItems = [
    { name: 'Overview', href: '/about' },
    { name: 'Our Foundation', href: '/about/our-foundation' },
  ];

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about', hasDropdown: true },
    { name: 'Software', href: '/software' },
    { name: 'Printing', href: '/printing' },
    { name: 'AI Design', href: '/ai-design' },
    { name: 'Training', href: '/training' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  // Check if the current path is active for a given link
  const isActive = (path: string) => {
    // Exact match OR for About, if path starts with /about
    if (pathname === path) return true;
    if (path === '/about' && pathname?.startsWith('/about/')) return true;
    return false;
  };

  return (
    <>
      {/* Top contact bar – only WhatsApp now */}
      <div className="bg-[#0A192F] text-white text-sm py-2 px-4 border-b border-gray-800">
        <div className="container mx-auto flex justify-end items-center">
          <a
            href="https://wa.me/254768564533?text=Hello%20Maogast%20Softworks%2C%20I%20have%20a%20project%20in%20mind.%20Could%20we%20discuss%20further%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition flex items-center gap-1"
          >
            {/* WhatsApp icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.297.298-.495.099-.198.05-.371-.025-.52-.074-.149-.67-1.614-.918-2.21-.242-.58-.488-.5-.67-.51-.173-.01-.371-.01-.57-.01-.198 0-.52.074-.792.371-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.075 4.487.708.306 1.26.489 1.69.625.71.227 1.357.195 1.868.118.57-.086 1.758-.72 2.006-1.415.247-.695.247-1.29.173-1.414-.074-.124-.272-.198-.57-.347Z" fill="currentColor"/>
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.98.579 3.827 1.585 5.42L2.5 21.5l4.08-1.085A9.97 9.97 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm0 18c-1.766 0-3.4-.555-4.764-1.5l-.68-.405-2.52.651.674-2.45-.415-.68C3.57 14.59 3 13.34 3 12c0-4.963 4.037-9 9-9s9 4.037 9 9-4.037 9-9 9Z" fill="currentColor"/>
            </svg>
            +254 768 564 533
          </a>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#0A192F]/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo3.png" alt="Maogast Softworks" width={40} height={40} style={{ width: 'auto', height: 'auto' }} />
              <span className="font-bold text-xl text-gray-900 dark:text-white">Maogast</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navItems.map((item) => {
                const active = isActive(item.href);
                
                // Special handling for About dropdown
                if (item.hasDropdown) {
                  return (
                    <div key={item.name} className="relative">
                      <button
                        onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                        onBlur={() => setTimeout(() => setAboutDropdownOpen(false), 200)}
                        className={`
                          relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                          flex items-center gap-2 cursor-pointer
                          ${active
                            ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30'
                            : 'text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                          }
                        `}
                      >
                        <NavIcon name={item.name} />
                        <span>{item.name}</span>
                        <svg className={`w-3 h-3 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        {active && (
                          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-orange-500 rounded-full" />
                        )}
                      </button>

                      {aboutDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-[#112240] rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 py-1 z-50">
                          {aboutItems.map((subItem) => {
                            const subActive = isActive(subItem.href);
                            return (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => setAboutDropdownOpen(false)}
                                className={`
                                  block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-orange-600 dark:hover:text-orange-400
                                  ${subActive ? 'bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400' : ''}
                                `}
                              >
                                {subItem.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                      flex items-center gap-2
                      ${active
                        ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30'
                        : 'text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                      }
                    `}
                  >
                    <NavIcon name={item.name} />
                    <span>{item.name}</span>
                    {active && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-orange-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800 space-y-1">
              {navItems.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div key={item.name}>
                      <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200">
                        <NavIcon name={item.name} />
                        {item.name}
                      </div>
                      <div className="pl-10 space-y-1">
                        {aboutItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-lg"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition
                      ${active
                        ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30'
                        : 'text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                      }
                    `}
                  >
                    <NavIcon name={item.name} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          )}
        </div>
      </header>
    </>
  );
}