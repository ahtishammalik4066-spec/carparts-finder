import type { FastifyRequest, FastifyReply } from "fastify";
import { createNewPartRequest, listPartRequests } from "./part-request.service";

export async function createPartRequest(request: FastifyRequest, reply: FastifyReply) {
  const result = await createNewPartRequest(request.body as Record<string, unknown>);
  return reply.code(201).send(result);
}

export async function getPartRequests(request: FastifyRequest, reply: FastifyReply) {
  const requests = await listPartRequests();
  return reply.send({ success: true, data: requests });
}
