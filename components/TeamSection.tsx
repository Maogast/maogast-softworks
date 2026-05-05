'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { Mail } from 'lucide-react'; // keep Mail if needed

const team = [
  {
    name: 'Stephen Magare',
    role: 'Full‑Stack Developer & AI Prompt Engineer',
    description: 'Architect of this website – built with Next.js, TypeScript, Tailwind CSS, and Resend. Expert in full‑stack development (Next.js, React, Node.js, Firebase, Supabase), AI prompt engineering, and poster design. Passionate about delivering high‑performance, user‑centric solutions.',
    image: '/team/stephen.jpeg',
    email: 'stephen@maogastsoftworks.com',
    social: {
      linkedin: 'https://linkedin.com/in/stephen-magare',
      github: 'https://github.com/maogast',
      twitter: 'https://twitter.com/stephenmagare',
    },
  },
  {
    name: 'Sacalivin Mocha',
    role: 'Senior Software Developer & DevOps Specialist',
    description: 'Senior developer with deep expertise in C#, Microsoft PowerApps, and Azure DevOps. Has successfully delivered numerous enterprise‑scale projects. Specialises in backend systems, REST APIs, cloud integration, and CI/CD pipelines. Committed to writing clean, maintainable, and scalable code.',
    image: '/team/sacalivin.jpeg',
    email: 'sacalivin@maogastsoftworks.com',
    social: {
      linkedin: 'https://linkedin.com/in/sacalivin-mocha',
      github: 'https://github.com/sacalivin',
      twitter: 'https://twitter.com/sacalivin',
    },
  },
  {
    name: 'John Orechi',
    role: 'Branding Expert & Visual Designer',
    description: 'Professional photographer and branding specialist. Expert in creating cohesive visual identities, high‑impact posters, and engaging social media graphics. Combines artistic vision with strategic thinking to help businesses stand out. Proficient in Adobe Creative Suite and modern design tools.',
    image: '/team/john.jpeg',
    email: 'john@maogastsoftworks.com',
    social: {
      linkedin: 'https://linkedin.com/in/john-orechi',
      github: 'https://github.com/johnorechi',
      twitter: 'https://twitter.com/johnorechi',
    },
  },
  {
    name: 'Peterson Kiiru',
    role: 'Brand Designer',
    description: 'Creative brand designer at Pemwaki De Arts, shaping visual identity and creative direction. Skilled in modern design principles and brand strategy, transforming ideas into compelling visuals that resonate with target audiences. Proficient in Adobe Photoshop, Illustrator, InDesign, and Lightroom.',
    image: '', // No image provided – will show initial letter "P"
    email: '', // Email not provided – omit or leave empty (email icon won't appear)
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
];

export default function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Meet the Team</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            A group of passionate creators building solutions that matter.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div
              key={member.name}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-square relative bg-gradient-to-br from-orange-100 to-orange-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      hoveredIndex === idx ? 'scale-105' : 'scale-100'
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
                    priority={idx === 0}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-6xl font-bold text-gray-400 dark:text-gray-500">
                    {member.name.charAt(0)}
                  </div>
                )}
                <div className={`absolute inset-0 bg-black/0 transition-colors duration-300 ${hoveredIndex === idx ? 'bg-black/10' : ''}`} />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-orange-600 font-medium mt-1">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm leading-relaxed">
                  {member.description}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex gap-3">
                    {member.social.linkedin && member.social.linkedin !== '#' && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-orange-600 transition-all hover:scale-110"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.github && member.social.github !== '#' && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-orange-600 transition-all hover:scale-110"
                        aria-label="GitHub"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.twitter && member.social.twitter !== '#' && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-orange-600 transition-all hover:scale-110"
                        aria-label="Twitter"
                      >
                        <FaTwitter className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-xs text-gray-400 hover:text-orange-600 transition-colors flex items-center gap-1"
                    >
                      <Mail className="w-3 h-3" />
                      Email
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}