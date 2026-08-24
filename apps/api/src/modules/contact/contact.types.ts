import type { ContactMessage } from "@partfinder/shared";

export interface CreateContactMessage {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
