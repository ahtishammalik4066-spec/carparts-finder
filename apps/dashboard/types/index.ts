// Re-export shared types for convenience
import type { User } from "@partfinder/shared";

export type {
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

// Dashboard-specific types
export interface DashboardStats {
  totalListings: number;
  activeListings: number;
  totalLeads: number;
  newLeads: number;
  totalViews: number;
}

export interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
}