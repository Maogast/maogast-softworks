import Link from 'next/link';
import { products } from '@/data/products';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Products | Premium Branding & Gifts | Maogast Softworks',
  description: 'Explore our collection of premium mugs, thermal flasks, executive gift sets, and awards.',
};

export default function ProductsPage() {
  const categories = [
    { slug: 'mugs', name: 'Mugs', icon: '☕', count: products.filter(p => p.category === 'mugs').length },
    { slug: 'flasks', name: 'Flasks & Tumblers', icon: '🧴', count: products.filter(p => p.category === 'flasks').length },
    { slug: 'gift-sets', name: 'Gift Sets', icon: '🎁', count: products.filter(p => p.category === 'gift-sets').length },
    { slug: 'awards', name: 'Awards', icon: '🏆', count: products.filter(p => p.category === 'awards').length },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Our Product Catalogue
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/products/${cat.slug}`}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all p-8 text-center group"
          >
            <div className="text-4xl mb-4">{cat.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{cat.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{cat.count} products</p>
          </Link>
        ))}
      </div>
    </div>
  );
}