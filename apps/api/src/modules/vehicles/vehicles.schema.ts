// Vehicle validation schemas
export const vehicleQuerySchema = {
  type: "object",
  properties: {
    makeId: { type: "string" },
    modelId: { type: "string" },
    yearId: { type: "string" },
  },
} as const;
