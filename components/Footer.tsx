import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import FooterQuoteRotator from './FooterQuoteRotator';

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1: Brand & Social */}
          <div>
            <h3 className="text-white font-semibold text-lg">Maogast Softworks</h3>
            <p className="mt-2 text-sm">Software, Printing & AI Design</p>
            <p className="mt-1 text-xs text-orange-400/80 flex items-center gap-1">
              <span className="text-orange-500">✦</span> Built on Code, Grounded in Faith
            </p>
            <div className="mt-4 flex gap-4 flex-wrap">
              <a href="https://wa.me/254768564533" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition">
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a href="https://vt.tiktok.com/ZS9KyRwBw/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition">
                <FaTiktok className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/share/1CXxFEVetp/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/MaogastSoftwork" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/maogastsoftworks" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-medium text-white">Services</h4>
            <ul className="grid grid-cols-2 gap-x-4 mt-2 text-sm">
              <li><Link href="/software" className="hover:text-orange-400">Software</Link></li>
              <li><Link href="/printing" className="hover:text-orange-400">Printing</Link></li>
              <li><Link href="/ai-design" className="hover:text-orange-400">AI Design</Link></li>
              <li><Link href="/content-management" className="hover:text-orange-400">Content Management</Link></li>
              <li><Link href="/products" className="hover:text-orange-400">Products</Link></li>
              <li><Link href="/training" className="hover:text-orange-400">Training</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-medium text-white">Company</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link href="/about" className="hover:text-orange-400">About</Link></li>
              <li><Link href="/about/our-foundation" className="hover:text-orange-400">Our Foundation</Link></li>
              <li><Link href="/portfolio" className="hover:text-orange-400">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-orange-400">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-orange-400">Blog</Link></li>
              <li><Link href="/terms" className="hover:text-orange-400">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h4 className="font-medium text-white">Contact</h4>
            <p className="mt-2 text-sm">📞 +254 768 564 533</p>
            <a 
              href="mailto:info@maogastsoftworks.com?subject=Project Inquiry - Maogast Softworks&body=Greetings Maogast Softworks,%0A%0AMy Name: [Enter Your Name]%0AService I need: [e.g., Software Development, Printing, AI Design, Training]%0ADetails of my request: [Describe your needs]%0ABudget (Optional): [Enter budget]%0A%0AThank you."
              className="text-sm hover:text-orange-400 transition inline-block mt-1"
            >
              ✉️ info@maogastsoftworks.com
            </a>
            <p className="mt-2 text-sm">📍 Nairobi, Kenya</p>
          </div>
        </div>

        {/* ✨ Rotating Quote Component */}
        <FooterQuoteRotator />

        {/* ✨ Bottom Row: Copyright Left, Image Right (BEAUTIFULLY DISPLAYED) */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 mt-2 pt-4 text-sm">
          <div className="text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Maogast Softworks Limited. All rights reserved.
          </div>
          {/* Increased size slightly, added a subtle branded border, and changed to object-cover for a polished look */}
          <div className="relative w-16 md:w-20 h-auto shadow-md rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm p-0.5 border border-orange-500/30">
            <Image 
              src="/images/footer/logophoto.jpg" 
              alt="Mgst (Maogast Softworks) 3D Signage Installation" 
              width={200} 
              height={300}
              className="w-full h-auto object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}