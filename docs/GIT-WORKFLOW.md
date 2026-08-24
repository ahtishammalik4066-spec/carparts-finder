# PartFinder PK - Git Workflow

This document defines the Git workflow for the PartFinder PK team.

---

## Branch Structure

```
main
│
├── feature/public-web
├── feature/backend-api
└── feature/dashboard
```

**Nobody works directly on `main`.**

---

## Developer Branches

| Developer | Branch                | Owns                    |
|-----------|-----------------------|-------------------------|
| Developer 1 | `feature/public-web` | `apps/web/`             |
| Developer 2 | `feature/backend-api` | `apps/api/`             |
| Developer 3 | `feature/dashboard`   | `apps/dashboard/`       |

---

## Daily Workflow

### 1. Start a new feature

```bash
# Switch to your feature branch
git checkout feature/public-web

# Pull the latest changes from main
git pull origin main
```

### 2. Make your changes

Work on your assigned files only.

### 3. Commit your changes

```bash
# Stage your changes
git add .

# Commit with a meaningful message
git commit -m "feat: add homepage structure"
```

### 4. Push your changes

```bash
git push origin feature/public-web
```

### 5. Create a Pull Request

1. Go to GitHub
2. Create a Pull Request: `feature/public-web` → `main`
3. Add a description of what you changed
4. Request a review from a teammate
5. After review and testing, merge

---

## Commit Message Convention

Use conventional commits:

| Type     | Description                          | Example                              |
|----------|--------------------------------------|--------------------------------------|
| `feat:`  | New feature                          | `feat: add vehicle search`           |
| `fix:`   | Bug fix                              | `fix: fix navbar mobile menu`        |
| `docs:`  | Documentation changes                | `docs: update API documentation`     |
| `refactor:` | Code refactoring                  | `refactor: clean up listing service` |
| `style:` | Formatting, no code change           | `style: format code`                 |
| `chore:` | Maintenance tasks                    | `chore: update dependencies`         |

---

## Merge Strategy

We will **NOT** wait until the whole project is finished before merging.

Developers should regularly push and merge completed work.

### Example Timeline

```
Day 1: Repository + structure
       ↓
       Merge

Day 2: Homepage + backend foundation
       ↓
       Merge

Day 3: Search + vehicle APIs
       ↓
       Merge

Day 4: Listings + supplier dashboard
       ↓
       Merge

Day 5+: Continuous integration
```

---

## Rules

1. **Never** commit directly to `main`
2. **Always** work on your feature branch
3. **Always** pull latest `main` before starting work
4. **Always** create a Pull Request for merging
5. **Never** modify another developer's files unless absolutely necessary
6. **Always** write meaningful commit messages
7. **Never** commit secrets or `.env` files
8. **Always** test your changes before pushing

---

## Resolving Conflicts

If you have merge conflicts:

1. Pull the latest `main` into your branch:
   ```bash
   git pull origin main
   ```

2. Resolve conflicts in your editor

3. Commit the resolution:
   ```bash
   git add .
   git commit -m "merge: resolve conflicts with main"
   ```

4. Push your branch:
   ```bash
   git push origin feature/public-web
   ```

---

## Initial Setup

```bash
# Clone the repository
git clone <repo-url>
cd partfinder

# Install dependencies
npm install

# Create your feature branch
git checkout -b feature/public-web

# Start developing
npm run dev:web