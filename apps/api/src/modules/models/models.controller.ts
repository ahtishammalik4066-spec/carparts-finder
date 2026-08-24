import type { FastifyRequest, FastifyReply } from "fastify";
import { listModels, getYearsForModel } from "./model.service";

export async function getModels(request: FastifyRequest, reply: FastifyReply) {
  const models = await listModels();
  return reply.send({ success: true, data: models });
}

export async function getModelYears(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as { id: string };
  const years = await getYearsForModel(id);
  return reply.send({ success: true, data: years });
}
