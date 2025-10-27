# Christopher J. Bradley Brand Style Guide

## Brand Colors

### Primary Palette
```css
--liberty-navy: #1e3a8a      /* Primary brand color - headers, text */
--liberty-burgundy: #991b1b  /* Accent color - CTAs, emphasis */
--liberty-gold: #f59e0b      /* Highlight color - links, hover states */
--liberty-cream: #fef3c7     /* Background accent - subtle sections */
```

### Color Usage
- **Navy (#1e3a8a)**: Main headings, navigation text, primary text
- **Burgundy (#991b1b)**: Secondary headings, gradient endpoints, important CTAs
- **Gold (#f59e0b)**: Interactive elements, hover states, links, focus rings
- **Cream (#fef3c7)**: Hero backgrounds, section accents, card backgrounds

### Dark Mode Colors
- Background: `#0f172a` (slate-950)
- Text: `#f1f5f9` (slate-100)
- Borders: `#334155` (slate-700)
- Maintain gold (#f59e0b) for accents in dark mode

## Gradients

### Primary Gradient (Liberty Gradient)
```css
background: linear-gradient(135deg, #1e3a8a 0%, #991b1b 100%);
```
Use for: Hero sections, CTAs, featured cards

### Gold Gradient
```css
background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
```
Use for: Buttons, hover effects, special emphasis

### Subtle Background Gradient
```css
background: linear-gradient(to bottom, #fef3c7 0%, #ffffff 100%);
```
Use for: Hero section backgrounds, page sections

## Typography

### Font Stack
```css
font-family: ui-sans-serif, system-ui, sans-serif,
             'Apple Color Emoji', 'Segoe UI Emoji',
             'Segoe UI Symbol', 'Noto Color Emoji';
```

### Font Sizes (Tailwind Scale)
- **Headings H1**: `text-4xl sm:text-5xl md:text-6xl` (responsive)
- **Headings H2**: `text-3xl font-bold`
- **Headings H3**: `text-2xl font-bold`
- **Body Text**: `text-base` or `text-lg`
- **Small Text**: `text-sm`

### Font Weights
- Bold: `font-bold` (700) - headings
- Semibold: `font-semibold` (600) - subheadings
- Medium: `font-medium` (500) - navigation, labels
- Normal: `font-normal` (400) - body text

## Interactive Elements

### Buttons

#### Primary Button
```html
<button class="px-6 py-3 bg-gradient-liberty text-white font-medium
               rounded-md hover:-translate-y-0.5 hover:shadow-xl
               transition-all duration-300">
  Button Text
</button>
```

#### Secondary Button
```html
<button class="px-6 py-3 border-2 border-liberty-navy text-liberty-navy
               bg-white hover:bg-liberty-navy hover:text-white
               rounded-md transition-colors">
  Button Text
</button>
```

#### Gold Accent Button
```html
<button class="px-6 py-3 bg-liberty-gold text-white font-semibold
               rounded-md hover:bg-[#d97706] hover:shadow-lg
               transition-all">
  Button Text
</button>
```

### Links
```html
<a class="text-liberty-gold hover:text-[#d97706] hover:underline
          transition-colors">
  Link Text
</a>
```

### Cards/Project Tiles
```html
<div class="p-6 bg-white dark:bg-slate-800 rounded-lg border-2
            border-gray-200 dark:border-slate-700
            hover:border-liberty-gold hover:shadow-lg
            transition-all duration-300 group">
  <!-- Card content -->
</div>
```

## Spacing & Layout

### Container Widths
- **Max Width**: `max-w-7xl` (1280px) for main content
- **Narrow Content**: `max-w-4xl` (896px) for text-heavy pages
- **Padding**: `px-4 sm:px-6 lg:px-8` (responsive)

### Section Spacing
- **Vertical**: `py-16` or `py-24` for sections
- **Between Elements**: `mb-6`, `mb-8`, `mb-12` depending on importance

## Animations & Transitions

### Standard Transitions
```css
transition-all duration-300
transition-colors duration-200
```

### Hover Effects
- **Lift Effect**: `hover:-translate-y-1`
- **Shadow Growth**: `hover:shadow-lg` or `hover:shadow-xl`
- **Color Shift**: Use gold on hover for interactive elements

### Custom Animations
```css
/* Fade In */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide Up */
@keyframes slide-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```

## Accessibility Requirements

### Skip Link (Required on all pages)
```html
<a href="#main-content"
   class="sr-only focus:not-sr-only focus:absolute focus:top-4
          focus:left-4 focus:z-50 focus:bg-liberty-gold
          focus:text-white focus:px-4 focus:py-2 focus:rounded-lg
          focus:font-semibold">
  Skip to main content
</a>
```

### Focus States
All interactive elements must have visible focus states:
```css
focus:outline-none focus:ring-2 focus:ring-liberty-gold focus:ring-offset-2
```

### ARIA Labels
- Add `aria-label` to icon-only buttons
- Use `role="banner"` for headers
- Use `role="navigation"` for nav elements
- Add `aria-expanded` for mobile menus

### Minimum Touch Targets
- Mobile buttons: `min-h-[44px] min-w-[44px]`
- Links in navigation: adequate padding

## SEO Requirements

### Meta Tags (Required on all pages)
```html
<!-- Primary Meta Tags -->
<title>Page Title | Christopher J. Bradley</title>
<meta name="title" content="Page Title | Christopher J. Bradley">
<meta name="description" content="150-160 character description">
<meta name="keywords" content="relevant, keywords, here">
<meta name="author" content="Christopher J. Bradley">
<link rel="canonical" href="https://christopherjbradley.com/page">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://christopherjbradley.com/page">
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Description for social sharing">
<meta property="og:image" content="https://christopherjbradley.com/og-image.jpg">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Page Title">
<meta name="twitter:description" content="Description for social sharing">
```

### Structured Data (JSON-LD)
Include Person schema on main pages:
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Christopher J. Bradley",
  "jobTitle": "Gulf War Veteran, Love Advocate, Civic Educator",
  "description": "Teaching liberty principles to families",
  "url": "https://christopherjbradley.com"
}
```

### AI Readability
1. **Semantic HTML**: Use proper heading hierarchy (h1 → h2 → h3)
2. **Alt Text**: Descriptive alt attributes on all images
3. **Clear Structure**: Main, header, nav, article, section tags
4. **Descriptive Links**: Avoid "click here" - use descriptive text
5. **Language Tag**: `<html lang="en">`

## Component Patterns

### Navigation Header
```astro
<header class="border-b border-liberty-navy/10 dark:border-slate-700">
  <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <!-- Brand -->
      <a href="/" class="text-xl font-bold text-liberty-navy
                        dark:text-slate-100 hover:text-liberty-gold
                        transition-colors">
        Christopher J. Bradley
      </a>
      <!-- Navigation items -->
    </div>
  </nav>
</header>
```

### Hero Section
```astro
<section class="bg-gradient-to-b from-liberty-cream/30 to-white
                dark:from-slate-900 dark:to-slate-950">
  <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
    <h1 class="text-4xl font-bold text-liberty-navy dark:text-slate-100
               sm:text-5xl md:text-6xl">
      Heading
    </h1>
  </div>
</section>
```

### Footer
```astro
<footer class="bg-liberty-navy dark:bg-slate-950 text-white">
  <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <!-- Footer content -->
  </div>
</footer>
```

## Quick Reference

### Color Variables for Copy/Paste
```
Navy:     #1e3a8a
Burgundy: #991b1b
Gold:     #f59e0b
Cream:    #fef3c7
```

### Common Class Combinations
- **Page container**: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
- **Section spacing**: `py-16 sm:py-20 lg:py-24`
- **Card**: `p-6 rounded-lg border-2 border-gray-200 hover:border-liberty-gold transition-all`
- **Heading**: `text-3xl font-bold text-liberty-navy dark:text-slate-100 mb-6`
- **Body text**: `text-lg text-gray-700 dark:text-slate-300 leading-relaxed`

## Brand Consistency Checklist

- [ ] Use exact hex values for brand colors
- [ ] Include skip link on every page
- [ ] Add focus states to all interactive elements
- [ ] Use gradient backgrounds for hero/CTA sections
- [ ] Implement hover effects (lift + shadow)
- [ ] Add smooth transitions (300ms standard)
- [ ] Include comprehensive meta tags
- [ ] Add structured data (JSON-LD)
- [ ] Use semantic HTML5 elements
- [ ] Ensure minimum 44px touch targets
- [ ] Test dark mode compatibility
- [ ] Validate accessibility (WCAG 2.1 AA)
