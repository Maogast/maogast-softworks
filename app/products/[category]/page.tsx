import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = { params: Promise<{ category: string }> };

const categoryMap: Record<string, string> = {
  mugs: 'Mugs',
  flasks: 'Flasks & Tumblers',
  'gift-sets': 'Gift Sets',
  awards: 'Awards',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryName = categoryMap[resolvedParams.category];
  if (!categoryName) return { title: 'Category Not Found' };
  
  return {
    title: `${categoryName} | Premium Branding & Gifts | Mgst (Maogast Softworks)`,
    description: `Explore our premium collection of ${categoryName.toLowerCase()}. Perfect for corporate branding, gifts, and events.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const resolvedParams = await params;
  const category = resolvedParams.category;
  const categoryName = categoryMap[category];
  
  if (!categoryName) {
    notFound();
  }

  const filteredProducts = products.filter(p => p.category === category);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          {categoryName}
        </h1>
        <span className="text-gray-600 dark:text-gray-400">
          {filteredProducts.length} products
        </span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}