import type { FastifyInstance } from "fastify";
import { getVehicles, getVehicle } from "./vehicle.controller";

export async function vehicleRoutes(app: FastifyInstance) {
  app.get("/", getVehicles);
  app.get("/:id", getVehicle);
}
