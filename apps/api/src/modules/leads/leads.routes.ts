import type { FastifyInstance } from "fastify";
import { getLeads, getLead, updateLead } from "./lead.controller";

export async function leadRoutes(app: FastifyInstance) {
  app.get("/", getLeads);
  app.get("/:id", getLead);
  app.put("/:id", updateLead);
}
