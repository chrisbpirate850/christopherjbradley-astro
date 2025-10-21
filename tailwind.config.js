/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: '#1e3a5f',
        gold: '#d4a574',
        red: '#8b3838',
      },
    },
  },
  plugins: [],
}
