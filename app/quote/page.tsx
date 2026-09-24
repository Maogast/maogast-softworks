'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Banknote, Landmark, CreditCard } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import BankDetails from '@/components/BankDetails';
import MpesaDetails from '@/components/MpesaDetails';

export default function QuotePage() {
  const [step, setStep] = useState<'select' | 'details'>('select');
  const [selectedService, setSelectedService] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'error' | 'success'; message: string } | null>(null);

  /* ---------- Send via Email (API) ---------- */
  const handleServiceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!selectedService || !name || !email || !contact) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          contact,
          service: selectedService,
          projectType: 'Quote Request',
          message: `Quote request for: ${selectedService}`,
        }),
      });

      if (response.ok) {
        setStep('details');
      } else {
        const error = await response.json();
        setStatus({
          type: 'error',
          message: error.error || 'Something went wrong. Please try WhatsApp below.',
        });
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Network error. Please try WhatsApp below instead.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ---------- Send via WhatsApp ---------- */
  const handleWhatsAppSend = () => {
    if (!selectedService || !name || !contact) {
      setStatus({
        type: 'error',
        message: 'Please fill in Name, Phone, and Service before sending via WhatsApp.',
      });
      return;
    }

    const lines = [
      '*🚀 New Quote Request — Maogast Softworks*',
      '',
      `*Name:* ${name}`,
      email ? `*Email:* ${email}` : '',
      `*Phone:* ${contact}`,
      `*Service:* ${selectedService}`,
      '',
      'Please share pricing and lead time. Thanks!',
    ].filter(Boolean);

    const url = `https://wa.me/254768564533?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0A192F] to-[#0F2A3F] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Request a Quote in Nairobi</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tell us what you need, and we&apos;ll get back to you with a custom quote tailored for the Kenyan market.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-3xl">
        {step === 'select' ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                What service do you need?
              </h2>
              <span className="text-xs font-semibold bg-[#25D366]/10 text-[#25D366] px-3 py-1 rounded-full flex items-center gap-1">
                <FaWhatsapp className="w-3 h-3" /> WhatsApp available
              </span>
            </div>

            {status && (
              <div
                className={`mb-5 p-3 rounded-lg text-sm border ${
                  status.type === 'success'
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800'
                    : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 border-red-200 dark:border-red-800'
                }`}
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleServiceSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white transition"
                  placeholder="Sylvester Okeno"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white transition"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                  placeholder="e.g. 0768 564 533"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Service *
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select a service</option>
                  <option value="Software Development">Software Development</option>
                  <option value="Printing & Branding">Printing & Branding</option>
                  <option value="AI‑Powered Design">AI‑Powered Design</option>
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

              {/* Dual-send buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : '📩 Send via Email'}
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
                💬 Prefer WhatsApp? We usually reply in{' '}
                <span className="font-semibold text-[#25D366]">under 5 minutes</span>.
              </p>
            </form>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                <Banknote className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Thank you, {name}!
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                We&apos;ve received your request for <strong>{selectedService}</strong>. Our team will contact you within 24 hours.
              </p>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-4">
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                <Landmark className="w-5 h-5 text-orange-600" /> Payment Information
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                If you&apos;re ready to proceed, you can make a deposit using either of the methods below:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BankDetails />
                <MpesaDetails />
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 flex items-center gap-1">
                <CreditCard className="w-3 h-3" /> A 65% deposit is required to start work. Balance payable upon completion.
              </p>
            </div>

            {/* Optional: also offer WhatsApp on the success page */}
            <div className="mt-6 text-center space-y-3">
              <a
                href={`https://wa.me/254768564533?text=${encodeURIComponent(
                  `Hi Maogast, I just submitted a quote request for "${selectedService}". My name is ${name}. Looking forward to your response!`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold py-2.5 px-5 rounded-full transition"
              >
                <FaWhatsapp className="w-4 h-4" />
                Follow up on WhatsApp
              </a>
              <div>
                <Link href="/" className="text-orange-600 hover:underline text-sm">
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}