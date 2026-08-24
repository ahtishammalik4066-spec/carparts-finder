import type { Lead } from "@partfinder/shared";

export async function listLeads() {
  // TODO: Implement leads listing logic
  return [];
}

export async function findLead(id: string) {
  // TODO: Implement lead lookup logic
  return { id };
}

export async function modifyLead(id: string, data: Record<string, unknown>) {
  // TODO: Implement lead update logic
  return { id, ...data };
}
