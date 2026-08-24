# PartFinder PK - Database Documentation

This document describes the database schema for the PartFinder PK platform.

> **Note:** The database is managed by **Developer 2 (Backend/API)**. This document serves as a reference for all developers.

---

## Database Choice

The backend developer will choose the database (PostgreSQL, MySQL, or MongoDB) based on project requirements. The schema below is database-agnostic and can be adapted to any SQL or NoSQL database.

---

## Core Tables / Collections

### users

| Field      | Type     | Description                    |
|------------|----------|--------------------------------|
| id         | string   | Primary key                    |
| email      | string   | Unique email address           |
| password   | string   | Hashed password                |
| name       | string   | Full name                      |
| role       | enum     | admin, supplier, customer      |
| phone      | string   | Phone number                   |
| avatar     | string   | Profile image URL              |
| createdAt  | datetime | Creation timestamp             |
| updatedAt  | datetime | Last update timestamp          |

### suppliers

| Field         | Type     | Description                    |
|---------------|----------|--------------------------------|
| id            | string   | Primary key                    |
| userId        | string   | FK to users                    |
| businessName  | string   | Business name                  |
| businessType  | string   | Retailer, wholesaler, etc.     |
| contactPerson | string   | Contact person name            |
| phone         | string   | Phone number                   |
| email         | string   | Business email                 |
| whatsapp      | string   | WhatsApp number                |
| address       | string   | Business address               |
| city          | string   | City                           |
| website       | string   | Website URL                    |
| description   | text     | Business description           |
| logo          | string   | Logo image URL                 |
| isApproved    | boolean  | Admin approval status          |
| rating        | number   | Average rating                 |
| createdAt     | datetime | Creation timestamp             |
| updatedAt     | datetime | Last update timestamp          |

### makes

| Field     | Type     | Description        |
|-----------|----------|--------------------|
| id        | string   | Primary key        |
| name      | string   | Make name (Toyota) |
| slug      | string   | URL-friendly name  |
| logo      | string   | Logo image URL     |
| createdAt | datetime | Creation timestamp |

### models

| Field     | Type     | Description        |
|-----------|----------|--------------------|
| id        | string   | Primary key        |
| makeId    | string   | FK to makes        |
| name      | string   | Model name (Corolla) |
| slug      | string   | URL-friendly name  |
| createdAt | datetime | Creation timestamp |

### years

| Field     | Type     | Description        |
|-----------|----------|--------------------|
| id        | string   | Primary key        |
| year      | number   | Year (2019)        |
| createdAt | datetime | Creation timestamp |

### parts

| Field     | Type     | Description        |
|-----------|----------|--------------------|
| id        | string   | Primary key        |
| name      | string   | Part name (Brake Pads) |
| slug      | string   | URL-friendly name  |
| category  | string   | Part category      |
| createdAt | datetime | Creation timestamp |

### listings

| Field      | Type     | Description                    |
|------------|----------|--------------------------------|
| id         | string   | Primary key                    |
| supplierId | string   | FK to suppliers                |
| makeId     | string   | FK to makes                    |
| modelId    | string   | FK to models                   |
| yearId     | string   | FK to years                    |
| partId     | string   | FK to parts                    |
| title      | string   | Listing title                  |
| description| text     | Detailed description           |
| price      | number   | Price in PKR                   |
| currency   | string   | Currency (default: PKR)        |
| condition  | enum     | new, used, refurbished, genuine, aftermarket |
| status     | enum     | pending, active, sold, inactive, rejected |
| images     | array    | Image URLs                     |
| location   | string   | Location description           |
| city       | string   | City                           |
| whatsapp   | string   | WhatsApp number                |
| phone      | string   | Phone number                   |
| views      | number   | View count                     |
| createdAt  | datetime | Creation timestamp             |
| updatedAt  | datetime | Last update timestamp          |

### part_requests

| Field         | Type     | Description                    |
|---------------|----------|--------------------------------|
| id            | string   | Primary key                    |
| customerName  | string   | Customer name                  |
| customerPhone | string   | Customer phone                 |
| customerEmail | string   | Customer email                 |
| makeId        | string   | FK to makes                    |
| modelId       | string   | FK to models                   |
| yearId        | string   | FK to years                    |
| partId        | string   | FK to parts                    |
| condition     | enum     | new, used, refurbished, genuine, aftermarket |
| notes         | text     | Additional notes               |
| status        | enum     | new, contacted, converted, closed |
| createdAt     | datetime | Creation timestamp             |

### leads

| Field         | Type     | Description                    |
|---------------|----------|--------------------------------|
| id            | string   | Primary key                    |
| supplierId    | string   | FK to suppliers                |
| partRequestId | string   | FK to part_requests            |
| listingId     | string   | FK to listings (optional)      |
| status        | enum     | new, contacted, converted, closed |
| notes         | text     | Notes                          |
| createdAt     | datetime | Creation timestamp             |
| updatedAt     | datetime | Last update timestamp          |

### shops

| Field      | Type     | Description        |
|------------|----------|--------------------|
| id         | string   | Primary key        |
| supplierId | string   | FK to suppliers    |
| name       | string   | Shop name          |
| slug       | string   | URL-friendly name  |
| description| text     | Shop description   |
| logo       | string   | Logo image URL     |
| coverImage | string   | Cover image URL    |
| address    | string   | Shop address       |
| city       | string   | City               |
| phone      | string   | Phone number       |
| whatsapp   | string   | WhatsApp number    |
| website    | string   | Website URL        |
| isActive   | boolean  | Active status      |
| createdAt  | datetime | Creation timestamp |
| updatedAt  | datetime | Last update timestamp |

### blog_posts

| Field       | Type     | Description        |
|-------------|----------|--------------------|
| id          | string   | Primary key        |
| title       | string   | Post title         |
| slug        | string   | URL-friendly name  |
| excerpt     | text     | Short description  |
| content     | text     | Full content       |
| coverImage  | string   | Cover image URL    |
| authorId    | string   | FK to users        |
| tags        | array    | Post tags          |
| publishedAt | datetime | Publish timestamp  |
| createdAt   | datetime | Creation timestamp |
| updatedAt   | datetime | Last update timestamp |

### faq_items

| Field     | Type     | Description        |
|-----------|----------|--------------------|
| id        | string   | Primary key        |
| question  | string   | FAQ question       |
| answer    | text     | FAQ answer         |
| category  | string   | FAQ category       |
| order     | number   | Display order      |
| isActive  | boolean  | Active status      |
| createdAt | datetime | Creation timestamp |
| updatedAt | datetime | Last update timestamp |

### contact_messages

| Field     | Type     | Description        |
|-----------|----------|--------------------|
| id        | string   | Primary key        |
| name      | string   | Sender name        |
| email     | string   | Sender email       |
| phone     | string   | Sender phone       |
| subject   | string   | Message subject    |
| message   | text     | Message body       |
| isRead    | boolean  | Read status        |
| createdAt | datetime | Creation timestamp |

---

## Relationships

```
users 1──1 suppliers
makes 1──N models
models 1──N listings
years 1──N listings
parts 1──N listings
suppliers 1──N listings
suppliers 1──N leads
part_requests 1──N leads
suppliers 1──1 shops
users 1──N blog_posts
```

---

## Indexes

Recommended indexes for performance:

- `listings`: `(makeId, modelId, yearId, partId)`
- `listings`: `(city, status)`
- `listings`: `(supplierId)`
- `part_requests`: `(makeId, modelId, yearId, partId)`
- `leads`: `(supplierId, status)`
- `models`: `(makeId)`
- `shops`: `(city, isActive)`