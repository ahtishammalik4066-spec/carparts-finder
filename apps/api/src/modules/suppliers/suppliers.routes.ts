import type { FastifyInstance } from "fastify";
import { supplierRegisterSchema } from "@partfinder/shared";
import { registerSupplier, getSupplierLeads, createListing, updateListing, deleteListing } from "./supplier.controller";

export async function supplierRoutes(app: FastifyInstance) {
  app.post("/register", { schema: { body: supplierRegisterSchema } }, registerSupplier);
  app.get("/leads", getSupplierLeads);
  app.post("/listings", createListing);
  app.put("/listings/:id", updateListing);
  app.delete("/listings/:id", deleteListing);
}
