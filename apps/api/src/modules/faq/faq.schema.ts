// FAQ validation schemas
export const faqQuerySchema = {
  type: "object",
  properties: {
    category: { type: "string" },
  },
} as const;
