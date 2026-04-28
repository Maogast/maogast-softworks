import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-3">Get in Touch</h2>
            <p>📞 +254 768 564 533</p>
            <p>✉️ info@maogastsoftworks.com</p>
            <p className="mt-4">📱 WhatsApp: <a href="https://wa.me/254768564533" className="text-orange-600">Click to chat</a></p>
          </div>
        </div>
        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
}