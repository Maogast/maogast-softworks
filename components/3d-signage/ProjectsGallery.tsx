"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Share2 } from "lucide-react";

// Define the types for your project media
type MediaType = "image" | "video";

interface ProjectMedia {
  id: string; // Added ID for deep linking
  title: string;
  src: string;
  type: MediaType;
}

// Updated data with unique IDs based on the title
const recentProjects: ProjectMedia[] = [
  { id: "kharmm-car-wash", title: "Kharmm Car Wash Branding", src: "/images/mgst-works/Kharmm Car Wash-resized.webp", type: "image" },
  { id: "medical-office", title: "Medical Office Signage", src: "/images/mgst-works/Medical1-resized.webp", type: "image" },
  { id: "photo-studio", title: "Photo Studio Lobby", src: "/images/mgst-works/Photo Studio-resized.webp", type: "image" },
  { id: "wrapstar", title: "Wrapstar Shop Signage", src: "/images/mgst-works/Wrapstar.webp", type: "image" },
  { id: "hilltop", title: "Hilltop Facility Directional", src: "/images/mgst-works/Hilltop-resized.webp", type: "image" },
  { id: "sweeven", title: "Sweeven Retail Branding", src: "/images/mgst-works/Sweeven.webp", type: "image" },
  { id: "medical2", title: "Medical2 Acrylic Lettering", src: "/images/mgst-works/medical2-resized.webp", type: "image" },
  { id: "clothing-store", title: "Clothing Store 3D Graphics", src: "/images/mgst-works/clothing store-resized.webp", type: "image" },
  { id: "coffee-bar-video", title: "Coffee Bar Video Showcase", src: "/images/mgst-works/Coffee Bar video.mp4", type: "video" },
  { id: "installation-video-1", title: "Installation Video 1", src: "/images/mgst-works/Video1.mp4", type: "video" },
  { id: "installation-video-2", title: "Installation Video 2", src: "/images/mgst-works/Video.mp4", type: "video" },
];

export default function ProjectsGallery() {
  const [selectedProject, setSelectedProject] = useState<ProjectMedia | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

   // DEEP LINKING LOGIC: Check URL parameters on load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const projectId = params.get("project");
      if (projectId) {
        const project = recentProjects.find((p) => p.id === projectId);
        if (project) {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setSelectedProject(project);
           
          setIsLightboxOpen(true);
        }
      }
    }
  }, []);

  const openLightbox = (project: ProjectMedia) => {
    setSelectedProject(project);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedProject(null);
  };

  // SHARE LOGIC: Generates a shareable link and opens the native share menu
  const handleShare = async (project: ProjectMedia, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening the lightbox when clicking share
    const url = window.location.href.split("?")[0] + `?project=${project.id}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Maogast 3D Signage: ${project.title}`,
          text: `Check out this amazing 3D signage project by Maogast Softworks!`,
          url: url,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback for desktop browsers that don't support navigator.share
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard! You can now paste it into your WhatsApp status.");
    }
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
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-4 py-2 rounded-full backdrop-blur-sm opacity-80">
              {selectedProject.title}
            </div>
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
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
              <p className="text-white text-xs font-medium truncate mb-1">{project.title}</p>
            </div>

            {/* Action Buttons */}
            <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
              <button
                onClick={(e) => handleShare(project, e)}
                className="bg-orange-600 rounded-full p-1.5 text-white hover:bg-orange-700 transition-colors shadow-lg"
                aria-label="Share project"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}