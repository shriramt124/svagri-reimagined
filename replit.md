# Vite React Shadcn TypeScript Application

## Overview
This is a frontend-only React application built with Vite, TypeScript, and Shadcn UI components. It appears to be a business website for agricultural, engineering, and ingredient solutions with multiple pages and a modern UI.

## Project Structure
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Routing**: React Router v6
- **UI Components**: Shadcn UI (Radix UI primitives)
- **Styling**: TailwindCSS
- **State Management**: TanStack Query (React Query)
- **Form Handling**: React Hook Form with Zod validation

## Key Features
- Multi-page application with routes for:
  - Home
  - Agri Solutions
  - Engineering Solutions
  - Ingredient Solutions
  - About
  - Insights
  - Contact
  - 404 Not Found
- Hero slider component
- Chatbot button
- Footer and Navbar components
- Stats section
- Responsive design with mobile support

## Running the Application
The application runs on port 5000 via the "Start application" workflow which executes `npm run dev`.

## Configuration
- **Port**: 5000 (configured for Replit environment)
- **Host**: 0.0.0.0 (allows all hosts for proxy compatibility)
- **HMR**: Configured for WebSocket with client port 443 for Replit's proxy

## Recent Changes (October 3, 2025)
- Configured Vite to run on port 5000 for Replit compatibility
- Updated server host to 0.0.0.0
- Added HMR configuration for WebSocket support through Replit proxy using REPLIT_DEV_DOMAIN
- Set up "Start application" workflow
- Configured deployment settings for autoscale with preview command
- Verified all pages are working correctly (Home, About, etc.)

## User Preferences
None recorded yet.

## Dependencies
All dependencies are managed via npm and are already installed. The project uses both regular dependencies (runtime) and dev dependencies (build-time).
