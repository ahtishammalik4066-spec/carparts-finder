import type { FastifyInstance } from "fastify";
import { getShops, getShop } from "./shop.controller";

export async function shopRoutes(app: FastifyInstance) {
  app.get("/", getShops);
  app.get("/:slug", getShop);
}
