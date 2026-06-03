# Portfolio Landing Page

A personal portfolio website for a **Full-Stack Engineer** and **Founder of PolyFlow**, built with **React**, **TypeScript**, and **Vite**. The site highlights professional experience, featured projects, an overview of PolyFlow, and a contact form connected to **Supabase** for direct outreach.

## Overview

This portfolio is designed to present both engineering work and founder-led product development in one place. It gives recruiters, collaborators, and potential partners a clear way to explore technical experience, review selected projects, understand the vision behind PolyFlow, and get in touch.

The site combines a clean landing-page structure with practical functionality, including linked project showcases and a live backend-connected contact form.

## About

This portfolio reflects a blend of full-stack engineering, AI product exploration, and startup building. It is meant to communicate not only technical capability, but also product thinking, execution, and long-term interest in building tools that expand access for under-resourced communities.

PolyFlow is an early-stage AI speech and alignment system exploring multilingual learning and pronunciation feedback for under-resourced language learners. It represents the founder side of the portfolio and sits alongside broader engineering work and shipped projects.

## Features

- **Professional summary**  
  Introduces the portfolio owner as a full-stack engineer and startup founder.

- **Experience section**  
  Highlights relevant professional background, technical experience, and engineering strengths.

- **Projects section with links**  
  Showcases selected work with direct links to repositories, demos, or live products.

- **PolyFlow section**  
  Provides a focused summary of PolyFlow and its mission around multilingual learning and pronunciation feedback.

- **Supabase-connected contact form**  
  Allows visitors to submit inquiries through a live backend workflow.

- **Modern frontend stack**  
  Built with React, TypeScript, and Vite for a fast development experience and responsive UI.

## Main Sections

### Hero / Introduction

Frames the portfolio around software engineering, applied AI interests, and founder-led product development.

### Experience

Summarizes relevant work, technical depth, and professional background.

### Projects

Highlights selected engineering and product projects, with links for deeper exploration.

### PolyFlow

Explains the startup’s focus on multilingual learning, speech alignment, and pronunciation feedback for under-resourced language learners.

### Contact

Provides a contact form connected to Supabase so visitors can send messages directly from the site.

## Tech Stack

- **Frontend:** React
- **Language:** TypeScript
- **Build tool:** Vite
- **Backend / data handling:** Supabase
- **Deployment:** Vercel
- **Tooling:** ESLint and Vite React plugin support

## Contact Form

The contact form writes submissions directly to the `collaborations` table in Supabase. This gives the portfolio a live backend-supported communication flow instead of a static contact section.

## Environment Variables

To run the project locally, create a `.env.local` file in the root of the project and add:

```env
VITE_SUPABASE_URL=https://swkippmsoyffbzvaagrp.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_publishable_or_anon_key
```

If your Supabase project uses the newer naming convention, `VITE_SUPABASE_PUBLISHABLE_KEY` is also supported.

After updating Vite environment variables, restart the development server or trigger a fresh production deploy so the new values are picked up.

## Local Development

### Prerequisites

- Node.js 20+
- npm or another JavaScript package manager
- Supabase project credentials

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Open locally

```text
http://localhost:5173
```

## Project Setup Notes

This project uses the standard React + TypeScript + Vite setup with hot module replacement and ESLint support.

Depending on the template configuration, the project may use one of the official React plugins for Vite:

- `@vitejs/plugin-react`
- `@vitejs/plugin-react-swc`

The current template keeps the setup minimal while remaining easy to extend for production use.

## Linting and Production Hardening

For production-grade development, the ESLint setup can be expanded to support type-aware lint rules and stricter React-specific checks. This can include stricter TypeScript lint configurations and plugins such as:

- `eslint-plugin-react-x`
- `eslint-plugin-react-dom`

These additions can improve consistency and catch more issues as the portfolio grows.

## Why This Portfolio

This site is meant to communicate more than a project list. It presents a broader professional profile across:

- Full-stack engineering
- Product-minded development
- AI and multilingual learning exploration
- Startup execution through PolyFlow
- Practical web development with live integrations

## Customization

This portfolio can evolve over time with additional sections and functionality, such as:

- More featured projects
- Resume download support
- Founder updates or PolyFlow milestones
- Writing, case studies, or blog content
- Analytics for recruiter engagement
- Social and scheduling integrations

## Deployment

Before deploying, make sure the required Supabase environment variables are configured in your deployment provider. Since this is a Vite application, the `VITE_`-prefixed variables must be available at build time. After changing them, trigger a fresh production deploy.
