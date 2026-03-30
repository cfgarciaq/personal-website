# Project Context: Personal Website / Portfolio 2026

## Current Project State
The portfolio is a modern React 19 application built with Vite and TypeScript. It features a modular component structure, global CSS variables for styling, and a centralized technology logo system.

## Last Implemented Features
- **i18n Content Refinement**: Updated translation files (`en.json`, `es.json`, `fr.json`) with more professional and concise copy across all sections (Hero, About, Projects, Contact).
- **Navbar Style Refinement**: Enhanced the `LanguageSelector` buttons with a subtle border and hover effects for better visual feedback and consistency with the overall UI.
- **100% Translation Coverage**: Migrated Hero, Projects, and Contact sections to `i18next`. All UI strings, including project descriptions and status badges, are now localized in EN, ES, and FR.
- **Navbar Architecture Consolidation**: Simplified the Navbar architecture by consolidating sub-components into a single, maintainable file (`Navbar.tsx`), reducing project complexity while keeping the code modular through internal functional components.
- **Mobile UI Fixes**: Corrected the visibility of the mobile menu button by ensuring proper color contrast and explicit icon styling in `Navbar.css`.
- **Integrated Language Selector (UX Option B)**: Moved the language switcher from the footer to the Navbar. It now features a minimal design with EN/ES/FR codes, integrated into the desktop view and mobile overlay.
- **Internationalization (i18n) Foundation**: Implemented `i18next` with support for English, Spanish, and French. Added language detection.
- **Vercel Speed Insights Integration**: Added `@vercel/speed-insights` to monitor real-time performance and Core Web Vitals.
- **Centralized Links System**: Created `src/constants/Links.ts` as a Single Source of Truth for social media and identity URLs, ensuring consistency across the app.
- **Fix/LinkedIn URL**: Corrected LinkedIn profile URL from an incorrect reference (`https://linkedin.com/in/cfgarcia`) to the authentic profile (`https://linkedin.com/in/cfgarciaquiroga`) to ensure professional networking accuracy.
- **Vercel Analytics Integration**: Added `@vercel/analytics` to track visitor metrics and performance.
- **Contact Info Update**: Updated LinkedIn and GitHub profile URLs in the Contact section.
- **SMART REPAIR Integration**: Added the full-stack project card with "In Production" status, live link, and an external link icon for better UX.
- **TechLogos Refactor**: Renamed logo components (removed `Logo` suffix) and updated them to use CSS variables for theme-aware coloring.
- **AI Tech Stack**: Integrated **Kilo Code** and **GitHub Copilot** into the About section with custom brand colors (yellow glow for Kilo Code).
- **UX Improvements**: Added external link icons and hover effects to project titles.
- **Layout Refinement**: Redesigned the About section grid with a two-block layout (Left: Title + Text, Right: Full-height Tech Stack) for better visual balance.
- **Footer Restoration**: Restored the footer component with a dynamic copyright mark.
- **Logo Visibility Fixes**: Improved logo visibility in project tags on hover by adjusting stroke and text colors.

## Pending Technical Debt or Bugs
- **Unit Testing**: Components need comprehensive test coverage.
- **Performance Optimization**: Review image assets and SVG complexity.

## Next Immediate Steps
1. **Deployment**: Finalize Vercel deployment configuration.
2. **Content Expansion**: Add more detailed project descriptions or case studies.

## Core Identity References (DO NOT CHANGE)
- **LinkedIn:** https://www.linkedin.com/in/cfgarciaquiroga
- **GitHub:** https://github.com/cfgarciaq
- **Domain:** https://www.cfgarciaq.dev/
- **Full Name:** Carlos Felipe García Quiroga

## Infrastructure
- **Framework:** React 19 (TypeScript)
- **Styling:** Modern Native CSS
- **Build Tool:** Vite
- **Deployment:** Vercel

## Git Flow
- **Main Branch:** Production-ready code.
- **Develop Branch:** Integration branch.
- **Feature Branches**: `smart-repair` (current).
