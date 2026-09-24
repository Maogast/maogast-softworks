import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      /* ✅ Custom breakpoint for small phones */
      screens: {
        xs: '420px',
      },

      colors: {
        primary: '#F97316',
      },

      /* ✅ Font family maps to our next/font CSS variables */
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },

      /* ✅ Brand colors used across the site */
      backgroundColor: {
        'navy-brand': '#0A192F',
        'navy-deep': '#0F2A3F',
      },
      textColor: {
        'navy-brand': '#0A192F',
      },

      /* ✅ Subtle custom animations (used in Header/Hero/Footer) */
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'float-3d': {
          '0%, 100%': { transform: 'translateY(0) rotateX(0) rotateY(0)' },
          '50%': { transform: 'translateY(-12px) rotateX(2deg) rotateY(2deg)' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#F97316' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease forwards',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'float-3d': 'float-3d 5s ease-in-out infinite',
        blink: 'blink 0.8s step-end infinite',
      },

      typography: ({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-headings': theme('colors.orange.600'),
            '--tw-prose-links': theme('colors.orange.600'),
            '--tw-prose-bold': theme('colors.orange.700'),
            '--tw-prose-body': theme('colors.gray.700'),
            '--tw-prose-invert-body': theme('colors.gray.300'),
            '--tw-prose-invert-headings': theme('colors.orange.400'),
            '--tw-prose-invert-links': theme('colors.orange.400'),
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;