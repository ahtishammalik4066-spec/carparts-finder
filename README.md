# PartFinder PK

**Automotive Spare Parts Marketplace / Supplier Matching Platform**

PartFinder PK is a production-ready automotive spare parts marketplace and lead-generation platform for Pakistan. Users can search for genuine and aftermarket car parts by make, model, year, and part type, compare prices from trusted suppliers, and request parts via WhatsApp.

---

## Tech Stack

| Layer       | Technology              |
|-------------|-------------------------|
| Frontend    | Next.js 14 + TypeScript |
| Backend     | Fastify + TypeScript    |
| Database    | Managed by backend dev  |
| Monorepo    | npm workspaces          |
| Versioning  | Git + GitHub            |

---

## Architecture

```
partfinder/
│
├── apps/
│   ├── web/          # Public website (Developer 1)
│   ├── api/          # Backend API (Developer 2)
│   └── dashboard/    # Supplier & Admin dashboard (Developer 3)
│
├── packages/
│   └── shared/       # Shared types, schemas, constants
│
├── docs/             # Documentation
│
├── .env.example      # Environment variables template
├── .gitignore
├── package.json      # Root workspace configuration
└── README.md
```

---

## Project Structure

### apps/web - Public Website

Customer-facing website with:

- Homepage with vehicle search
- Listings browsing and details
- Brand, model, part, and city pages
- Shops directory
- Blog, About, Contact, FAQ pages
- SEO-optimized routes

### apps/api - Backend API

Fastify-based REST API with:

- Authentication & authorization
- Vehicle data (makes, models, years, parts)
- Listings management
- Part requests & lead generation
- Supplier management
- Blog, FAQ, Contact modules

### apps/dashboard - Supplier & Admin Dashboard

Next.js dashboard for:

- Supplier registration & login
- Supplier profile & inventory
- Add/edit/delete listings
- Lead management
- Admin panel for approvals & content management

### packages/shared - Shared Package

Shared TypeScript types, validation schemas, and constants used across all apps.

---

## Developer Responsibilities

| Developer | Branch                | Owns                    | Responsibilities |
|-----------|-----------------------|-------------------------|------------------|
| Developer 1 | `feature/public-web` | `apps/web/`             | Public website, SEO, responsive design |
| Developer 2 | `feature/backend-api` | `apps/api/`             | API, database, auth, validation |
| Developer 3 | `feature/dashboard`   | `apps/dashboard/`       | Supplier & admin dashboard |

---

## Installation

### Prerequisites

- Node.js 18+ (recommended: Node.js 20 LTS)
- npm 9+

### Setup

```bash
# Clone the repository
git clone <repo-url>
cd partfinder

# Install all dependencies
npm install

# Copy environment variables
cp .env.example .env
```

---

## Development Commands

### Run all apps

```bash
# Public website (http://localhost:3000)
npm run dev:web

# Backend API (http://localhost:4000)
npm run dev:api

# Dashboard (http://localhost:3001)
npm run dev:dashboard
```

### Build all apps

```bash
npm run build:web
npm run build:api
npm run build:dashboard
npm run build:shared
```

### Install packages in a specific workspace

```bash
npm install <package> --workspace apps/web
npm install <package> --workspace apps/api
npm install <package> --workspace apps/dashboard
```

---

## Git Workflow

```
main
│
├── feature/public-web
├── feature/backend-api
└── feature/dashboard
```

**Nobody works directly on `main`.**

1. Work on your feature branch
2. Pull latest `main` before starting
3. Commit with meaningful messages
4. Push and create a Pull Request
5. After review, merge to `main`

See [docs/GIT-WORKFLOW.md](docs/GIT-WORKFLOW.md) for full details.

---

## Environment Variables

| Variable                    | Description                    | Used By        |
|-----------------------------|--------------------------------|----------------|
| `NEXT_PUBLIC_API_URL`       | Backend API URL                | apps/web       |
| `NEXT_PUBLIC_WHATSAPP_NUMBER`| WhatsApp number for requests   | apps/web       |
| `PORT`                      | API server port                | apps/api       |
| `DATABASE_URL`              | Database connection string     | apps/api       |
| `JWT_SECRET`                | JWT signing secret             | apps/api       |
| `JWT_EXPIRES_IN`            | JWT expiration time            | apps/api       |
| `NEXT_PUBLIC_DASHBOARD_API_URL` | Backend API URL for dashboard | apps/dashboard |

> **Never commit real secrets. Use `.env` locally and `.env.example` as a template.**

---

## API Documentation

See [docs/API.md](docs/API.md) for the complete API contract.

Key endpoints:

```
GET    /api/v1/makes
GET    /api/v1/makes/:id/models
GET    /api/v1/models/:id/years
GET    /api/v1/parts
GET    /api/v1/listings
GET    /api/v1/listings/:id
POST   /api/v1/part-requests
POST   /api/v1/auth/login
POST   /api/v1/suppliers/register
GET    /api/v1/supplier/leads
POST   /api/v1/supplier/listings
PUT    /api/v1/supplier/listings/:id
DELETE /api/v1/supplier/listings/:id
```

---

## Development Principles

1. TypeScript everywhere
2. Reusable components
3. Clean folder structure
4. No duplicated code
5. No hardcoded secrets
6. No direct database access from frontend
7. Frontend communicates only through API
8. Shared types go into `packages/shared`
9. Keep each developer's ownership clear
10. Use meaningful Git commits
11. Do not make unnecessary changes to another developer's area
12. Keep code production-ready
13. Use responsive design
14. Keep SEO in mind for public pages
15. Do not over-engineer the project

---

## Documentation

- [API Documentation](docs/API.md)
- [Database Schema](docs/DATABASE.md)
- [Route Mapping](docs/ROUTES.md)
- [Git Workflow](docs/GIT-WORKFLOW.md)
- [Team Setup](docs/TEAM-SETUP.md)

---

## License

Private project. All rights reserved.