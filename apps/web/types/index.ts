// Re-export shared types for convenience
export type {
  User,
  Supplier,
  Vehicle,
  Make,
  Model,
  Year,
  Part,
  Listing,
  PartRequest,
  Lead,
  Shop,
  BlogPost,
  FaqItem,
  ContactMessage,
  ApiResponse,
  PaginatedResponse,
  UserRole,
  PartCondition,
  ListingStatus,
  LeadStatus,
} from "@partfinder/shared";

// Web-specific types
export interface SearchParams {
  makeId?: string;
  modelId?: string;
  yearId?: string;
  partId?: string;
  condition?: string;
  city?: string;
  page?: number;
  limit?: number;
  sort?: string;
  order?: "asc" | "desc";
}