// Blog validation schemas
export const blogQuerySchema = {
  type: "object",
  properties: {
    tag: { type: "string" },
    search: { type: "string" },
  },
} as const;
