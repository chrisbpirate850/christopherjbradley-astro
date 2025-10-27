/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand colors - consistent with Liberty's Principles Media and FairBill
        'liberty-navy': '#1e3a8a',
        'liberty-burgundy': '#991b1b',
        'liberty-gold': '#f59e0b',
        'liberty-cream': '#fef3c7',
        // Legacy aliases for backwards compatibility
        navy: '#1e3a8a',
        gold: '#f59e0b',
        red: '#991b1b',
      },
      backgroundImage: {
        'gradient-liberty': 'linear-gradient(135deg, #1e3a8a 0%, #991b1b 100%)',
        'gradient-gold': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        'gradient-subtle': 'linear-gradient(to bottom, #fef3c7 0%, #ffffff 100%)',
      },
      ringColor: {
        'liberty-gold': '#f59e0b',
        'liberty-navy': '#1e3a8a',
        'liberty-burgundy': '#991b1b',
      },
    },
  },
  plugins: [],
}
