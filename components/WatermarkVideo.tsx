"use client";
import React, { useRef } from 'react';

interface WatermarkVideoProps {
  src: string;
  poster?: string;
  className?: string;
  watermarkText?: string;
  watermarkOpacity?: number;
}

export default function WatermarkVideo({
  src,
  poster,
  className = '',
  watermarkText = 'MAOGAST SOFTWORKS',
  watermarkOpacity = 0.6,
}: WatermarkVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className={`relative w-full ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-auto rounded-xl"
        autoPlay
        loop
        playsInline
        controls
        controlsList="nodownload"
        disablePictureInPicture
        muted={false}
        onContextMenu={(e) => e.preventDefault()}
      />
      {/* Dynamic Watermark */}
      <div
        className="pointer-events-none absolute top-4 right-4 rotate-12 text-white font-extrabold tracking-widest z-10"
        style={{ opacity: watermarkOpacity, textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
      >
        {watermarkText}
      </div>
    </div>
  );
}