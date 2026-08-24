# PartFinder PK - Team Setup

This document explains how to set up the project for all 3 developers.

---

## Prerequisites

- Node.js 18+ (recommended: Node.js 20 LTS)
- npm 9+
- Git
- GitHub account

---

## 1. Clone the Repository

```bash
git clone <repo-url>
cd partfinder
```

---

## 2. Install Dependencies

From the root directory:

```bash
npm install
```

This installs all dependencies for all workspaces (web, api, dashboard, shared).

---

## 3. Set Up Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Fill in your values:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_WHATSAPP_NUMBER=

PORT=4000
DATABASE_URL=
JWT_SECRET=

NEXT_PUBLIC_DASHBOARD_API_URL=http://localhost:4000
```

> **Never commit `.env` files to GitHub.**

---

## 4. Create Your Feature Branch

### Developer 1 - Public Website

```bash
git checkout -b feature/public-web
```

### Developer 2 - Backend/API

```bash
git checkout -b feature/backend-api
```

### Developer 3 - Dashboard

```bash
git checkout -b feature/dashboard
```

---

## 5. Run Your App

### Public Website (Developer 1)

```bash
npm run dev:web
```

Runs at: `http://localhost:3000`

### Backend API (Developer 2)

```bash
npm run dev:api
```

Runs at: `http://localhost:4000`

### Dashboard (Developer 3)

```bash
npm run dev:dashboard
```

Runs at: `http://localhost:3001`

---

## 6. Development Workflow

1. Pull latest `main` before starting work:
   ```bash
   git pull origin main
   ```

2. Make your changes in your assigned folder only

3. Commit with a meaningful message:
   ```bash
   git add .
   git commit -m "feat: add your feature"
   ```

4. Push your branch:
   ```bash
   git push origin feature/your-branch
   ```

5. Create a Pull Request to `main`

---

## 7. Shared Package

The `packages/shared` folder contains shared types, schemas, and constants.

All developers can import from it:

```typescript
import { Listing, PART_CONDITIONS } from "@partfinder/shared";
```

**Rules for shared package:**
- Only add things that genuinely need to be shared
- No frontend components
- No backend-specific code
- Keep it clean and well-documented

---

## 8. File Ownership

| Developer | Owns                    | Can Modify                    |
|-----------|-------------------------|-------------------------------|
| Developer 1 | `apps/web/`            | `apps/web/`, `packages/shared/` |
| Developer 2 | `apps/api/`            | `apps/api/`, `packages/shared/` |
| Developer 3 | `apps/dashboard/`      | `apps/dashboard/`, `packages/shared/` |

**Do not modify another developer's files unless absolutely necessary.**

---

## 9. Useful Commands

```bash
# Run all apps in development
npm run dev:web
npm run dev:api
npm run dev:dashboard

# Build all apps
npm run build:web
npm run build:api
npm run build:dashboard

# Build shared package
npm run build:shared

# Install a package in a specific workspace
npm install <package> --workspace apps/web
npm install <package> --workspace apps/api
npm install <package> --workspace apps/dashboard
```

---

## 10. Troubleshooting

### Port already in use

Change the port in `.env`:

```env
PORT=4001
```

### Dependencies not found

Reinstall dependencies:

```bash
rm -rf node_modules
npm install
```

### TypeScript errors

Run type checking:

```bash
npm run typecheck --workspace apps/api
```

### Next.js cache issues

Clear the Next.js cache:

```bash
rm -rf apps/web/.next
rm -rf apps/dashboard/.next