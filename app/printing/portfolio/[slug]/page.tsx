import { printingProjects } from '@/data/printing-portfolio';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import type { Metadata } from 'next';
import WatermarkVideo from '@/components/WatermarkVideo';
import WatermarkImage from '@/components/WatermarkImage';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = printingProjects.find(p => p.id === resolvedParams.slug);

  if (!project) return { title: 'Project Not Found' };

  const baseUrl = 'https://maogastsoftworks.com';

  /* ✅ Smart preview: use image if available, else fall back to nothing special */
  const previewImage = project.image || '/og-printing.jpg';

  return {
    title: `${project.title} | Mgst Softworks Portfolio`,
    description: project.description || `Check out this beautiful ${project.category} printed by Maogast Softworks in Nairobi.`,
    openGraph: {
      title: `${project.title} - Mgst Softworks`,
      description: project.description,
      images: [{ url: `${baseUrl}${previewImage}`, width: 1200, height: 630 }],
      siteName: 'Maogast Softworks (MGST~Works)',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Mgst`,
      description: project.description,
      images: [`${baseUrl}${previewImage}`],
    },
  };
}

export async function generateStaticParams() {
  return printingProjects.map((project) => ({
    slug: project.id,
  }));
}

export default async function PrintingPortfolioPage({ params }: Props) {
  const resolvedParams = await params;
  const currentIndex = printingProjects.findIndex(p => p.id === resolvedParams.slug);

  if (currentIndex === -1) notFound();

  const project = printingProjects[currentIndex];

  /* ✅ Determine media state */
  const hasImage = Boolean(project.image && project.image.trim().length > 0);
  const hasVideo = Boolean(project.video);
  const showImagePrimary = hasImage; // if image exists, it's primary
  const showVideoPrimary = !hasImage && hasVideo; // only when NO image but video exists

  // Compute previous & next with wrap-around
  const total = printingProjects.length;
  const prevProject = printingProjects[(currentIndex - 1 + total) % total];
  const nextProject = printingProjects[(currentIndex + 1) % total];

  const shareUrl = `https://maogastsoftworks.com/printing/portfolio/${project.id}`;
  const whatsappShareUrl = `https://wa.me/?text=Check out this amazing ${project.title} printed by Maogast Softworks! ${shareUrl}`;

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-10 md:py-16 max-w-6xl">
      {/* ============================================================ */}
      {/* Top bar — Back link + counter                                 */}
      {/* ============================================================ */}
      <div className="flex items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
        <Link
          href="/printing"
          className="inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-orange-600 hover:text-orange-700 active:scale-95 transition-all py-2 pr-3 font-medium"
        >
          <ArrowLeft className="w-4 h-4 shrink-0" />
          <span className="truncate">Back to Printing Services</span>
        </Link>

        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2.5 sm:px-3 py-1 rounded-full whitespace-nowrap shrink-0">
          {currentIndex + 1} / {total}
        </span>
      </div>

      {/* ============================================================ */}
      {/* Main card                                                     */}
      {/* ============================================================ */}
      <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">

        {/* ==================================================== */}
        {/* CASE A: VIDEO-ONLY PROJECT (no image)                */}
        {/* Video takes the primary slot, full width, uncropped  */}
        {/* ==================================================== */}
        {showVideoPrimary ? (
          <div className="flex flex-col">
            {/* Video — full width, natural aspect ratio, never cropped */}
            <div className="w-full bg-black flex items-center justify-center">
              <WatermarkVideo
                src={project.video!}
                poster={project.image || undefined}
                className="w-full"
                watermarkText="MAOGAST SOFTWORKS"
              />
            </div>

            {/* Details below video */}
            <div className="p-5 sm:p-6 md:p-8 flex flex-col">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-orange-600 dark:text-orange-400 mb-2">
                {project.category}
              </span>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
                {project.title}
              </h1>

              {project.client && (
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Client:</strong> {project.client}
                </p>
              )}

              {project.description && (
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-5 sm:mb-6 leading-relaxed">
                  {project.description}
                </p>
              )}

              {project.price && (
                <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-3 sm:pt-4 mb-5 sm:mb-6 gap-3">
                  <span className="font-medium text-sm sm:text-base text-gray-700 dark:text-gray-300 shrink-0">
                    Estimated Price
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-orange-600 whitespace-nowrap">
                    {project.price}
                  </span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto pt-2">
                <Link
                  href="/quote"
                  className="w-full sm:flex-1 bg-orange-600 hover:bg-orange-700 active:scale-[0.98] text-white text-center font-semibold py-3.5 sm:py-3 px-6 rounded-lg transition-all min-h-[48px] flex items-center justify-center"
                >
                  Request a Quote for This
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
        ) : (
          /* ==================================================== */
          /* CASE B: IMAGE-PRIMARY PROJECT (has image)            */
          /* Two-column layout: image + details                   */
          /* Video (if any) shown in section below                */
          /* ==================================================== */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
            {/* Media — image */}
            <div className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-auto md:h-[600px] bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
              <WatermarkImage
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                priority
              />

              {/* "▶ Video Below" badge if a video exists */}
              {hasVideo && (
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 bg-orange-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <Play className="w-3 h-3 fill-white" />
                  <span>Video Below</span>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="p-5 sm:p-6 md:p-8 flex flex-col">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-orange-600 dark:text-orange-400 mb-2">
                {project.category}
              </span>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
                {project.title}
              </h1>

              {project.client && (
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Client:</strong> {project.client}
                </p>
              )}

              {project.description && (
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-5 sm:mb-6 leading-relaxed">
                  {project.description}
                </p>
              )}

              {project.price && (
                <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-3 sm:pt-4 mb-5 sm:mb-6 gap-3">
                  <span className="font-medium text-sm sm:text-base text-gray-700 dark:text-gray-300 shrink-0">
                    Estimated Price
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-orange-600 whitespace-nowrap">
                    {project.price}
                  </span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto pt-2">
                <Link
                  href="/quote"
                  className="w-full sm:flex-1 bg-orange-600 hover:bg-orange-700 active:scale-[0.98] text-white text-center font-semibold py-3.5 sm:py-3 px-6 rounded-lg transition-all min-h-[48px] flex items-center justify-center"
                >
                  Request a Quote for This
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
        )}
      </div>

      {/* ============================================================ */}
      {/* ✅ Video Showcase — only when image is primary AND video exists */}
      {/* ============================================================ */}
      {showImagePrimary && hasVideo && project.video && (
        <section className="mt-6 sm:mt-8 md:mt-12" aria-label="Behind the scenes video">
          {/* Divider + label */}
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold text-center">
              <Play className="w-3 h-3 fill-orange-500 text-orange-500" />
              Behind the Scenes
            </span>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
          </div>

          {/* Video card — full width, natural aspect ratio, never cropped */}
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
            {/* Video wrapper — bg-black fills any letterbox space; video itself is w-full h-auto */}
            <div className="w-full bg-black flex items-center justify-center">
              <WatermarkVideo
                src={project.video}
                poster={project.image}
                className="w-full"
                watermarkText="MAOGAST SOFTWORKS"
              />
            </div>

            {/* Caption strip */}
            <div className="p-4 sm:p-5 md:p-6">
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Watch the making of <strong className="text-gray-900 dark:text-white">{project.title}</strong> — from
                design concept to finished product in our Nairobi studio.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* Previous / Next Navigation — mobile-first layout              */}
      {/* ============================================================ */}
      <section className="mt-6 sm:mt-8 md:mt-12" aria-label="Project navigation">
        {/* Divider + label */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
          <span className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold text-center">
            Browse More Work
          </span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
        </div>

        {/* Cards — stack on mobile, side by side on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">

          {/* ---------- PREVIOUS ---------- */}
          <Link
            href={`/printing/portfolio/${prevProject.id}`}
            className="group relative flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 hover:shadow-xl active:scale-[0.98] active:border-orange-500 transition-all duration-300 md:hover:-translate-y-1 min-h-[80px]"
            aria-label={`Previous project: ${prevProject.title}`}
          >
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg sm:rounded-xl overflow-hidden shrink-0 bg-gray-100 dark:bg-gray-700">
              <WatermarkImage
                src={prevProject.image}
                alt={prevProject.title}
                fill
                sizes="(max-width: 640px) 56px, 80px"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                watermarkSize={16}
                watermarkPosition="bottom-right"
              />
              {prevProject.video && (
                <div className="absolute top-1 right-1 z-10 bg-orange-600 text-white text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full">
                  ▶
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5 sm:mb-1">
                <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-600 group-hover:-translate-x-1 transition-transform shrink-0" />
                <span className="text-[10px] uppercase tracking-wider font-bold text-orange-600 dark:text-orange-400">
                  Previous
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white line-clamp-2 sm:truncate group-hover:text-orange-600 transition-colors leading-snug">
                {prevProject.title}
              </h3>
              {prevProject.category && (
                <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 mt-0.5 sm:truncate">
                  {prevProject.category}
                </p>
              )}
            </div>

            <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
              <ChevronLeft className="w-4 h-4" />
            </div>
          </Link>

          {/* ---------- NEXT ---------- */}
          <Link
            href={`/printing/portfolio/${nextProject.id}`}
            className="group relative flex items-center gap-3 sm:gap-4 md:flex-row-reverse md:text-right p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 hover:shadow-xl active:scale-[0.98] active:border-orange-500 transition-all duration-300 md:hover:-translate-y-1 min-h-[80px]"
            aria-label={`Next project: ${nextProject.title}`}
          >
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg sm:rounded-xl overflow-hidden shrink-0 bg-gray-100 dark:bg-gray-700">
              <WatermarkImage
                src={nextProject.image}
                alt={nextProject.title}
                fill
                sizes="(max-width: 640px) 56px, 80px"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                watermarkSize={16}
                watermarkPosition="bottom-right"
              />
              {nextProject.video && (
                <div className="absolute top-1 right-1 z-10 bg-orange-600 text-white text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full">
                  ▶
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5 sm:mb-1 md:justify-end">
                <span className="text-[10px] uppercase tracking-wider font-bold text-orange-600 dark:text-orange-400">
                  Next
                </span>
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-600 group-hover:translate-x-1 transition-transform shrink-0" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white line-clamp-2 sm:truncate group-hover:text-orange-600 transition-colors leading-snug">
                {nextProject.title}
              </h3>
              {nextProject.category && (
                <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 mt-0.5 sm:truncate">
                  {nextProject.category}
                </p>
              )}
            </div>

            <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
              <ChevronRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}