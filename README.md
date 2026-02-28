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
- **Site-Wide Dark Theme Layout**: Completely overhauled the entire landing page, ensuring all sections (Hero, About, Experiences, Fleet, Features, Footer, Navigation) seamlessly transition with deep '#050B14' backgrounds and edge-to-edge dark layouts.
- Completely redesigned the Footer to feature a mind-blowing ambient ocean glow and massive semantic typography watermark.
- Upgraded the Hero section with letterbox cinematic intros, following cursor glow, and animated typography.
- Refined the About and Experiences sections with full-width dark containers and premium image treatments (film grain, contrast filters).
- Overhauled the Modal design into a split-layout dark glass pane with stylized form inputs.
- Resolved server hydration errors by properly handling client-side modal states.

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
