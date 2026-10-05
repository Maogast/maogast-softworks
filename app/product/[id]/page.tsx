import { products } from '@/data/products';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ChevronLeft, ChevronRight, Tag, Package, Printer } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import type { Metadata } from 'next';
import WatermarkImage from '@/components/WatermarkImage';

type Props = { params: Promise<{ id: string }> };

const categoryMap: Record<string, string> = {
  mugs: 'Mugs',
  flasks: 'Flasks & Tumblers',
  'gift-sets': 'Gift Sets',
  awards: 'Awards',
};

/* ============================================================ */
/* Metadata — dynamic per product                                */
/* ============================================================ */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.id);

  if (!product) return { title: 'Product Not Found' };

  const baseUrl = 'https://maogastsoftworks.com';
  const priceStr = `Ksh ${product.price.toLocaleString()}`;

  return {
    title: `${product.name} | ${priceStr} | Mgst (Maogast Softworks)`,
    description: product.description,
    openGraph: {
      title: `${product.name} - ${priceStr} - Mgst Softworks`,
      description: product.description,
      images: [{ url: `${baseUrl}${product.image}`, width: 1200, height: 630 }],
      siteName: 'Maogast Softworks (MGST~Works)',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Mgst Softworks`,
      description: product.description,
      images: [`${baseUrl}${product.image}`],
    },
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

/* ============================================================ */
/* Page                                                          */
/* ============================================================ */
export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.id);

  if (!product) notFound();

  /* -------- Compute prev/next WITHIN same category -------- */
  const sameCategory = products.filter((p) => p.category === product.category);
  const categoryIndex = sameCategory.findIndex((p) => p.id === product.id);
  const categoryTotal = sameCategory.length;

  const prevProduct =
    categoryTotal > 1
      ? sameCategory[(categoryIndex - 1 + categoryTotal) % categoryTotal]
      : null;
  const nextProduct =
    categoryTotal > 1
      ? sameCategory[(categoryIndex + 1) % categoryTotal]
      : null;

  const categoryName = categoryMap[product.category] || product.category;
  const shareUrl = `https://maogastsoftworks.com/product/${product.id}`;
  const whatsappShareUrl = `https://wa.me/?text=Check out this ${product.name} at Maogast Softworks! Price: Ksh ${product.price.toLocaleString()}. ${shareUrl}`;

  /* -------- Extras pricing -------- */
  const extras: { label: string; value: number; icon: typeof Tag }[] = [];
  if (product.brandingCost) extras.push({ label: 'Branding Cost', value: product.brandingCost, icon: Tag });
  if (product.printingCost) extras.push({ label: 'Printing Cost', value: product.printingCost, icon: Printer });

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-10 md:py-16 max-w-6xl">
      {/* ============================================================ */}
      {/* Top bar — Back link + counter (mobile-friendly wrap)          */}
      {/* ============================================================ */}
      <div className="flex items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
        <Link
          href={`/products/${product.category}`}
          className="inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-orange-600 hover:text-orange-700 active:scale-95 transition-all py-2 pr-3 font-medium"
        >
          <ArrowLeft className="w-4 h-4 sm:w-4 sm:h-4 shrink-0" />
          <span className="truncate">Back to {categoryName}</span>
        </Link>

        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2.5 sm:px-3 py-1 rounded-full whitespace-nowrap shrink-0">
          {categoryIndex + 1} / {categoryTotal}
        </span>
      </div>

      {/* ============================================================ */}
      {/* Main product card                                             */}
      {/* ============================================================ */}
      <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
          {/* Media — full width on mobile, half on desktop */}
          <div className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-auto md:h-[600px] bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
            <WatermarkImage
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Details */}
          <div className="p-5 sm:p-6 md:p-8 flex flex-col">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-orange-600 dark:text-orange-400 mb-2">
              {categoryName}
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
              {product.name}
            </h1>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-5 sm:mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Pricing block */}
            <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-2.5 sm:pb-3 gap-3">
                <span className="font-medium text-sm sm:text-base text-gray-700 dark:text-gray-300 flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <Package className="w-4 h-4 text-orange-600 shrink-0" /> Base Price
                </span>
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600 whitespace-nowrap">
                  Ksh {product.price.toLocaleString()}
                </span>
              </div>

              {extras.map((extra) => {
                const Icon = extra.icon;
                return (
                  <div
                    key={extra.label}
                    className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-2.5 sm:pb-3 gap-3"
                  >
                    <span className="font-medium text-sm sm:text-base text-gray-700 dark:text-gray-300 flex items-center gap-1.5 sm:gap-2 shrink-0">
                      <Icon className="w-4 h-4 text-orange-600 shrink-0" /> {extra.label}
                    </span>
                    <span className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white whitespace-nowrap">
                      + Ksh {extra.value.toLocaleString()}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTAs — stack on mobile, side-by-side on sm+ */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto pt-2">
              <Link
                href={`/quote?product=${product.id}`}
                className="w-full sm:flex-1 bg-orange-600 hover:bg-orange-700 active:scale-[0.98] text-white text-center font-semibold py-3.5 sm:py-3 px-6 rounded-lg transition-all min-h-[48px] flex items-center justify-center"
              >
                Enquire Now
              </Link>
              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 active:scale-[0.98] text-white font-semibold py-3.5 sm:py-3 px-6 rounded-lg transition-all min-h-[48px]"
              >
                <FaWhatsapp className="w-5 h-5 shrink-0" /> Share on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* Previous / Next Navigation — mobile-first layout              */}
      {/* ============================================================ */}
      {prevProduct && nextProduct && (
        <section className="mt-6 sm:mt-8 md:mt-12" aria-label="Product navigation">
          {/* Divider + label */}
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
            <span className="text-[10px] sm:text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold text-center">
              Browse More {categoryName}
            </span>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
          </div>

          {/* Cards — stack on mobile, side by side on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">

            {/* ---------- PREVIOUS ---------- */}
            <Link
              href={`/product/${prevProduct.id}`}
              className="group relative flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 hover:shadow-xl active:scale-[0.98] active:border-orange-500 transition-all duration-300 md:hover:-translate-y-1 min-h-[80px]"
              aria-label={`Previous product: ${prevProduct.name}`}
            >
              {/* Thumbnail — 56px mobile, 80px desktop */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg sm:rounded-xl overflow-hidden shrink-0 bg-gray-100 dark:bg-gray-700">
                <WatermarkImage
                  src={prevProduct.image}
                  alt={prevProduct.name}
                  fill
                  sizes="(max-width: 640px) 56px, 80px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  watermarkSize={16}
                  watermarkPosition="bottom-right"
                />
              </div>

              {/* Content — flex-1 to fill space */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5 sm:mb-1">
                  <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-600 group-hover:-translate-x-1 transition-transform shrink-0" />
                  <span className="text-[10px] sm:text-[10px] uppercase tracking-wider font-bold text-orange-600 dark:text-orange-400">
                    Previous
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white line-clamp-2 sm:truncate group-hover:text-orange-600 transition-colors leading-snug">
                  {prevProduct.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 mt-0.5 sm:truncate">
                  Ksh {prevProduct.price.toLocaleString()}
                </p>
              </div>

              {/* Desktop hover arrow */}
              <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                <ChevronLeft className="w-4 h-4" />
              </div>
            </Link>

            {/* ---------- NEXT ---------- */}
            <Link
              href={`/product/${nextProduct.id}`}
              className="group relative flex items-center gap-3 sm:gap-4 md:flex-row-reverse md:text-right p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 hover:shadow-xl active:scale-[0.98] active:border-orange-500 transition-all duration-300 md:hover:-translate-y-1 min-h-[80px]"
              aria-label={`Next product: ${nextProduct.name}`}
            >
              {/* Thumbnail */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg sm:rounded-xl overflow-hidden shrink-0 bg-gray-100 dark:bg-gray-700">
                <WatermarkImage
                  src={nextProduct.image}
                  alt={nextProduct.name}
                  fill
                  sizes="(max-width: 640px) 56px, 80px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  watermarkSize={16}
                  watermarkPosition="bottom-right"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5 sm:mb-1 md:justify-end">
                  <span className="text-[10px] sm:text-[10px] uppercase tracking-wider font-bold text-orange-600 dark:text-orange-400">
                    Next
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-600 group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white line-clamp-2 sm:truncate group-hover:text-orange-600 transition-colors leading-snug">
                  {nextProduct.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 mt-0.5 sm:truncate">
                  Ksh {nextProduct.price.toLocaleString()}
                </p>
              </div>

              {/* Desktop hover arrow */}
              <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Fallback for single-product category */}
      {(!prevProduct || !nextProduct) && (
        <div className="mt-6 sm:mt-8 text-center">
          <Link
            href={`/products/${product.category}`}
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium py-2 px-4 active:scale-95 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Browse all {categoryName}
          </Link>
        </div>
      )}
    </div>
  );
}