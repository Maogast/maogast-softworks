// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.maogastsoftworks.com'

  const mainPages = [
    { url: '', lastmod: '2026-05-01', changefreq: 'weekly', priority: 1.0 },
    { url: '/about', lastmod: '2026-05-01', changefreq: 'monthly', priority: 0.6 },
    { url: '/software', lastmod: '2026-05-01', changefreq: 'monthly', priority: 0.9 },
    { url: '/printing', lastmod: '2026-05-01', changefreq: 'monthly', priority: 0.8 },
    { url: '/ai-design', lastmod: '2026-05-01', changefreq: 'monthly', priority: 0.8 },
    { url: '/content-management', lastmod: '2026-05-01', changefreq: 'monthly', priority: 0.8 },
    { url: '/products', lastmod: '2026-05-01', changefreq: 'weekly', priority: 0.9 },
    { url: '/training', lastmod: '2026-05-01', changefreq: 'monthly', priority: 0.7 },
    { url: '/contact', lastmod: '2026-05-01', changefreq: 'monthly', priority: 0.6 },
    { url: '/portfolio', lastmod: '2026-05-01', changefreq: 'monthly', priority: 0.7 },
  ]

  return mainPages.map(page => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(page.lastmod),
    changeFrequency: page.changefreq as MetadataRoute.Sitemap[0]['changeFrequency'],
    priority: page.priority,
  }))
}