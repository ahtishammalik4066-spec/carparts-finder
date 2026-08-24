# PartFinder PK - API Documentation

Base URL: `http://localhost:4000/api/v1`

All responses follow this structure:

```json
{
  "success": true,
  "data": {}
}
```

Error responses:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message"
  }
}
```

---

## Makes

### GET /makes

List all car makes.

**Query Parameters:**

| Parameter | Type   | Required | Description          |
|-----------|--------|----------|----------------------|
| search    | string | No       | Search by make name  |

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "Toyota",
      "slug": "toyota",
      "logo": "string | null"
    }
  ]
}
```

---

### GET /makes/:id/models

List all models for a specific make.

**Path Parameters:**

| Parameter | Type   | Required | Description |
|-----------|--------|----------|-------------|
| id        | string | Yes      | Make ID     |

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "makeId": "string",
      "name": "Corolla",
      "slug": "corolla"
    }
  ]
}
```

---

## Models

### GET /models/:id/years

List all years available for a specific model.

**Path Parameters:**

| Parameter | Type   | Required | Description  |
|-----------|--------|----------|--------------|
| id        | string | Yes      | Model ID     |

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "year": 2020
    }
  ]
}
```

---

## Parts

### GET /parts

List all available parts.

**Query Parameters:**

| Parameter | Type   | Required | Description          |
|-----------|--------|----------|----------------------|
| search    | string | No       | Search by part name  |
| category  | string | No       | Filter by category   |

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "Brake Pads",
      "slug": "brake-pads",
      "category": "Braking"
    }
  ]
}
```

---

## Listings

### GET /listings

List all active listings with optional filters.

**Query Parameters:**

| Parameter | Type   | Required | Description                    |
|-----------|--------|----------|--------------------------------|
| makeId    | string | No       | Filter by make                 |
| modelId   | string | No       | Filter by model                |
| yearId    | string | No       | Filter by year                 |
| partId    | string | No       | Filter by part                 |
| condition | string | No       | new, used, refurbished, genuine, aftermarket |
| city      | string | No       | Filter by city                 |
| minPrice  | number | No       | Minimum price                  |
| maxPrice  | number | No       | Maximum price                  |
| page      | number | No       | Page number (default: 1)       |
| limit     | number | No       | Items per page (default: 20)   |
| sort      | string | No       | Sort field                     |
| order     | string | No       | asc or desc                    |

**Response:**

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "string",
        "supplierId": "string",
        "makeId": "string",
        "modelId": "string",
        "yearId": "string",
        "partId": "string",
        "title": "Toyota Corolla Brake Pads",
        "description": "Genuine brake pads for Corolla 2019",
        "price": 4500,
        "currency": "PKR",
        "condition": "new",
        "status": "active",
        "images": ["url1", "url2"],
        "location": "Karachi",
        "city": "Karachi",
        "whatsapp": "03001234567",
        "phone": "03001234567",
        "views": 120,
        "createdAt": "2024-01-01T00:00:00Z",
        "updatedAt": "2024-01-01T00:00:00Z"
      }
    ],
    "total": 100,
    "page": 1,
    "limit": 20,
    "totalPages": 5
  }
}
```

---

### GET /listings/:id

Get a single listing by ID.

**Path Parameters:**

| Parameter | Type   | Required | Description |
|-----------|--------|----------|-------------|
| id        | string | Yes      | Listing ID  |

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "string",
    "supplierId": "string",
    "makeId": "string",
    "modelId": "string",
    "yearId": "string",
    "partId": "string",
    "title": "string",
    "description": "string",
    "price": 4500,
    "currency": "PKR",
    "condition": "new",
    "status": "active",
    "images": [],
    "location": "string",
    "city": "string",
    "whatsapp": "string",
    "phone": "string",
    "views": 0,
    "createdAt": "string",
    "updatedAt": "string"
  }
}
```

---

## Part Requests

### POST /part-requests

Create a new part request (lead generation).

**Request Body:**

```json
{
  "customerName": "Ahmed Khan",
  "customerPhone": "03001234567",
  "customerEmail": "ahmed@example.com",
  "makeId": "string",
  "modelId": "string",
  "yearId": "string",
  "partId": "string",
  "condition": "used",
  "notes": "Looking for front brake pads"
}
```

**Response (201):**

```json
{
  "success": true,
  "data": {
    "id": "string",
    "customerName": "Ahmed Khan",
    "customerPhone": "03001234567",
    "customerEmail": "ahmed@example.com",
    "makeId": "string",
    "modelId": "string",
    "yearId": "string",
    "partId": "string",
    "condition": "used",
    "notes": "Looking for front brake pads",
    "status": "new",
    "createdAt": "2024-01-01T00:00:00Z"
  }
}
```

---

## Auth

### POST /auth/login

Login with email and password.

**Request Body:**

```json
{
  "email": "supplier@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "token": "jwt-token-here",
    "user": {
      "id": "string",
      "email": "supplier@example.com",
      "name": "Supplier Name",
      "role": "supplier"
    }
  }
}
```

---

## Suppliers

### POST /suppliers/register

Register a new supplier account.

**Request Body:**

```json
{
  "businessName": "Auto Parts Karachi",
  "businessType": "Retailer",
  "contactPerson": "Ali Ahmed",
  "phone": "03001234567",
  "email": "ali@autoparts.com",
  "whatsapp": "03001234567",
  "address": "Shop 12, Auto Market",
  "city": "Karachi",
  "website": "https://autoparts.com",
  "description": "Trusted auto parts supplier"
}
```

**Response (201):**

```json
{
  "success": true,
  "data": {
    "id": "string",
    "businessName": "Auto Parts Karachi",
    "businessType": "Retailer",
    "contactPerson": "Ali Ahmed",
    "phone": "03001234567",
    "email": "ali@autoparts.com",
    "whatsapp": "03001234567",
    "address": "Shop 12, Auto Market",
    "city": "Karachi",
    "website": "https://autoparts.com",
    "description": "Trusted auto parts supplier",
    "isApproved": false,
    "createdAt": "2024-01-01T00:00:00Z"
  }
}
```

---

### GET /supplier/leads

Get all leads for the authenticated supplier.

**Headers:**

```
Authorization: Bearer <token>
```

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "supplierId": "string",
      "partRequestId": "string",
      "listingId": "string | null",
      "status": "new",
      "notes": "string | null",
      "createdAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-01T00:00:00Z"
    }
  ]
}
```

---

### POST /supplier/listings

Create a new listing for the authenticated supplier.

**Headers:**

```
Authorization: Bearer <token>
```

**Request Body:**

```json
{
  "makeId": "string",
  "modelId": "string",
  "yearId": "string",
  "partId": "string",
  "title": "Toyota Corolla Brake Pads",
  "description": "Genuine brake pads for Corolla 2019",
  "price": 4500,
  "currency": "PKR",
  "condition": "new",
  "images": ["url1", "url2"],
  "location": "Karachi",
  "city": "Karachi",
  "whatsapp": "03001234567",
  "phone": "03001234567"
}
```

**Response (201):**

```json
{
  "success": true,
  "data": {
    "id": "string",
    "supplierId": "string",
    "makeId": "string",
    "modelId": "string",
    "yearId": "string",
    "partId": "string",
    "title": "Toyota Corolla Brake Pads",
    "description": "Genuine brake pads for Corolla 2019",
    "price": 4500,
    "currency": "PKR",
    "condition": "new",
    "status": "pending",
    "images": [],
    "location": "Karachi",
    "city": "Karachi",
    "whatsapp": "03001234567",
    "phone": "03001234567",
    "views": 0,
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z"
  }
}
```

---

### PUT /supplier/listings/:id

Update an existing listing.

**Headers:**

```
Authorization: Bearer <token>
```

**Path Parameters:**

| Parameter | Type   | Required | Description |
|-----------|--------|----------|-------------|
| id        | string | Yes      | Listing ID  |

**Request Body:** (all fields optional)

```json
{
  "title": "Updated Title",
  "price": 5000,
  "condition": "refurbished"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "string",
    "title": "Updated Title",
    "price": 5000,
    "condition": "refurbished"
  }
}
```

---

### DELETE /supplier/listings/:id

Delete a listing.

**Headers:**

```
Authorization: Bearer <token>
```

**Path Parameters:**

| Parameter | Type   | Required | Description |
|-----------|--------|----------|-------------|
| id        | string | Yes      | Listing ID  |

**Response:**

```json
{
  "success": true
}
```

---

## Error Codes

| Code            | HTTP Status | Description                    |
|-----------------|-------------|--------------------------------|
| VALIDATION_ERROR| 400         | Request body validation failed |
| UNAUTHORIZED    | 401         | Missing or invalid token       |
| FORBIDDEN       | 403         | Insufficient permissions       |
| NOT_FOUND       | 404         | Resource not found             |
| CONFLICT        | 409         | Resource already exists        |
| INTERNAL_ERROR  | 500         | Server error                   |