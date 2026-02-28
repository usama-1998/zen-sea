# Zen Sea

A bespoke, handcrafted maritime experience designed with React and Next.js. This repository hosts a beautifully animated yacht charter landing page reflecting premium aesthetics with Next.js App Router setup.

## Features
- **Next.js 15 (App Router)** & **React 19**
- Carefully extracted Component-Based Architecture for easy customisations.
- **Premium Dark Glassmorphism Theme**: Cohesive cinematic design featuring deep slate and navy tones, `#C5A880` gold accents, and frosted glass elements across every section.
- **Interactive Micro-Animations**: Advanced parallax effects, dynamic cursor lighting, and `IntersectionObserver` scroll reveals for an immersive experience.
- Highly optimized typography with `next/font/google` (Playfair Display, Caveat, Inter).
- Mobile-responsive navigation and fully-styled interactive Modals.

## Recent Updates
- **Hero Section Enhancements**: Updated hero card images to feature yacht-relevant destinations, integrated a sleek Play icon overlay directly on the active card, and implemented a custom golden trailing cursor effect.
- **Refined Design Philosophy**: Transitioned to a cleaner, sophisticated aesthetic featuring rounded glass cards, elegant ambient orbs, and consistent dark backgrounds across all sections.
- **Minimal & Impactful Footer**: Redesigned the footer for a minimal but mind-blowing user experience, featuring deep ambient ocean glows and clean typography.
- **Enhanced UI Consistency**: Removed oversized decorations and film grain overalls in favor of refined typography, compact button styles, and cohesive dark layouts.
- **Responsive & Layout Fixes**: Resolved layout issues (e.g., cut-off cards) and balanced Hero element sizing to ensure a perfect presentation across devices.
- **Site-Wide Dark Theme**: Complete overhaul to ensure all sections seamlessly transition with deep '#050B14' backgrounds and edge-to-edge dark formatting.
- **Interactive Micro-Animations**: Advanced parallax effects, dynamic cursor lighting, and refined Hero intros with animated typography.

## Getting Started

First, install the dependencies if they aren't already:
```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app/page.tsx` - Main assembly page
- `src/components/` - Extracted UI sections (Hero, Navigation, Fleet, About, etc.)
- `src/hooks/` - Contains the `useScrollReveal` IntersectionObserver hook
- `src/app/globals.css` - Where all the bespoke utilities and tailwind mix-ins live.
