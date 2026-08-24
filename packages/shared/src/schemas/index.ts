// ============================================
// PartFinder PK - Shared Schemas
// Validation schemas shared between frontend and backend
// ============================================

// --- Auth Schemas ---
export const loginSchema = {
  type: "object",
  required: ["email", "password"],
  properties: {
    email: { type: "string", format: "email" },
    password: { type: "string", minLength: 6 },
  },
} as const;

export const registerSchema = {
  type: "object",
  required: ["email", "password", "name"],
  properties: {
    email: { type: "string", format: "email" },
    password: { type: "string", minLength: 6 },
    name: { type: "string", minLength: 2 },
    phone: { type: "string" },
  },
} as const;

// --- Supplier Schemas ---
export const supplierRegisterSchema = {
  type: "object",
  required: ["businessName", "contactPerson", "phone", "email", "address", "city"],
  properties: {
    businessName: { type: "string", minLength: 2 },
    businessType: { type: "string" },
    contactPerson: { type: "string", minLength: 2 },
    phone: { type: "string" },
    email: { type: "string", format: "email" },
    whatsapp: { type: "string" },
    address: { type: "string" },
    city: { type: "string" },
    website: { type: "string" },
    description: { type: "string" },
  },
} as const;

// --- Part Request Schema ---
export const partRequestSchema = {
  type: "object",
  required: ["customerName", "customerPhone", "makeId", "modelId", "yearId", "partId"],
  properties: {
    customerName: { type: "string", minLength: 2 },
    customerPhone: { type: "string" },
    customerEmail: { type: "string", format: "email" },
    makeId: { type: "string" },
    modelId: { type: "string" },
    yearId: { type: "string" },
    partId: { type: "string" },
    condition: { type: "string", enum: ["new", "used", "refurbished", "genuine", "aftermarket"] },
    notes: { type: "string" },
  },
} as const;

// --- Listing Schemas ---
export const createListingSchema = {
  type: "object",
  required: ["makeId", "modelId", "yearId", "partId", "title", "description", "price", "condition", "city"],
  properties: {
    makeId: { type: "string" },
    modelId: { type: "string" },
    yearId: { type: "string" },
    partId: { type: "string" },
    title: { type: "string", minLength: 3 },
    description: { type: "string", minLength: 10 },
    price: { type: "number", minimum: 0 },
    currency: { type: "string", default: "PKR" },
    condition: { type: "string", enum: ["new", "used", "refurbished", "genuine", "aftermarket"] },
    images: { type: "array", items: { type: "string" } },
    location: { type: "string" },
    city: { type: "string" },
    whatsapp: { type: "string" },
    phone: { type: "string" },
  },
} as const;

export const updateListingSchema = {
  type: "object",
  properties: {
    makeId: { type: "string" },
    modelId: { type: "string" },
    yearId: { type: "string" },
    partId: { type: "string" },
    title: { type: "string", minLength: 3 },
    description: { type: "string", minLength: 10 },
    price: { type: "number", minimum: 0 },
    currency: { type: "string" },
    condition: { type: "string", enum: ["new", "used", "refurbished", "genuine", "aftermarket"] },
    images: { type: "array", items: { type: "string" } },
    location: { type: "string" },
    city: { type: "string" },
    whatsapp: { type: "string" },
    phone: { type: "string" },
    status: { type: "string", enum: ["pending", "active", "sold", "inactive", "rejected"] },
  },
} as const;

// --- Contact Schema ---
export const contactSchema = {
  type: "object",
  required: ["name", "email", "subject", "message"],
  properties: {
    name: { type: "string", minLength: 2 },
    email: { type: "string", format: "email" },
    phone: { type: "string" },
    subject: { type: "string", minLength: 3 },
    message: { type: "string", minLength: 10 },
  },
} as const;

// --- Query Parameter Schemas ---
export const paginationSchema = {
  type: "object",
  properties: {
    page: { type: "integer", minimum: 1, default: 1 },
    limit: { type: "integer", minimum: 1, maximum: 100, default: 20 },
    search: { type: "string" },
    sort: { type: "string" },
    order: { type: "string", enum: ["asc", "desc"] },
  },
} as const;

export const listingQuerySchema = {
  type: "object",
  properties: {
    ...paginationSchema.properties,
    makeId: { type: "string" },
    modelId: { type: "string" },
    yearId: { type: "string" },
    partId: { type: "string" },
    condition: { type: "string", enum: ["new", "used", "refurbished", "genuine", "aftermarket"] },
    city: { type: "string" },
    minPrice: { type: "number" },
    maxPrice: { type: "number" },
  },
} as const;