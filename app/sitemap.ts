import { MetadataRoute } from 'next'
import { products } from '@/data/products'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.maogastsoftworks.com'

  const mainPages = [
    { url: '', lastmod: '2026-05-01', changefreq: 'weekly', priority: 1.0 },
    { url: '/about', lastmod: '2026-05-01', changefreq: 'monthly', priority: 0.6 },
    { url: '/about/our-foundation', lastmod: '2026-05-01', changefreq: 'monthly', priority: 0.6 },
    { url: '/software', lastmod: '2026-05-01', changefreq: 'monthly', priority: 0.9 },
    { url: '/printing', lastmod: '2026-05-01', changefreq: 'monthly', priority: 0.8 },
    { url: '/3d-signage', lastmod: '2026-06-01', changefreq: 'monthly', priority: 0.8 }, // ✅ NEW PAGE ADDED
    { url: '/ai-design', lastmod: '2026-05-01', changefreq: 'monthly', priority: 0.8 },
    { url: '/content-management', lastmod: '2026-05-01', changefreq: 'monthly', priority: 0.8 },
    { url: '/products', lastmod: '2026-05-01', changefreq: 'weekly', priority: 0.9 },
    { url: '/training', lastmod: '2026-05-01', changefreq: 'monthly', priority: 0.7 },
    { url: '/contact', lastmod: '2026-05-01', changefreq: 'monthly', priority: 0.6 },
    { url: '/portfolio', lastmod: '2026-05-01', changefreq: 'monthly', priority: 0.7 },
    { url: '/quote', lastmod: '2026-05-01', changefreq: 'monthly', priority: 0.6 },
  ]

  const staticMap = mainPages.map(page => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(page.lastmod),
    changeFrequency: page.changefreq as MetadataRoute.Sitemap[0]['changeFrequency'],
    priority: page.priority,
  }))

  // Add all product detail pages
  const productPages = products.map(product => ({
    url: `${baseUrl}/product/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Add all blog posts
  const posts = getAllPosts()
  const blogPages = posts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticMap, ...productPages, ...blogPages]
}