import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog – Insights on Software, Printing & AI in Nairobi | Mgst (Maogast Softworks)',
  description: 'Read articles about custom software development, printing tips, AI design, and business growth – written for the Kenyan market by the Mgst team.',
  alternates: {
    canonical: 'https://maogastsoftworks.com/blog',
  },
  openGraph: {
    title: 'Blog – Insights on Tech & Branding | Mgst Softworks',
    description: 'Practical insights for Kenyan businesses – from software to printing and AI, shared by the Mgst (Maogast Softworks) team.',
    url: 'https://maogastsoftworks.com/blog',
    siteName: 'Maogast Softworks (MGST~Works)',
    images: [{ url: 'https://maogastsoftworks.com/og-blog.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Mgst (Maogast Softworks)',
    description: 'Insights on software, printing, and AI for the Kenyan market.',
    images: ['https://maogastsoftworks.com/og-blog.jpg'],
  },
};
export default async function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <section className="bg-gradient-to-br from-[#0A192F] to-[#0F2A3F] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Maogast Blog</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Practical insights for Kenyan businesses – from software to printing and AI.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500">No blog posts yet. Check back soon!</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col"
              >
                {post.image && (
                  <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span className="text-orange-600 font-medium">
                      {new Date(post.date).toLocaleDateString('en-KE')}
                    </span>
                    {post.author && (
                      <span className="text-gray-400 dark:text-gray-500">
                        By {post.author}
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-600 transition mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                    {post.description}
                  </p>
                  <span className="inline-block mt-4 text-orange-600 font-medium group-hover:underline">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}