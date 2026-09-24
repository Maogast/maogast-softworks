'use client';
import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat() {
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show bubble after 5s, once per browser session
    if (typeof window === 'undefined') return;
    const alreadyShown = sessionStorage.getItem('mgst-wa-bubble-shown');
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setShowBubble(true);
      sessionStorage.setItem('mgst-wa-bubble-shown', 'true');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setShowBubble(false);
    setDismissed(true);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] flex items-end gap-3 pointer-events-none">
      {/* Greeting bubble */}
      {showBubble && !dismissed && (
        <div className="pointer-events-auto relative hidden sm:block mb-3 bg-white dark:bg-[#112240] shadow-2xl rounded-2xl px-4 py-3 max-w-[260px] border border-gray-100 dark:border-gray-800 animate-fade-in-up">
          <button
            onClick={() => setShowBubble(false)}
            className="absolute -top-2 -right-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold text-gray-700 dark:text-gray-200 transition"
            aria-label="Close"
          >
            ✕
          </button>
          <div className="flex items-start gap-2">
            <span className="text-2xl">👋</span>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">Hi there!</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                Need a quote or have a quick question? Chat with us on WhatsApp — we reply in minutes!
              </p>
            </div>
          </div>
          <span className="absolute bottom-3 right-3 w-3 h-3 bg-white dark:bg-[#112240] rotate-45 border-r border-b border-gray-100 dark:border-gray-800" />
        </div>
      )}

      {/* Floating button */}
      <a
        href="https://wa.me/254768564533?text=Hello%20Maogast%20Softworks%20%F0%9F%91%8B%0A%0AI%27d%20like%20to%20discuss%20a%20project.%20My%20service%20of%20interest%20is%3A%20%5BSoftware%20%2F%20Printing%20%2F%20AI%20Design%2F%20Products%2F%20Training%5D%0A%0AThanks!"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Chat with Maogast Softworks on WhatsApp"
        className="pointer-events-auto group relative flex items-center justify-center rounded-full bg-[#25D366] hover:bg-[#1EBE5D] shadow-2xl transition-all duration-300 hover:scale-105 w-14 h-14 sm:w-auto sm:h-14 sm:px-5"
        style={{
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45), 0 0 0 0 rgba(37, 211, 102, 0.7)',
        }}
      >
        {/* Pulsing glow ring */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-60"
          style={{ animation: 'waPulse 2.4s ease-out infinite' }}
          aria-hidden="true"
        />

        {/* Icon */}
        <FaWhatsapp className="relative z-10 w-7 h-7 sm:w-6 sm:h-6 text-white" />

        {/* Text (desktop only) */}
        <span className="relative z-10 hidden sm:inline ml-2 text-white font-semibold text-sm whitespace-nowrap">
          Chat with us
        </span>

        {/* Live "online" dot */}
        <span className="absolute -top-0.5 -right-0.5 sm:top-1 sm:right-2 z-20 flex items-center justify-center">
          <span className="absolute w-3 h-3 rounded-full bg-green-300 opacity-75 animate-ping" />
          <span className="relative w-2 h-2 rounded-full bg-white shadow" />
        </span>
      </a>

      <style jsx global>{`
        @keyframes waPulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          70% {
            transform: scale(1.6);
            opacity: 0;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}