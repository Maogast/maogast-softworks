import { printingProjects } from '@/data/printing-portfolio';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react'; // Removed Share2 and Whatsapp
import { FaWhatsapp } from 'react-icons/fa'; // Added correct WhatsApp import
import type { Metadata } from 'next';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = printingProjects.find(p => p.id === resolvedParams.slug);
  
  if (!project) return { title: 'Project Not Found' };

  const baseUrl = 'https://maogastsoftworks.com';
  return {
    title: `${project.title} | Mgst Softworks Portfolio`,
    description: project.description || `Check out this beautiful ${project.category} printed by Maogast Softworks in Nairobi.`,
    openGraph: {
      title: `${project.title} - Mgst Softworks`,
      description: project.description,
      images: [{ url: `${baseUrl}${project.image}`, width: 1200, height: 630 }],
      siteName: 'Maogast Softworks (MGST~Works)',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Mgst`,
      description: project.description,
      images: [`${baseUrl}${project.image}`],
    },
  };
}

// Pre-render all project pages for ultra-fast loading
export async function generateStaticParams() {
  return printingProjects.map((project) => ({
    slug: project.id,
  }));
}

export default async function PrintingPortfolioPage({ params }: Props) {
  const resolvedParams = await params;
  const project = printingProjects.find(p => p.id === resolvedParams.slug);

  if (!project) notFound();

  const shareUrl = `https://maogastsoftworks.com/printing/portfolio/${project.id}`;
  const whatsappShareUrl = `https://wa.me/?text=Check out this amazing ${project.title} printed by Maogast Softworks! ${shareUrl}`;

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      {/* Back Button */}
      <Link 
        href="/printing"
        className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Printing Services
      </Link>

      {/* Project Detail View */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="relative aspect-square md:aspect-auto md:h-[600px] bg-gray-100 dark:bg-gray-700">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>
          
          {/* Details Section */}
          <div className="p-6 md:p-8 flex flex-col">
            <span className="text-sm font-semibold uppercase tracking-wide text-orange-600 dark:text-orange-400 mb-2">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>
            {project.client && (
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                <strong>Client:</strong> {project.client}
              </p>
            )}
            {project.description && (
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                {project.description}
              </p>
            )}
            {project.price && (
              <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
                <span className="font-medium text-gray-700 dark:text-gray-300">Estimated Price</span>
                <span className="text-2xl font-bold text-orange-600">{project.price}</span>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <Link
                href="/quote"
                className="flex-1 bg-orange-600 hover:bg-orange-700 text-white text-center font-medium py-3 px-6 rounded-lg transition"
              >
                Request a Quote for This
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