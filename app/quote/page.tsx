'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Banknote, Landmark, CreditCard } from 'lucide-react';

export default function QuotePage() {
  const [step, setStep] = useState<'select' | 'details'>('select');
  const [selectedService, setSelectedService] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleServiceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService || !name || !email) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, service: selectedService, message: 'Quote request from website' }),
      });

      if (response.ok) {
        setStep('details');
      } else {
        const error = await response.json();
        alert(error.error || 'Something went wrong. Please try again.');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="bg-gradient-to-br from-[#0A192F] to-[#0F2A3F] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Request a Quote in Nairobi</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tell us what you need, and we’ll get back to you with a custom quote tailored for the Kenyan market.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-3xl">
        {step === 'select' ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What service do you need?</h2>
            <form onSubmit={handleServiceSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Service *</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-gray-700"
                >
                  <option value="">Select a service</option>
                  <option value="Software Development">Software Development</option>
                  <option value="Printing & Branding">Printing & Branding</option>
                  <option value="AI Design">AI‑Powered Design</option>
                  <option value="Training & Webinars">Training & Webinars</option>
                  <option value="Birthday Gallery Posters & Printing">Birthday Gallery Posters & Printing</option>
                  <option value="Photo Mounting & Framing">Photo Mounting & Framing</option>
                  <option value="Other">Other / Not sure</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Continue'}
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                <Banknote className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Thank you, {name}!</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                We’ve received your request for <strong>{selectedService}</strong>. Our team will contact you within 24 hours.
              </p>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-4">
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                <Landmark className="w-5 h-5 text-orange-600" /> Payment Information
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                If you’re ready to proceed, you can make a deposit via bank transfer. Use the details below:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg space-y-2 text-sm">
                <div className="flex justify-between"><span className="font-medium">Bank:</span><span>Equity Bank Kenya</span></div>
                <div className="flex justify-between"><span className="font-medium">Account Name:</span><span>Maogast Softworks Limited</span></div>
                <div className="flex justify-between"><span className="font-medium">Account Number:</span><span>1234567890</span></div>
                <div className="flex justify-between"><span className="font-medium">Branch:</span><span>Moi Avenue, Nairobi</span></div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 flex items-center gap-1">
                <CreditCard className="w-3 h-3" /> A 50% deposit is required to start work. Balance payable upon completion.
              </p>
            </div>

            <div className="mt-6 text-center">
              <Link href="/" className="text-orange-600 hover:underline">← Back to Home</Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}