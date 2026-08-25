import type { Make } from "@/lib/shared";
import { COMMON_MAKES } from "@/lib/shared";
import { slugify } from "../utils";

const CREATED_AT = "2024-01-01T00:00:00Z";

export const makes: Make[] = COMMON_MAKES.map((name) => ({
  id: slugify(name),
  name,
  slug: slugify(name),
  createdAt: CREATED_AT,
}));

export function getMakeBySlug(slug: string): Make | undefined {
  return makes.find((m) => m.slug === slug);
}
