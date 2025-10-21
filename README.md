# Christopher J. Bradley - Astro Website

A modern, SEO-optimized personal website built with Astro, TypeScript, and Tailwind CSS.

## About

Personal website for Christopher J. Bradley, a Gulf War veteran, love advocate, family court reform activist, attorney, and civic educator focused on teaching liberty principles to families.

## Features

- **Astro Framework** - Fast, modern static site generation
- **TypeScript** - Full type safety
- **Tailwind CSS** - Utility-first styling with custom color palette
- **SEO Optimized** - Comprehensive meta tags, sitemap, and robots.txt
- **Mobile-First** - Responsive design for all screen sizes
- **Performance** - Optimized for speed and Core Web Vitals

## Color Palette

- **Navy**: `#1e3a5f` - Primary brand color
- **Gold**: `#d4a574` - Accent color
- **Red**: `#8b3838` - Secondary accent color

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to view the site.

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
├── public/              # Static assets
│   └── robots.txt      # Search engine crawling rules
├── src/
│   ├── components/     # Reusable Astro components
│   │   ├── Navigation.astro
│   │   └── Footer.astro
│   ├── layouts/        # Page layouts
│   │   └── Layout.astro
│   ├── pages/          # Routes (file-based routing)
│   │   ├── index.astro      # Home page
│   │   ├── about.astro      # About page
│   │   ├── projects.astro   # Projects page
│   │   └── contact.astro    # Contact page
│   └── styles/         # Global styles
│       └── global.css  # Tailwind imports
├── astro.config.mjs    # Astro configuration
├── tailwind.config.js  # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## SEO Features

- Automatic sitemap generation
- Robots.txt configuration
- Meta tags for all pages
- Open Graph tags for social sharing
- Twitter Card support
- Semantic HTML structure

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette.

### Content

- **Home**: `src/pages/index.astro`
- **About**: `src/pages/about.astro`
- **Projects**: `src/pages/projects.astro`
- **Contact**: `src/pages/contact.astro`

### Navigation

Edit `src/components/Navigation.astro` to modify navigation links.

## Deployment

This site can be deployed to:

- **Netlify** - Zero config deployment
- **Vercel** - Automatic builds from Git
- **Cloudflare Pages** - Fast global CDN
- **GitHub Pages** - Free hosting for static sites
- Any static hosting provider

## License

All rights reserved - Christopher J. Bradley

## Core Message

> "What if you are the person we are all waiting on?"

We could all live in peace on this earth if each of us simply made peace with every person we know. If we each decided to love everyone, it would be game over - love wins.

Love you all,
Chris
