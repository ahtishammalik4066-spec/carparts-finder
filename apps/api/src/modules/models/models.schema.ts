// Model validation schemas
export const modelQuerySchema = {
  type: "object",
  properties: {
    makeId: { type: "string" },
    search: { type: "string" },
  },
} as const;
