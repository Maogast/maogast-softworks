"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

// Define the types for your project media
type MediaType = "image" | "video";

interface ProjectMedia {
  title: string;
  src: string;
  type: MediaType;
}

// Move your data here
const recentProjects: ProjectMedia[] = [
  { title: "Kharmm Car Wash Branding", src: "/images/mgst-works/Kharmm Car Wash-resized.webp", type: "image" },
  { title: "Medical Office Signage", src: "/images/mgst-works/Medical1-resized.webp", type: "image" },
  { title: "Photo Studio Lobby", src: "/images/mgst-works/Photo Studio-resized.webp", type: "image" },
  { title: "Wrapstar Shop Signage", src: "/images/mgst-works/Wrapstar.webp", type: "image" },
  { title: "Hilltop Facility Directional", src: "/images/mgst-works/Hilltop-resized.webp", type: "image" },
  { title: "Sweeven Retail Branding", src: "/images/mgst-works/Sweeven.webp", type: "image" },
  { title: "Medical2 Acrylic Lettering", src: "/images/mgst-works/medical2-resized.webp", type: "image" },
  { title: "Clothing Store 3D Graphics", src: "/images/mgst-works/clothing store-resized.webp", type: "image" },
  { title: "Coffee Bar Video Showcase", src: "/images/mgst-works/Coffee Bar video.mp4", type: "video" },
  { title: "Installation Video 1", src: "/images/mgst-works/Video1.mp4", type: "video" },
  { title: "Installation Video 2", src: "/images/mgst-works/Video.mp4", type: "video" },
];

export default function ProjectsGallery() {
  // State is now safely inside a Client Component
  const [selectedProject, setSelectedProject] = useState<ProjectMedia | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (project: ProjectMedia) => {
    setSelectedProject(project);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      {/* Lightbox/Preview Modal */}
      {isLightboxOpen && selectedProject && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center">
            {selectedProject.type === "video" ? (
              <video
                src={selectedProject.src}
                controls
                autoPlay
                className="max-h-[90vh] w-auto h-auto rounded-xl shadow-2xl bg-black"
              />
            ) : (
              <Image
                src={selectedProject.src}
                alt="Project preview"
                width={1200}
                height={800}
                className="object-contain max-h-[90vh] w-auto h-auto rounded-xl shadow-2xl"
                priority
              />
            )}
          </div>
        </div>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recentProjects.map((project, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(project)}
            className="relative aspect-square rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl cursor-pointer group transition-all duration-300 hover:scale-105"
          >
            {project.type === "video" ? (
              <video
                src={project.src}
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:brightness-90 transition-all duration-300"
              />
            ) : (
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover group-hover:brightness-90 transition-all duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <p className="text-white text-xs font-medium truncate">{project.title}</p>
            </div>
            <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-orange-600 rounded-full p-1 text-white">
              <span className="text-[10px] px-2">{project.type === 'video' ? '▶ Play' : 'Preview'}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}