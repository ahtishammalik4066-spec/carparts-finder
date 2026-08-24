// Part validation schemas
export const partQuerySchema = {
  type: "object",
  properties: {
    search: { type: "string" },
    category: { type: "string" },
  },
} as const;
