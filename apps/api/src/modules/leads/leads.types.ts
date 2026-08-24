import type { Lead } from "@partfinder/shared";

export interface UpdateLeadRequest {
  status?: "new" | "contacted" | "converted" | "closed";
  notes?: string;
}
