# Momentum

A modern, fully responsive AI tool landing page built with cutting-edge web technologies.

## Tech Stack

- ⚡️ **Vite 6.4.1** - Lightning-fast build tool
- ⚛️ **React 19.2.0** with TypeScript - Latest React with full type safety
- 🎨 **Tailwind CSS 3.4.18** - Utility-first CSS framework
- 🎭 **Framer Motion 12.23.26** - Smooth animations and transitions
- 🌊 **Lenis 1.3.15** - Buttery smooth scroll experience
- 🎯 **Lucide React** - Beautiful, consistent icons
- 🧩 **shadcn/ui** - High-quality, accessible UI components

## Features

### 11 Fully Responsive Components

1. **Navbar** - Fixed header with mobile hamburger menu and full-screen overlay
2. **Hero** - Eye-catching hero section with YouTube video modal and CTA buttons
3. **Marquee** - Infinite scrolling logo showcase with seamless animation
4. **Features** - 5-card feature grid showcasing AI capabilities with images
5. **Discover** - Creative possibilities section with 3 feature highlights
6. **Simple Text** - Clean text-only section for messaging
7. **Testimonials** - Customer reviews with marquee animation on mobile/tablet, static grid on desktop
8. **Pricing** - Monthly/Annual toggle with 3 pricing tiers
9. **FAQ** - Accordion-style frequently asked questions
10. **CTA** - Final call-to-action with interactive video globe (drag-to-scrub)
11. **Footer** - Newsletter signup and link columns

### Responsive Design

- **Mobile-First Approach** - Optimized for all screen sizes
- **Breakpoints**: Mobile (default), Tablet/Desktop (lg: 1024px), Large Desktop (xl: 1280px+)
- **Adaptive Typography**: Headlines scale from 28px (mobile) → 48px (tablet) → 64px (desktop)
- **Smart Layouts**: 1-column mobile → 2-3 columns desktop
- **Mobile Optimizations**: Faster animations, adjusted spacing, hidden line breaks

### Animations

- Smooth scroll with Lenis integration
- Framer Motion animations throughout (fade-ins, slides, stagger effects)
- Interactive video globe with drag-to-scrub functionality
- Infinite marquee animations (testimonials and logo showcase)
- Accordion animations with icon rotation

## Getting Started

### Prerequisites

Node.js 18.20.8 or higher

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Fixed navigation with mobile menu
│   ├── Hero.tsx            # Hero section with video modal
│   ├── Marquee.tsx         # Infinite scrolling logos
│   ├── Features.tsx        # 5-card feature grid
│   ├── Discover.tsx        # 3-card feature highlights
│   ├── SimpleText.tsx      # Text-only section
│   ├── Testimonials.tsx    # Customer testimonials
│   ├── Pricing.tsx         # Pricing plans with toggle
│   ├── FAQ.tsx             # Accordion FAQs
│   ├── CTA.tsx             # Video globe CTA
│   ├── Footer.tsx          # Footer with newsletter
│   └── ui/                 # shadcn/ui components
├── hooks/
│   └── use-lenis.ts        # Lenis smooth scroll hook
├── lib/
│   └── utils.ts            # Utility functions
├── assets/                 # Images and videos
├── App.tsx                 # Main component composition
└── main.tsx                # Application entry point
```

## Responsive Breakpoints

- **Mobile**: < 1024px (default styles)
- **Tablet/Desktop**: ≥ 1024px (`lg:` prefix)
- **Large Desktop**: ≥ 1280px (`xl:` prefix)

## Typography Scale

- **Headlines**: 28px (mobile) / 48px (tablet) / 64px (desktop)
- **Subtitles**: 18px (mobile) / 20px (desktop)
- **Feature Titles**: 16px (mobile) / 20px (desktop)
- **Body Text**: 12px (mobile) / 16px (desktop)

## Customization

### Adding Components

Add new components to `src/components/` and import them in `src/App.tsx`.

### Styling

- Global styles: `src/index.css`
- Component-specific: Use Tailwind utility classes
- Responsive: Use `lg:` and `xl:` prefixes

### Animations

All animations use Framer Motion. Adjust `initial`, `whileInView`, and `transition` props to customize.

### Colors

- Primary Dark: `#020617`, `#030712`, `#030616`
- Text Gray: `#475569`
- Background: `#f8fafc`, `#f9fafb`, `#f1f5f9`
- Accent: Purple (`#a855f7` for Pro plan)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is built for demonstration purposes.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
