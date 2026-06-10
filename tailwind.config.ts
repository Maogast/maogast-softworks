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
      colors: {
        primary: '#F97316',
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