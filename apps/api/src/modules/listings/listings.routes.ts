import type { FastifyInstance } from "fastify";
import { listingQuerySchema } from "@partfinder/shared";
import { getListings, getListing } from "./listing.controller";

export async function listingRoutes(app: FastifyInstance) {
  app.get("/", { schema: { querystring: listingQuerySchema } }, getListings);
  app.get("/:id", getListing);
}
