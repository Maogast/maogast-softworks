import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Maogast Softworks Ltd',
  description: 'Read the official terms and conditions governing the use of Maogast Softworks’ software, printing, design, and consultancy services in Kenya.',
  alternates: {
    canonical: 'https://maogastsoftworks.com/terms',
  },
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A192F] to-[#0F2A3F] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="termsGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#F97316" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#termsGrid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Governing the use of our software, design, and printing services for clients in Nairobi and across Kenya.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10 space-y-8">
          <p className="text-gray-500 dark:text-gray-400 text-sm italic">Last Updated: July 2026</p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              By engaging Maogast Softworks Limited (“Maogast Softworks”, “we”, “us”, or “our”) for services including but not limited to Software Development, AI-Powered Design, Printing & Branding, and Content Management, you agree to be bound by these Terms & Conditions. If you do not agree, please refrain from using our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Services Provided</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We provide bespoke technology and creative solutions tailored to the Kenyan market. Our services include:
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Custom software and web/mobile application development.</li>
              <li>AI-Powered graphic design and prompt engineering.</li>
              <li>3D signage, printing, and corporate branding materials.</li>
              <li>Digital content strategy, social media management, and training.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Intellectual Property & Ownership</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>For Software & Design:</strong> Maogast Softworks retains full copyright and ownership of all source code, designs, and concepts until the final payment (balance) is received in full. Upon full settlement, full intellectual property rights are transferred to the client.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
              <strong>For AI-Generated Elements:</strong> Maogast Softworks uses proprietary prompt engineering to curate AI-generated visuals. Upon full payment, the rights to the finalized, edited, and approved asset are transferred to the client.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
              <strong>For Printing & 3D Signage:</strong> Physical products remain the property of Maogast Softworks until full payment is finalized. Custom 3D molds and design files produced for a client may be retained by Maogast Softworks for archival and portfolio purposes unless stated otherwise in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Payment Terms</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We operate on a standard 50% deposit policy to secure project dates and commence work. The remaining 50% balance is due upon project completion and delivery. Payment can be made via:
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
              <li><strong>M-Pesa:</strong> Paybill 522533, Account 8091774.</li>
              <li><strong>Bank Transfer:</strong> KCB Bank (Moi Avenue), Account Name: MAOGAST SOFTWORKS LIMITED, Account Number: 1352136236.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
              Work will not commence until the deposit is received. Late payments may result in project holds and the suspension of delivery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Client Responsibilities</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The client agrees to provide accurate, timely information, necessary assets (logos, text, images), and constructive feedback during the project lifecycle. Delays caused by client communication failures are the sole responsibility of the client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Maogast Softworks shall not be liable for any indirect, incidental, or consequential damages arising from the use of our software, designs, or printed materials. Our liability is limited to the amount paid by the client for the specific project in question.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Governing Law</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              These Terms & Conditions shall be governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the Kenyan courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Modifications to Terms</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Maogast Softworks reserves the right to update or modify these Terms & Conditions at any time without prior notice. Continued use of our services constitutes acceptance of the new terms.
            </p>
          </section>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <Link href="/" className="text-orange-600 hover:underline">← Back to Home</Link>
          </div>
        </div>
      </div>
    </>
  );
}