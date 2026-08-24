import type { PartRequest } from "@partfinder/shared";

export interface CreatePartRequest {
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  makeId: string;
  modelId: string;
  yearId: string;
  partId: string;
  condition?: string;
  notes?: string;
}
