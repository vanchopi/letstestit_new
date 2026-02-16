# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt 4 application using Vue 3. The project uses Bun as the package manager and is configured with TypeScript support.

## Development Commands

```bash
# Install dependencies
bun install

# Start development server (http://localhost:3000)
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Generate static site
bun run generate
```

## Project Structure

- `app/` - Main application directory containing Vue components
  - `app.vue` - Root application component
- `public/` - Static assets served at root
- `nuxt.config.ts` - Nuxt configuration file
- `tsconfig.json` - TypeScript configuration (references auto-generated .nuxt configs)

## Key Architecture Notes

- This is a minimal Nuxt setup using the `app/` directory structure (not `pages/`)
- TypeScript configuration is managed through Nuxt's auto-generated configs in `.nuxt/` directory
- The application currently displays the NuxtWelcome component as a starting point
- Nuxt devtools are enabled in the configuration
