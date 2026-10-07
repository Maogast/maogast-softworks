'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { printingProjects } from '@/data/printing-portfolio';
import WatermarkVideo from '@/components/WatermarkVideo';
import WatermarkImage from '@/components/WatermarkImage';
import { X } from 'lucide-react';

/* Build the unique category list once */
const ALL = 'All Work';

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<string>(ALL);

  /* Derive unique categories with counts */
  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    printingProjects.forEach((p) => {
      counts.set(p.category, (counts.get(p.category) || 0) + 1);
    });
    return [
      { name: ALL, count: printingProjects.length },
      ...Array.from(counts.entries())
        .sort((a, b) => b[1] - a[1])
        .map(([name, count]) => ({ name, count })),
    ];
  }, []);

  /* Filter projects by active category */
  const filtered = useMemo(() => {
    if (activeCategory === ALL) return printingProjects;
    return printingProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      {/* ============================================================ */}
      {/* Filter chips — horizontally scrollable on mobile              */}
      {/* ============================================================ */}
      <div className="relative mb-6 md:mb-8">
        {/* Edge fades for scroll affordance on mobile */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-gray-50 dark:from-gray-950 to-transparent z-10 md:hidden" aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-gray-50 dark:from-gray-950 to-transparent z-10 md:hidden" aria-hidden="true" />

        <div className="flex gap-2 overflow-x-auto pb-2 -mb-2 px-1 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
          {categories.map((cat) => {
            const isActive = cat.name === activeCategory;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`group flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap border ${
                  isActive
                    ? 'bg-orange-600 border-orange-600 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-orange-400 hover:text-orange-600'
                }`}
              >
                {isActive && <X className="w-3 h-3" />}
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ============================================================ */}
      {/* Results counter                                               */}
      {/* ============================================================ */}
      <div className="flex items-center justify-between mb-4 text-xs sm:text-sm">
        <p className="text-gray-500 dark:text-gray-400">
          Showing{' '}
          <strong className="text-gray-900 dark:text-white">
            {filtered.length}
          </strong>{' '}
          {filtered.length === 1 ? 'item' : 'items'}
          {activeCategory !== ALL && (
            <>
              {' '}
              in <strong className="text-orange-600">{activeCategory}</strong>
            </>
          )}
        </p>

        {activeCategory !== ALL && (
          <button
            onClick={() => setActiveCategory(ALL)}
            className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center gap-1"
          >
            Clear filter <X className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* ============================================================ */}
      {/* Grid — animated on filter change                              */}
      {/* ============================================================ */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {filtered.map((project) => (
          <Link
            key={project.id}
            href={`/printing/portfolio/${project.id}`}
            className="group relative aspect-square bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] animate-fade-in"
          >
            {/* Media */}
            {project.video ? (
              <WatermarkVideo
                src={project.video}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <WatermarkImage
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                watermarkSize={40}
                watermarkPosition="bottom-right"
              />
            )}

            {/* Video badge */}
            {project.video && (
              <div className="absolute top-2 right-2 z-20 bg-orange-600 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-lg">
                ▶ Video
              </div>
            )}

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-orange-400 font-semibold mb-0.5">
                {project.category}
              </span>
              <h4 className="text-white text-xs sm:text-sm font-bold line-clamp-2 leading-snug">
                {project.title}
              </h4>
              {project.client && (
                <p className="text-gray-300 text-[10px] sm:text-xs line-clamp-1 mt-0.5">
                  {project.client}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* ============================================================ */}
      {/* Empty state (in case a category has no items)                 */}
      {/* ============================================================ */}
      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 dark:text-gray-400">
            No items in this category yet. Check back soon!
          </p>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.35s ease-out;
        }
      `}</style>
    </div>
  );
}