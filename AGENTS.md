# AGENTS.md - Personal Website/Portfolio 2026
## Project Overview
Personal website and professional portfolio for 2026, designed to showcase projects, skills, and career path with a modern and fluid user experience.
## Tech Stack
- **Framework:** [React 19](https://react.dev) (TypeScript)
- **Styling:** Modern Native CSS (CSS Next/Standard)
- **Build Tool:** [Vite](https://vitejs.dev)
- **i18n:** [i18next](https://www.i18next.com/) (EN/ES/FR)
- **Language:** TypeScript (TSX)
## Architecture Patterns
- **Modular Component Structure:** Each component must live in its own directory within `src/components/` or `src/features/`.
  - Example: `src/components/layout/Navbar/Navbar.tsx` and `src/components/layout/Navbar/Navbar.css`.
- **Component Pattern:** Strict use of **Arrow Functions** for functional component definitions.
- **Directory Layout:**
  - `src/components/common/[ComponentName]/`: Atomic reusable components (Button, Input).
  - `src/components/layout/[ComponentName]/`: Global structural components (Navbar, Footer).
  - `src/features/[FeatureName]/`: Application-specific modules.
  - `src/hooks/`: Shared custom hooks.
  - `src/styles/`: Global style configurations and variables.
## Code Style & Guidelines
- **Styling:** 
  - **Prohibited:** Tailwind CSS is strictly forbidden.
  - **Standard:** Use Modern Native CSS with a component-scoped approach.
  - **Global Variables:** Use CSS Custom Properties (variables) defined in `src/styles/variables.css` for colors, spacing, and consistent values.
  - **Naming:** Use semantic class names (e.g., `.navbar`, `.nav-logo`, `.nav-links`).
- **Naming Convention:**
  - **Folders:** `PascalCase` for component folders (e.g., `Navbar/`).
  - **Files:** `PascalCase` for component files (e.g., `Navbar.tsx`, `Navbar.css`).
  - **General Files:** `kebab-case` for non-component files (e.g., `variables.css`, `main.css`).
- **TypeScript:** Strict typing for props and states. Avoid using `any`.
## Current Goal
- **Task**: Implement internationalization (i18n) for EN/ES/FR.
- **Status**: Completed.
- **Context**: Achieved 100% translation coverage across all sections (Hero, About, Projects, Contact, Navbar, Footer). Refactored Navbar for better maintainability and integrated a minimal language selector.
