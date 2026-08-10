'use client';

import { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

// You can add as many quotes as you want to this array
const quotes = [
  {
    text: "God can do much for you, even in your labor, if you ask Him. He can send His angels to preserve you from accidents, from breakage, and losses of life and property. The reason why those who neglect the privileges that God has provided have no more comfort and peace and joy is that they do not pause to have communion with God, who is the source of their strength. Can God pour out His Spirit, can He bless us, where there is so much indifference to His service? He cannot give us His rich blessing without our cooperation in His plans. He says, 'Them that honour me I will honour.'",
    citation: "RC 207.4"
  },
  {
    text: "If your business presses strongly, and urges you to your work, then there is still greater need to take time to pray, to present your petitions to the throne of grace, and secure the protecting care, the aid, the mercy and blessing of God. Do not grudge the time that God requires, and hurry through a faithless, formal prayer, that you may rush to your business.",
    citation: "RC 207.3"
  }
];

export default function FooterQuoteRotator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger fade out
      setFadeIn(false);
      
      // Wait for fade out to finish (500ms), then change text and fade back in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setFadeIn(true);
      }, 600); // 600ms matches the transition duration
      
    }, 10000); // Change quote every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-10 text-center overflow-hidden">
      {/* Decorative Quote Mark */}
      <div className="absolute top-2 left-4 md:left-12 text-5xl text-orange-500/20 font-serif pointer-events-none select-none">
        <FaQuoteLeft />
      </div>

      {/* The Quote Text */}
      <div 
        key={currentIndex}
        className={`transition-all duration-700 ease-in-out transform ${
          fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p className="text-gray-300/80 dark:text-gray-400 italic text-sm md:text-base leading-relaxed max-w-3xl mx-auto tracking-wide relative z-10">
          “{quotes[currentIndex].text}”
        </p>
        
        <p className="mt-4 text-xs text-orange-400/60 font-serif tracking-widest uppercase relative z-10">
          — {quotes[currentIndex].citation}
        </p>
      </div>

      {/* Navigation Dots (Optional aesthetic touch) */}
      <div className="flex justify-center gap-2 mt-6 relative z-10">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setFadeIn(false);
              setTimeout(() => {
                setCurrentIndex(index);
                setFadeIn(true);
              }, 600);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-orange-500 w-4' : 'bg-gray-600/50 hover:bg-gray-500'
            }`}
            aria-label={`View quote ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}