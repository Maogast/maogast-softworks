'use client';

import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  contact: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    contact: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /* ---------- Send via Email (API) ---------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! We’ll get back to you soon.' });
        setFormData({ name: '', email: '', contact: '', service: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ---------- NEW: Send via WhatsApp ---------- */
  const handleWhatsAppSend = () => {
    // Basic required-field check
    if (!formData.name || !formData.service || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in Name, Service, and Message before sending via WhatsApp.',
      });
      return;
    }

    const lines = [
      'Hello Maogast Softworks 👋',
      '',
      `*Name:* ${formData.name}`,
      formData.email ? `*Email:* ${formData.email}` : '',
      formData.contact ? `*Phone:* ${formData.contact}` : '',
      `*Service:* ${formData.service}`,
      '',
      '*Message / Project Details:*',
      formData.message,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join('\n'));
    const url = `https://wa.me/254768564533?text=${text}`;

    setStatus({
      type: 'success',
      message: 'Opening WhatsApp with your details — just hit send!',
    });

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 dark:border-gray-700">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Send a Message</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Tell us about your project — reply within 24 hours, or chat instantly on WhatsApp.
      </p>

      {status && (
        <div
          className={`mb-6 p-3 rounded-lg text-sm ${
            status.type === 'success'
              ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800'
              : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800'
          }`}
        >
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white transition"
            placeholder="Sylvester Okeno"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white transition"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white transition"
            placeholder="e.g. 0768 564 533"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Service Interested In *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="">Select a service</option>
            <option value="Software Development">Software Development</option>
            <option value="Printing & Branding">Printing & Branding</option>
            <option value="AI Design">AI‑Powered Design</option>
            <option value="Content Management">Content Management</option>
            <option value="3D Signage & Lettering">3D Signage & Lettering (MGST~Works)</option>
            <option value="Products (Catalogue & Branding)">Products (Catalogue & Branding)</option>
            <option value="Training & Webinars">Training & Webinars</option>
            <option value="Birthday Gallery Posters & Printing">Birthday Gallery Posters & Printing</option>
            <option value="Photo Mounting & Framing">Photo Mounting & Framing</option>
            <option value="Academic & Research Projects">Academic & Research Projects</option>
            <option value="Other">Other / Not sure</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message / Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white resize-y"
            placeholder="Tell us about your project, deadline, budget, etc."
          />
        </div>

        {/* Dual send options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          <button
            type="button"
            onClick={handleWhatsAppSend}
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold py-3 px-6 rounded-lg transition transform hover:scale-[1.02]"
          >
            <FaWhatsapp className="w-5 h-5" />
            Send via WhatsApp
          </button>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400 text-center pt-1">
          💬 Prefer WhatsApp? We usually reply in <span className="font-semibold text-[#25D366]">under 5 minutes</span>.
        </p>
      </form>
    </div>
  );
}