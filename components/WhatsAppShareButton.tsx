'use client';

import { Share2 } from 'lucide-react';

export default function WhatsAppShareButton() {
  const shareOnWhatsApp = () => {
    const url = encodeURIComponent('https://maogastsoftworks.com/printing');
    const text = encodeURIComponent('Check out Maogast Softworks Printing & Branding – custom T‑shirts, bulk discounts, and professional branding in Nairobi! 🖨️👕');
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
  };

  return (
    <button
      onClick={shareOnWhatsApp}
      className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-md hover:bg-[#20b859] transition transform hover:scale-105"
    >
      <Share2 className="w-5 h-5" />
      Share via WhatsApp
    </button>
  );
}