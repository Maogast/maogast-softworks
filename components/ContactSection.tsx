import Link from 'next/link';

export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Let’s Work Together</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Have a project in mind? Reach out – we’d love to help.
        </p>
        <div className="mt-8">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}