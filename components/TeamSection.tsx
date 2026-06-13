'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Mail, X } from 'lucide-react';

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
    image: '/team/peterson.jpeg',
    email: '',
    social: { linkedin: '#', github: '#', twitter: '#' },
  },
  {
    name: 'Ian Cena',
    role: 'Team Lead – Content Management & Branding',
    description: 'Strategic lead for content management, digital branding, and print production. Brings a wealth of experience in developing cohesive brand narratives across web, social media, and physical merchandise. Passionate about helping businesses tell their story and ensuring every piece of content – from a blog post to a printed T‑shirt – reflects excellence and consistency.',
    image: '/team/ian.jpeg',
    email: 'ian@maogastsoftworks.com',
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
];

export default function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);

  const shareOnWhatsApp = (member: typeof team[0]) => {
    const text = `Meet ${member.name} – ${member.role} at Maogast Softworks. ${member.description.substring(0, 200)}... View the full team: https://maogastsoftworks.com/about#team`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <section className="py-20 bg-gray-50 dark:bg-gray-900" id="team">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Meet the Team</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              A group of passionate creators building solutions that matter.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div
                key={member.name}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col h-full"
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

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-orange-600 font-medium mt-1">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm leading-relaxed flex-1">
                    {member.description}
                  </p>

                  <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
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
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-orange-100 dark:hover:bg-orange-900/50 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-md transition flex items-center gap-1"
                    >
                      <FaWhatsapp className="w-3 h-3" /> Share
                    </button>
                  </div>
                  {member.email && (
                    <div className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-xs text-gray-400 hover:text-orange-600 transition-colors flex items-center gap-1"
                      >
                        <Mail className="w-3 h-3" />
                        {member.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for sharing */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full max-h-[90vh] overflow-auto shadow-2xl">
            <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-bold">Share Profile</h3>
              <button onClick={() => setSelectedMember(null)} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 relative rounded-full overflow-hidden mb-4 bg-gray-200 dark:bg-gray-700">
                  {selectedMember.image ? (
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-gray-500">
                      {selectedMember.name.charAt(0)}
                    </div>
                  )}
                </div>
                <h4 className="text-2xl font-bold">{selectedMember.name}</h4>
                <p className="text-orange-600 font-medium">{selectedMember.role}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm">{selectedMember.description}</p>
                <button
                  onClick={() => {
                    shareOnWhatsApp(selectedMember);
                    setSelectedMember(null);
                  }}
                  className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center gap-2"
                >
                  <FaWhatsapp className="w-5 h-5" /> Share on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}