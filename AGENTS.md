# TimeTech Landing — Agent Guidelines

## Build / Lint / Dev Commands

```bash
npm run dev       # Start Vite dev server (http://localhost:5173)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # ESLint on all {js,jsx} files (ESLint v10 flat config)
```

There is no test framework. No single-test command exists.

## Stack

| Layer | Choice |
|-------|--------|
| Framework | React 19 with JSX (`.jsx` files) |
| Bundler | Vite 8 |
| CSS | TailwindCSS v4 (`@import "tailwindcss"` + `@theme` directive) |
| Animations | Framer Motion v12 |
| Linter | ESLint v10 flat config (recommended + react-hooks + react-refresh) |
| Type safety | None — plain JavaScript, no TypeScript |

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── TechStack.jsx
│   ├── BeforeAfter.jsx
│   ├── Services.jsx
│   ├── HowIWork.jsx
│   ├── AboutTimeTech.jsx
│   ├── FAQ.jsx
│   ├── CTA.jsx
│   └── Footer.jsx
├── App.jsx         # Root component — assembles all sections
├── index.css       # Tailwind imports + @theme custom design tokens
├── data.js         # All static content (services, FAQs, tech stack, etc.)
└── main.jsx        # Entry point
```

## Code Style Guidelines

### Imports
- Group by origin: React/Framer Motion first, then local components, then data.
- No blank lines between imports of the same group; one blank line between groups.
- Omit file extensions for `.jsx` imports.
- Only import what you use.

```jsx
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

import Navbar from './components/Navbar'
import { SERVICES } from './data'
```

### Exports
- Every component uses `export default function ComponentName()`.
- Utility/helper functions and data constants use named `export`.
- Never mix default and named exports in the same file except for data files.

### Component Structure
```jsx
export default function ComponentName() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} ...>
      {/* content */}
    </section>
  )
}
```

### Naming Conventions
- **Components**: PascalCase (`Navbar`, `BeforeAfter`, `HowIWork`)
- **Files**: PascalCase matching the component name (`Navbar.jsx`, `HowIWork.jsx`)
- **Variables/functions**: camelCase (`isInView`, `mobileOpen`, `setScrolled`)
- **Constants**: UPPER_SNAKE for magic values, PascalCase for data arrays of objects
- **Data arrays**: UPPER_SNAKE when defined locally (`NAV_LINKS`, `FAQS`, `SERVICES`)
- **CSS classes**: Tailwind utility classes only — no custom CSS class names
- **Event handlers**: `onToggle`, `onClick`, `handleXxx` pattern

### Formatting
- No semicolons.
- Indent with 2 spaces.
- Prefer single quotes for strings.
- Trailing commas in multi-line arrays/objects.
- JSX closing tags on their own line for multi-line elements.
- Template literals only when interpolating; plain strings otherwise.
- Arrow functions for inline handlers: `onClick={() => setOpen(!open)}`.

### TailwindCSS v4 Conventions
All custom design tokens are defined in `src/index.css` via `@theme`:

```css
@theme {
  --color-bg: #0B0F14;
  --color-surface: #111827;
  --color-accent: #06D6A0;
  --color-accent-light: #2DD4B8;
  --color-accent-glow: rgba(6, 214, 160, 0.15);
  --color-text: #F9FAFB;
  --color-text-secondary: #9CA3AF;
  --color-border: rgba(255, 255, 255, 0.08);
  --font-sans: 'Inter', ...;
  --font-display: 'Satoshi', ...;
}
```

Use these tokens directly in className strings: `bg-bg`, `text-accent`, `border-border`, `font-display`, `text-text-secondary`, `bg-surface/30`.

Use `/opacity` suffix for transparency variants: `bg-accent/10`, `border-accent/20`, `text-accent/40`.

Layout: `max-w-6xl mx-auto px-6` for section containers. `gap-4`, `gap-5`, `gap-8` for grid/flex spacing.

### Framer Motion Patterns

**Scroll-triggered entrance** (standard pattern):
```jsx
const ref = useRef(null)
const isInView = useInView(ref, { once: true, margin: '-100px' })

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.5, delay: i * 0.08 }}
>
```

**Staggered children**: Use `delay: i * 0.08` (services grid) or `delay: i * 0.15` (step cards).

**Accordion pattern** (used in FAQ):
```jsx
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
```

**Hover transitions**: Use `transition-all duration-300` or `duration-500` on the element, and `group-hover:` variants for child-to-parent hover effects.

### Hardcoded RGBA Values
When using shadow glows that reference the accent color, hardcode the RGBA value directly:

```jsx
hover:shadow-[0_0_32px_-8px_rgba(6,214,160,0.5)]
```

If the accent color changes, update all hardcoded RGBA values to match `--color-accent`.

### Inline SVGs
Icons are inlined as JSX `<svg>` elements. Always include `viewBox`, `fill="none"`, `stroke="currentColor"`, `strokeWidth="2"`, `strokeLinecap="round"`, `strokeLinejoin="round"`. Color is inherited via `className="text-text-secondary"`.

### Responsive Design
Mobile-first. Use `md:`, `lg:` breakpoints to override mobile defaults.
- Mobile default → `sm:` → `md:` → `lg:`
- Text: `text-sm md:text-base` or `text-3xl md:text-4xl`
- Grid: `grid sm:grid-cols-2 lg:grid-cols-3`
- Hide on mobile: `hidden md:flex`

### Data Management
All static content lives in `src/data.js`. Component-level constants (nav links, FAQs, steps) are defined in the component file as `UPPER_CASE` arrays. Never repeat data across files.

### Error Handling
- No try/catch in the codebase (no async operations).
- No error boundaries defined.
- Add error boundaries only when introducing data fetching or async logic.
- Console.log is acceptable during development; remove before production.

### What NOT to Do
- Do NOT add comments to code unless explaining a non-obvious design decision.
- Do NOT use TypeScript — this project is plain JS.
- Do NOT use CSS modules or styled-components — Tailwind only.
- Do NOT import from `src/index.css` in components (it's globally injected by Vite).
- Do NOT use `any`, `as`, or TypeScript-specific syntax.
- Do NOT add new npm packages without strong justification.
- Do NOT create generic "utils" or "helpers" files — inline simple logic.
