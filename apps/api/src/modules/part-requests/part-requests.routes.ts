import type { FastifyInstance } from "fastify";
import { partRequestSchema } from "@partfinder/shared";
import { createPartRequest, getPartRequests } from "./part-request.controller";

export async function partRequestRoutes(app: FastifyInstance) {
  app.post("/", { schema: { body: partRequestSchema } }, createPartRequest);
  app.get("/", getPartRequests);
}
