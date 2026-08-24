import type { FastifyRequest, FastifyReply } from "fastify";
import { listYears } from "./year.service";

export async function getYears(request: FastifyRequest, reply: FastifyReply) {
  const years = await listYears();
  return reply.send({ success: true, data: years });
}
