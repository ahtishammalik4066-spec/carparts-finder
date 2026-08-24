import type { FastifyRequest, FastifyReply } from "fastify";
import { listMakes, getModelsForMake } from "./make.service";

export async function getMakes(request: FastifyRequest, reply: FastifyReply) {
  const makes = await listMakes();
  return reply.send({ success: true, data: makes });
}

export async function getMakeModels(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as { id: string };
  const models = await getModelsForMake(id);
  return reply.send({ success: true, data: models });
}
