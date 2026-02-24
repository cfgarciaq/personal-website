# AGENTS.md - Personal Website/Portfolio 2026
## Project Overview
Personal website and professional portfolio for 2026, designed to showcase projects, skills, and career path with a modern and fluid user experience.
## Tech Stack
- **Framework:** [React 19](https://react.dev) (TypeScript)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **Build Tool:** [Vite](https://vitejs.dev)
- **Language:** TypeScript (TSX)
## Architecture Patterns
- **Feature-based Structure:** Code organization by functionality within `src/features/` to improve scalability.
- **Component Pattern:** Strict use of **Arrow Functions** for functional component definitions.
- **Directory Layout:**
  - `src/components/common/`: Atomic reusable components (buttons, inputs).
  - `src/components/layout/`: Global structural components (Navbar, Footer).
  - `src/features/`: Application-specific modules.
  - `src/hooks/`: Shared custom hooks.
  - `src/styles/`: Global style configurations.
## Code Style & Guidelines
- **Styling:** Exclusive use of **Tailwind CSS v4** utilities. Avoid plain CSS (Vanilla CSS) unless strictly necessary for complex animations or library overrides.
- **Naming Convention:**
  - **Files and Folders:** `kebab-case` (e.g., `nav-bar.tsx`, `user-profile/`).
  - **Components (React):** `PascalCase` for internal declaration (e.g., `const NavBar = () => ...`).
- **TypeScript:** Strict typing for props and states. Avoid using `any`.
## Current Goal
- **Task:** Create the `Navbar` component in `src/components/layout/`.
- **Status:** Pending.
- **Context:** The Navbar should follow the modern portfolio design and leverage Tailwind v4 capabilities.