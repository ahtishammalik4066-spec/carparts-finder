import type { FastifyInstance } from "fastify";
import { getParts, getPart } from "./part.controller";

export async function partRoutes(app: FastifyInstance) {
  app.get("/", getParts);
  app.get("/:id", getPart);
}
