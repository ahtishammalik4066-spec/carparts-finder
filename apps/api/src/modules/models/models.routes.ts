import type { FastifyInstance } from "fastify";
import { getModels, getModelYears } from "./model.controller";

export async function modelRoutes(app: FastifyInstance) {
  app.get("/", getModels);
  app.get("/:id/years", getModelYears);
}
