import type { FastifyRequest, FastifyReply } from "fastify";
import { listParts, findPart } from "./part.service";

export async function getParts(request: FastifyRequest, reply: FastifyReply) {
  const parts = await listParts();
  return reply.send({ success: true, data: parts });
}

export async function getPart(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as { id: string };
  const part = await findPart(id);
  return reply.send({ success: true, data: part });
}
