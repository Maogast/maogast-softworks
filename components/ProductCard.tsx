'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';
import { ExternalLink } from 'lucide-react';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group">
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden rounded-t-xl bg-gray-100 dark:bg-gray-700">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
            {product.description}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <div>
              <span className="text-orange-600 font-bold text-xl">
                Ksh {product.price.toLocaleString()}
              </span>
              {product.brandingCost && (
                <p className="text-xs text-gray-500">+ Ksh {product.brandingCost} branding</p>
              )}
            </div>
            <span className="text-gray-400 group-hover:text-orange-500 transition-colors">
              <ExternalLink className="w-5 h-5" />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}