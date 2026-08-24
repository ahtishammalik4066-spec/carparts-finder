// Shop validation schemas
export const shopQuerySchema = {
  type: "object",
  properties: {
    city: { type: "string" },
    search: { type: "string" },
  },
} as const;
