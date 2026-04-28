import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-[#0A192F] min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Subtle grid/circuit background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F97316" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side – text (unchanged) */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Build. Print. Create.<br />
              <span className="text-orange-500">— One Partner, All Solutions.</span>
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-lg">
              Custom software, premium printing, and AI‑powered design – under one roof.
            </p>
            <div className="mt-8">
              <Link href="/quote" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition">
                Request a Quote
              </Link>
            </div>
          </div>

          {/* Right side – larger animated images */}
          <div className="flex justify-center gap-8 md:justify-end">
            <div className="hero-icon bg-white/10 backdrop-blur-sm p-5 rounded-2xl animate-float-3d">
              <Image
                src="/images/code-icon.webp"
                alt="Software Development"
                width={120}
                height={120}
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            </div>
            <div className="hero-icon bg-white/10 backdrop-blur-sm p-5 rounded-2xl animate-float-3d-delayed">
              <Image
                src="/images/printing-icon.webp"
                alt="Printing & Branding"
                width={120}
                height={120}
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            </div>
            <div className="hero-icon bg-white/10 backdrop-blur-sm p-5 rounded-2xl animate-glow-pulse">
              <Image
                src="/images/ai-icon.webp"
                alt="AI Design"
                width={120}
                height={120}
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}