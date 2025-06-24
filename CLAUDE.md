# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Open Data Hub Dashboard is a React-based web application that provides a user interface for managing Open Data Hub components. It consists of a frontend (React/TypeScript) and backend (Node.js/Fastify) architecture.

## Development Commands

### Installation
```bash
npm install  # Installs all dependencies for root, frontend, and backend
```

### Development
```bash
npm run dev              # Runs both frontend and backend in development mode
npm run dev:frontend     # Frontend only (port varies)
npm run dev:backend      # Backend only (port varies)
```

### Building
```bash
npm run build            # Builds both frontend and backend
npm run build:frontend   # Builds frontend only
npm run build:backend    # Builds backend only
```

### Testing
```bash
npm run test                    # Runs all tests (lint, type-check, unit, e2e)
npm run test:frontend           # Frontend tests only
npm run test:backend            # Backend tests only
npm run test:fix                # Auto-fixes linting issues
npm run lint:frontend:backend   # Lint both frontend and backend
```

### Frontend-specific Commands
```bash
cd frontend
npm run test:cypress-ci         # Cypress end-to-end tests
npm run test:unit               # Jest unit tests only
npm run test:type-check         # TypeScript type checking
npm run format                  # Format code with Prettier
```

### Backend-specific Commands  
```bash
cd backend
npm run start:dev               # Start backend in development mode
npm run test:jest               # Jest unit tests
npm run test:lint               # ESLint
```

## Architecture

### High-Level Structure
- **Frontend**: React 18 + TypeScript + PatternFly components in `/frontend/src/`
- **Backend**: Node.js + Fastify server in `/backend/src/`
- **Deployment**: Kubernetes/OpenShift manifests in `/manifests/`

### Frontend Code Organization
- `/src/api/` - API layer for backend communication (only imports `/src/utilities`)
- `/src/components/` - Generic reusable components (no application data concepts)
- `/src/concepts/` - Shared business logic and domain-specific components
- `/src/pages/` - Route-specific components and page logic
- `/src/utilities/` - Generic utilities and hooks (no imports allowed)
- `/src/types.ts` - Generic type definitions
- `/src/k8sTypes.ts` - Kubernetes resource type definitions

### Backend Structure
- `/src/routes/` - API route handlers
- `/src/utils/` - Utility functions
- `/src/plugins/` - Fastify plugins
- `/src/types.ts` - Backend type definitions

## Key Technologies

### Frontend
- React 18 with TypeScript
- PatternFly UI components (@patternfly/react-*)  
- React Router v7 for routing
- Redux for state management
- Axios for HTTP requests
- Jest + Cypress for testing
- Webpack for bundling

### Backend
- Node.js 20+ with TypeScript
- Fastify web framework
- Kubernetes client (@kubernetes/client-node)
- Pino for logging
- Jest for testing

## Development Prerequisites

- Node.js >= 20.0.0
- OpenShift CLI (oc) - must be logged in as cluster-admin for local development
- Kustomize (for deployment)
- Podman (optional)

## Important Notes

- **Local Development**: Requires cluster-admin permissions when running locally since the development mode uses your user credentials instead of the service account
- **Proxy Architecture**: The backend acts as a proxy to avoid CORS issues when communicating with OpenShift services
- **Module Federation**: Uses webpack module federation for plugin architecture
- **PatternFly**: Heavy usage of PatternFly components - follow their design patterns
- **Import Restrictions**: Follow the strict import rules defined in the architecture (e.g., `/src/components` cannot import `/src/pages`)

## Testing Guidelines

- Unit tests with Jest for both frontend and backend
- E2E tests with Cypress (frontend)
- ESLint + TypeScript for code quality
- Test commands must pass before committing: `npm run test`

## Common Development Patterns

- Use React hooks and functional components
- Follow PatternFly design system
- TypeScript strict mode enabled
- API calls go through the `/src/api` layer
- Shared logic belongs in `/src/concepts`
- Page-specific code stays in `/src/pages`