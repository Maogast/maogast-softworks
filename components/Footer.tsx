import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold text-lg">Maogast Softworks</h3>
            <p className="mt-2 text-sm">Software, Printing & AI Design</p>
          </div>
          <div>
            <h4 className="font-medium text-white">Services</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link href="/software" className="hover:text-orange-400">Software</Link></li>
              <li><Link href="/printing" className="hover:text-orange-400">Printing</Link></li>
              <li><Link href="/ai-design" className="hover:text-orange-400">AI Design</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white">Company</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link href="/training" className="hover:text-orange-400">Training</Link></li>
              <li><Link href="/about" className="hover:text-orange-400">About</Link></li>
              <li><Link href="/portfolio" className="hover:text-orange-400">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-orange-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white">Contact</h4>
            <p className="mt-2 text-sm">📞 +254 768 564 533</p>
            {/* UPDATED: Email is now clickable with auto-fill */}
            <a 
              href="mailto:info@maogastsoftworks.com?subject=Project Inquiry - Maogast Softworks&body=Greetings Maogast Softworks,%0A%0AMy Name: [Enter Your Name]%0AService I need: [e.g., Software Development, Printing, AI Design, Training]%0ADetails of my request: [Describe your needs]%0ABudget (Optional): [Enter budget]%0A%0AThank you."
              className="text-sm hover:text-orange-400 transition inline-block mt-1"
            >
              ✉️ info@maogastsoftworks.com
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Maogast Softworks Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}