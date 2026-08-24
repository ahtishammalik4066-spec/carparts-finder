import type { FastifyInstance } from "fastify";
import { getYears } from "./year.controller";

export async function yearRoutes(app: FastifyInstance) {
  app.get("/", getYears);
}
