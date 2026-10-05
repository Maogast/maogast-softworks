import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { getAllPosts } from '@/lib/blog';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';

/* ============================================================ */
/* Helpers                                                       */
/* ============================================================ */
function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-KE', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function getReadTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function isRecent(dateStr: string) {
  const days =
    (Date.now() - new Date(dateStr).getTime()) / (1000 * 60 * 60 * 24);
  return days < 21;
}

/* ============================================================ */
/* Server Component                                              */
/* ============================================================ */
export default function BlogPreview() {
  const allPosts = getAllPosts();
  const posts = allPosts.slice(0, 3);

  // If no posts, don't render the section at all
  if (posts.length === 0) return null;

  const [featured, ...rest] = posts;

  /* ---------- JSON-LD for SEO ---------- */
  const blogListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Latest Insights from Maogast Softworks',
    itemListElement: posts.map((post, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://maogastsoftworks.com/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <section className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <Script
        id="blog-preview-list-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListJsonLd) }}
      />

      {/* Ambient tech constellation */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/home/tech-constellation.webp)',
          opacity: 0.02,
          filter: 'grayscale(75%) brightness(0.55)',
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ============================================================ */}
        {/* Header                                                        */}
        {/* ============================================================ */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-12">
          <div className="max-w-2xl">
            <span className="text-orange-600 dark:text-orange-400 font-semibold uppercase text-xs tracking-wider">
              Latest Insights
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3">
              Ideas, Tips & Industry Deep-Dives
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Fresh perspectives on software, printing, and AI for Kenyan
              businesses and global clients.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold group shrink-0 self-start sm:self-auto py-2 px-1 active:scale-95 transition-transform"
          >
            View all posts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ============================================================ */}
        {/* Grid — 7 cols featured + 5 cols list on desktop                */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* ============================== */}
          {/* FEATURED POST                  */}
          {/* ============================== */}
          <Link
            href={`/blog/${featured.slug}`}
            className="lg:col-span-7 group bg-gray-50 dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1 active:scale-[0.99] transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={featured.image || '/og-blog.jpg'}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Bottom fade for pill legibility */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />

              {/* "New" badge — top-left */}
              {isRecent(featured.date) && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1 bg-orange-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    New
                  </span>
                </div>
              )}

              {/* Read time — bottom-left */}
              <div className="absolute bottom-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 bg-black/45 backdrop-blur-sm text-white text-[11px] font-medium px-3 py-1 rounded-full">
                  <Clock className="w-3 h-3" />
                  {getReadTime(featured.content)} min read
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 dark:text-gray-400 mb-3">
                <span className="font-mono uppercase tracking-wider">
                  {formatDate(featured.date)}
                </span>
                {featured.author && (
                  <>
                    <span className="text-gray-300 dark:text-gray-700">·</span>
                    <span>By {featured.author}</span>
                  </>
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 transition-colors leading-tight">
                {featured.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 mb-5 flex-grow">
                {featured.description}
              </p>

              {/* CTA */}
              <div className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm">
                Read article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* ============================== */}
          {/* SUPPORTING POSTS (2)           */}
          {/* ============================== */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 active:scale-[0.99] transition-all duration-300 flex-1"
              >
                {/* Thumbnail */}
                <div className="relative w-full h-48 sm:w-40 lg:w-44 sm:h-auto shrink-0 overflow-hidden">
                  <Image
                    src={post.image || '/og-blog.jpg'}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 176px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Bottom fade */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent sm:hidden" />

                  {/* Mobile-only: date overlay at bottom */}
                  <div className="absolute bottom-2 left-2 z-10 sm:hidden">
                    <span className="inline-flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
                      <Clock className="w-2.5 h-2.5" />
                      {getReadTime(post.content)}m
                    </span>
                  </div>

                  {/* "New" badge */}
                  {isRecent(post.date) && (
                    <span className="absolute top-2 left-2 z-10 bg-orange-600 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow">
                      New
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col min-w-0">
                  {/* Meta — hidden on mobile (shown as overlay on image) */}
                  <div className="hidden sm:flex items-center gap-2 text-[11px] text-gray-500 dark:text-gray-400 mb-1.5">
                    <span className="font-mono uppercase tracking-wider truncate">
                      {formatDate(post.date)}
                    </span>
                    <span className="text-gray-300 dark:text-gray-700">·</span>
                    <span className="shrink-0 inline-flex items-center gap-0.5">
                      <Clock className="w-3 h-3" />
                      {getReadTime(post.content)}m
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5 group-hover:text-orange-600 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                    {post.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-auto pt-3 inline-flex items-center gap-1 text-orange-600 font-semibold text-xs">
                    Read
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}