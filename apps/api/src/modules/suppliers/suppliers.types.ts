import type { Supplier, Listing } from "@partfinder/shared";

export interface SupplierRegisterRequest {
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
}
