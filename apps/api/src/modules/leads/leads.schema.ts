// Lead validation schemas
export const updateLeadSchema = {
  type: "object",
  properties: {
    status: { type: "string", enum: ["new", "contacted", "converted", "closed"] },
    notes: { type: "string" },
  },
} as const;
