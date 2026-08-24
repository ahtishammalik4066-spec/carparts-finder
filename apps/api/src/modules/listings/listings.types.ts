import type { Listing } from "@partfinder/shared";

export interface ListingQuery {
  makeId?: string;
  modelId?: string;
  yearId?: string;
  partId?: string;
  condition?: string;
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  limit?: number;
  sort?: string;
  order?: "asc" | "desc";
}
