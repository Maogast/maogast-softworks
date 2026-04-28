import TeamSection from '@/components/TeamSection';

export default function AboutPage() {
  return (
    <>
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl font-bold">About Maogast Softworks</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            We are a team of developers, designers, and creatives dedicated to delivering exceptional software, printing, and AI-powered design.
          </p>
        </div>
      </section>
      <TeamSection />
    </>
  );
}