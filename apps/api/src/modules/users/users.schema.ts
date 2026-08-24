// User validation schemas
export const updateUserSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    phone: { type: "string" },
    avatar: { type: "string" },
  },
} as const;
