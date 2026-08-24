// ============================================
// PartFinder PK - Shared Types
// These types are used across web, api, and dashboard
// ============================================

export type UserRole = "admin" | "supplier" | "customer";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  phone?: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Supplier {
  id: string;
  userId: string;
  businessName: string;
  businessType: string;
  contactPerson: string;
  phone: string;
  email: string;
  whatsapp?: string;
  address: string;
  city: string;
  website?: string;
  description?: string;
  logo?: string;
  isApproved: boolean;
  rating?: number;
  createdAt: string;
  updatedAt: string;
}

export interface Vehicle {
  id: string;
  makeId: string;
  modelId: string;
  yearId: string;
  createdAt: string;
}

export interface Make {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  createdAt: string;
}

export interface Model {
  id: string;
  makeId: string;
  name: string;
  slug: string;
  createdAt: string;
}

export interface Year {
  id: string;
  year: number;
  createdAt: string;
}

export interface Part {
  id: string;
  name: string;
  slug: string;
  category?: string;
  createdAt: string;
}

export type PartCondition = "new" | "used" | "refurbished" | "genuine" | "aftermarket";

export type ListingStatus = "pending" | "active" | "sold" | "inactive" | "rejected";

export interface Listing {
  id: string;
  supplierId: string;
  makeId: string;
  modelId: string;
  yearId: string;
  partId: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  condition: PartCondition;
  status: ListingStatus;
  images: string[];
  location: string;
  city: string;
  whatsapp?: string;
  phone?: string;
  views: number;
  createdAt: string;
  updatedAt: string;
}

export type LeadStatus = "new" | "contacted" | "converted" | "closed";

export interface PartRequest {
  id: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  makeId: string;
  modelId: string;
  yearId: string;
  partId: string;
  condition?: PartCondition;
  notes?: string;
  status: LeadStatus;
  createdAt: string;
}

export interface Lead {
  id: string;
  supplierId: string;
  partRequestId: string;
  listingId?: string;
  status: LeadStatus;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Shop {
  id: string;
  supplierId: string;
  name: string;
  slug: string;
  description?: string;
  logo?: string;
  coverImage?: string;
  address: string;
  city: string;
  phone: string;
  whatsapp?: string;
  website?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  authorId: string;
  tags: string[];
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}