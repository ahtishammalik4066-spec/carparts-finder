import type { FastifyInstance } from "fastify";
import { getMakes, getMakeModels } from "./make.controller";

export async function makeRoutes(app: FastifyInstance) {
  app.get("/", getMakes);
  app.get("/:id/models", getMakeModels);
}
