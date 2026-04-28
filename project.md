# Project Context

## Identity
- **Repo:** riverxapp/zero-to-one-lcb
- **Branch:** main
- **Code Type:** vite

## Brand Context
- **Brand:** Zero To
- **Positioning:** A fast React single-page product experience that keeps workflows intuitive and responsive.
- **Audience:** Primary product users

## Product Vision
Zero To is designed to define and execute product scope via a fast, intuitive React SPA, emphasizing user-visible outcomes in coherent, iterative steps. Each development request delivers explicit acceptance criteria and visible value.

---

## Scope Foundations

### Core Problem
Enable rapid, scoped execution of user-driven features with visible impact.

### Goals
- Maintain requirements coherence across requests
- Deliver value in small, actionable iterations

### Constraints
- Scope changes only to requested surfaces
- Preserve existing architecture/flows

### Non-Goals
- Avoid rebuilding unrelated modules

### Success Metrics
- Each request documents clear acceptance criteria and done conditions

### Roles
- Owner
- Member

### Core Entities
- Primary workspace entity
- User profile

### Integrations
- None

---

## Full Build Roadmap

1. **Request 1:** Brand alignment, SPA shell, core route/page surfaces
2. **Request 2:** Core entity CRUD, state/validation
3. **Request 3:** Collaboration, role-awareness, UX resilience
4. **Request 4:** Reporting, automations, performance/quality polish

---

## Request 1: Ready to Implement

**Brand:** Zero To  
**Positioning:** Fast, intuitive, responsive React SPA experience  
**Scope:** Branding/content alignment and foundational user-visible surfaces

### Implementation Jobs

1. **App Shell & Entry**
    - Align `src/main.tsx` and `src/App.tsx` bootstrap and shell copy for product positioning.
2. **Core Pages**
    - Create foundational page surfaces and define initial route/page structure.
3. **Shared Components**
    - Establish reusable TSX primitives/sections for consistent UI.
4. **Primary Workflows**
    - Wire baseline state handling (loading/empty/error/success) for initial user journey.

---

## README Template Context

**Base Commands:**
- `pnpm install` — install dependencies
- `pnpm run dev` — start development server
- `pnpm run build` — build for production

> RiverX base template: Production-ready Vite + React + TypeScript + Tailwind + shadcn/ui.