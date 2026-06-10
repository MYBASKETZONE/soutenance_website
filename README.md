# MYBASKETZONE Graduation Drop Landing Page

A modern, high-performance landing page and pre-order application built to help students in Cotonou secure their footwear for graduation day. The application allows students to browse the season's collection, select their size, and place a pre-order reservation to avoid last-minute stock shortages.

## Overview

This project was originally designed as a vanilla HTML layout and has been migrated into a modular React environment powered by Vite. It uses a bespoke design system featuring a clean, editorial aesthetic, complemented by SVG-based hand-drawn doodles and annotations to guide the user's attention.

## Features

- **Pre-order Shopping Cart**: Full shopping cart functionality allowing users to browse shoe models, select sizes, adjust quantities, and review their order.
- **Scroll-Reveal Animations**: Intersection Observer-based entry animations for smooth, synchronized page reveals.
- **Sticky Progress Tracking**: A horizontal scrolling section ("Le parcours") that pins to the viewport, guiding the user through the 4-step order process.
- **Interactive Doodles**: Hand-drawn SVG highlights, scribbles, stamps, and notes dynamically rendered via the `doodles.jsx` component.
- **Countdown Timers**: Real-time countdowns tracking the deadline for pre-orders.
- **Magnetic Buttons**: Interactive call-to-action buttons that respond smoothly to cursor movements.
- **Responsive Design**: Fluid typography and adaptive layouts that scale gracefully from desktop down to mobile devices.

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Language**: JavaScript / TypeScript (with `allowJs` enabled for ES Modules)
- **Styling**: Vanilla CSS, leveraging CSS custom properties for a cohesive design system and dark mode support.
- **Icons**: Custom inline SVG icons and UI elements.

## Project Structure

```text
src/
├── App.tsx                 # Main application entry point and component composition
├── App.css                 # Import orchestrator for all stylesheets
├── index.css               # Base CSS resets and overrides
├── main.tsx                # React DOM root render
├── components/             # Reusable UI modules
│   ├── doodles.jsx         # SVG rendering components (Mark, Note, Scribble, etc.)
│   ├── sections-body.v2.jsx# Main content sections (Problem, Solution, Principle)
│   ├── sections-end.v2.jsx # Footer, testimonials, and countdown climax
│   ├── sections-top.v2.jsx # Header, navigation, and hero section
│   ├── shop.jsx            # Product definitions, cart context, and drawer UI
│   └── ui.jsx              # Core UI utilities (Icons, Magnetic buttons, Hooks)
├── script/
│   └── doodles-data.js     # Path definitions for hand-drawn SVG doodles
└── styles/                 # Modular CSS architecture
    ├── components.css      # Component-specific styles (Cards, drawers)
    ├── doodles.css         # Styling for SVG doodles and handwritten fonts
    ├── sections.css        # Layout styling for individual page sections
    └── styles.css          # Design system tokens, typography, and utility classes
```

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository and navigate to the project root.
2. Install the dependencies:

```bash
npm install
```

### Development

To start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available locally (usually at `http://localhost:5173/`).

### Production Build

To build the application for production deployment:

```bash
npm run build
```

This will run the TypeScript compiler and Vite's build process, outputting optimized static assets into the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Architecture Notes

The application uses ES modules for all its React components. The product data, size arrays, and context providers are managed centrally in `shop.jsx`. The UI is divided logically across top, body, and end sections to maintain readable and maintainable component files. Custom hooks like `useReveal` and `useCountdown` (found in `ui.jsx`) handle DOM interactions and state updates outside the main component render loops.

## License

Private and proprietary to MYBASKETZONE. All rights reserved.
