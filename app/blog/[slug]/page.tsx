import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog';
import { Metadata } from 'next';
import Script from 'next/script';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    return {
      title: `${post.title} | Maogast Softworks Blog`,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: 'article',
        publishedTime: post.date,
        authors: post.author ? [post.author] : undefined,
        images: post.image ? [{ url: post.image }] : [],
      },
    };
  } catch {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post does not exist.',
    };
  }
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Organization',
      name: post.author || 'Maogast Softworks',
    },
    datePublished: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://maogastsoftworks.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="min-h-screen bg-white dark:bg-gray-950 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="text-orange-600 hover:underline mb-6 inline-block">
            ← Back to all posts
          </Link>

          {post.image && (
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-6">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-8">
            <span>{new Date(post.date).toLocaleDateString('en-KE')}</span>
            {post.author && (
              <>
                <span className="text-gray-300 dark:text-gray-700">•</span>
                <span className="font-medium text-gray-600 dark:text-gray-400">
                  By {post.author}
                </span>
              </>
            )}
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </article>
    </>
  );
}