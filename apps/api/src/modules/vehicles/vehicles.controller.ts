import type { FastifyRequest, FastifyReply } from "fastify";
import { listVehicles, findVehicle } from "./vehicle.service";

export async function getVehicles(request: FastifyRequest, reply: FastifyReply) {
  const vehicles = await listVehicles();
  return reply.send({ success: true, data: vehicles });
}

export async function getVehicle(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as { id: string };
  const vehicle = await findVehicle(id);
  return reply.send({ success: true, data: vehicle });
}
