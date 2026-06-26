// app/product/[id]/page.tsx
import { products } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import type { Metadata } from 'next';

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find(p => p.id === resolvedParams.id);
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  const baseUrl = 'https://maogastsoftworks.com';

  return {
    title: `${product.name} | Ksh ${product.price.toLocaleString()} | Maogast Softworks`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Ksh ${product.price.toLocaleString()}`,
      description: product.description,
      images: [
        {
          url: `${baseUrl}${product.image}`,
          width: 1200,
          height: 630,
        },
      ],
      siteName: 'Maogast Softworks',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} - Ksh ${product.price.toLocaleString()}`,
      description: product.description,
      images: [`${baseUrl}${product.image}`],
    },
  };
}

// Pre‑render all product pages at build time
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const product = products.find(p => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  const categoryName = {
    mugs: 'Mugs',
    flasks: 'Flasks & Tumblers',
    'gift-sets': 'Gift Sets',
    awards: 'Awards',
  }[product.category];

  const productUrl = `https://maogastsoftworks.com/product/${product.id}`;
  const whatsappShareUrl = `https://wa.me/?text=Check out this ${product.name} at Maogast Softworks! Price: Ksh ${product.price.toLocaleString()}. Details: ${productUrl}`;

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <Link 
        href={`/products/${product.category}`}
        className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to {categoryName}
      </Link>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative aspect-square md:aspect-auto md:h-[600px] bg-gray-100 dark:bg-gray-700">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {product.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
              {product.description}
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3">
                <span className="font-medium text-gray-700 dark:text-gray-300">Price</span>
                <span className="text-3xl font-bold text-orange-600">
                  Ksh {product.price.toLocaleString()}
                </span>
              </div>
              {product.brandingCost && (
                <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Branding Cost</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Ksh {product.brandingCost.toLocaleString()}
                  </span>
                </div>
              )}
              {product.printingCost && (
                <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Printing Cost</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Ksh {product.printingCost.toLocaleString()}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <Link
                href={`/quote?product=${product.id}`}
                className="flex-1 bg-orange-600 hover:bg-orange-700 text-white text-center font-medium py-3 px-6 rounded-lg transition"
              >
                Enquire Now
              </Link>
              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition"
              >
                <FaWhatsapp className="w-5 h-5" /> Share on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}