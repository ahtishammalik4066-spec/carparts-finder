# PartFinder PK - Route Documentation

This document maps the frontend routes to their corresponding API endpoints.

---

## Public Website (apps/web)

| Route                    | Page                    | API Endpoint(s)                          |
|--------------------------|-------------------------|------------------------------------------|
| `/`                      | Home                    | `GET /makes`, `GET /parts`, `GET /listings` |
| `/listings`              | Listings                | `GET /listings`                          |
| `/listings/[id]`         | Listing Details         | `GET /listings/:id`                      |
| `/brands/[brand]`        | Brand Page              | `GET /makes/:id/models`                  |
| `/models/[model]`        | Model Page              | `GET /models/:id/years`                  |
| `/parts/[part]`          | Part Page               | `GET /parts`                             |
| `/cities/[city]`         | City Page               | `GET /listings?city=:city`               |
| `/shops`                 | Shops                   | `GET /shops`                             |
| `/shops/[slug]`          | Shop Details            | `GET /shops/:slug`                       |
| `/blog`                  | Blog                    | `GET /blog`                              |
| `/blog/[slug]`           | Blog Post               | `GET /blog/:slug`                        |
| `/about`                 | About                   | -                                        |
| `/contact`               | Contact                 | `POST /contact`                          |
| `/faq`                   | FAQ                     | `GET /faq`                               |
| `/privacy`               | Privacy Policy          | -                                        |
| `/terms`                 | Terms of Service        | -                                        |

---

## Dashboard (apps/dashboard)

| Route                    | Page                    | API Endpoint(s)                          |
|--------------------------|-------------------------|------------------------------------------|
| `/`                      | Dashboard Home          | `GET /supplier/leads`                    |
| `/login`                 | Login                   | `POST /auth/login`                       |
| `/register`              | Supplier Registration   | `POST /suppliers/register`               |
| `/listings`              | My Listings             | `GET /listings?supplierId=:id`           |
| `/listings/new`          | Add Listing             | `POST /supplier/listings`                |
| `/listings/[id]/edit`    | Edit Listing            | `PUT /supplier/listings/:id`             |
| `/leads`                 | My Leads                | `GET /supplier/leads`                    |
| `/leads/[id]`            | Lead Details            | `GET /leads/:id`                         |
| `/profile`               | Supplier Profile        | `PUT /users/:id`                         |
| `/admin`                 | Admin Dashboard         | Various admin endpoints                  |
| `/admin/suppliers`       | Manage Suppliers        | `GET /suppliers`                         |
| `/admin/listings`        | Manage Listings         | `GET /listings`                          |
| `/admin/blog`            | Manage Blog             | `GET /blog`, `POST /blog`                |
| `/admin/faq`             | Manage FAQ              | `GET /faq`, `POST /faq`                  |
| `/admin/contact`         | Manage Contact Messages | `GET /contact`                           |

---

## API (apps/api)

All API routes are prefixed with `/api/v1`.

| Method | Endpoint                    | Description                    | Auth Required |
|--------|-----------------------------|--------------------------------|---------------|
| GET    | `/makes`                    | List all makes                 | No            |
| GET    | `/makes/:id/models`         | List models for a make         | No            |
| GET    | `/models/:id/years`         | List years for a model         | No            |
| GET    | `/parts`                    | List all parts                 | No            |
| GET    | `/listings`                 | List listings with filters     | No            |
| GET    | `/listings/:id`             | Get single listing             | No            |
| POST   | `/part-requests`            | Create a part request          | No            |
| POST   | `/auth/login`               | Login                          | No            |
| POST   | `/auth/register`            | Register a user                | No            |
| POST   | `/suppliers/register`       | Register a supplier            | No            |
| GET    | `/supplier/leads`           | Get supplier leads             | Yes           |
| POST   | `/supplier/listings`        | Create a listing               | Yes           |
| PUT    | `/supplier/listings/:id`    | Update a listing               | Yes           |
| DELETE | `/supplier/listings/:id`    | Delete a listing               | Yes           |
| GET    | `/shops`                    | List all shops                 | No            |
| GET    | `/shops/:slug`              | Get shop by slug               | No            |
| GET    | `/blog`                     | List blog posts                | No            |
| GET    | `/blog/:slug`               | Get blog post by slug          | No            |
| GET    | `/faq`                      | List FAQs                      | No            |
| POST   | `/contact`                  | Submit contact message         | No            |
| GET    | `/users`                    | List users (admin)             | Yes (admin)   |
| GET    | `/users/:id`                | Get user by ID                 | Yes           |
| PUT    | `/users/:id`                | Update user                    | Yes           |
| DELETE | `/users/:id`                | Delete user (admin)            | Yes (admin)   |
| GET    | `/vehicles`                 | List vehicles                  | No            |
| GET    | `/vehicles/:id`             | Get vehicle by ID              | No            |
| GET    | `/years`                    | List all years                 | No            |
| GET    | `/leads`                    | List all leads (admin)         | Yes (admin)   |
| GET    | `/leads/:id`                | Get lead by ID                 | Yes           |
| PUT    | `/leads/:id`                | Update lead status             | Yes           |