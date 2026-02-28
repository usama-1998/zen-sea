# Zen Sea

A bespoke, handcrafted maritime experience designed with React and Next.js. This repository hosts a beautifully animated yacht charter landing page reflecting premium aesthetics with Next.js App Router setup.

## Features
- **Next.js 15 (App Router)** & **React 19**
- Carefully extracted Component-Based Architecture for easy customisations.
- Watercolor effects, wobble-borders, and bespoke nautical CSS.
- Highly optimized typography with `next/font/google`.
- Mobile-responsive navigation and interactive Modals.

## Recent Updates
- Completely redesigned the Footer to feature a mind-blowing ambient ocean glow and massive semantic typography watermark.
- Removed "Set Your Spirit Free." text from the CTA section for a cleaner layout.
- Fixed layout issues where the "Chapters Waiting" section boxes were cut off from the bottom by constraining flex image children.
- Resolved server hydration errors by properly handling client-side modal states.
- Replaced placeholder imagery with high-quality curated assets.
- Improved background SVG animations and visibility.
- Fixed broken footer navigation links to properly anchor to page sections.
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
