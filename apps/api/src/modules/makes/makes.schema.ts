// Make validation schemas
export const makeQuerySchema = {
  type: "object",
  properties: {
    search: { type: "string" },
  },
} as const;
