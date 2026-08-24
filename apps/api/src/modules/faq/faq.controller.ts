import type { FastifyRequest, FastifyReply } from "fastify";
import { listFaqs } from "./faq.service";

export async function getFaqs(request: FastifyRequest, reply: FastifyReply) {
  const faqs = await listFaqs();
  return reply.send({ success: true, data: faqs });
}
