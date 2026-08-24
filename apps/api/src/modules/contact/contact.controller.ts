import type { FastifyRequest, FastifyReply } from "fastify";
import { createNewContactMessage, listContactMessages } from "./contact.service";

export async function createContactMessage(request: FastifyRequest, reply: FastifyReply) {
  const result = await createNewContactMessage(request.body as Record<string, unknown>);
  return reply.code(201).send(result);
}

export async function getContactMessages(request: FastifyRequest, reply: FastifyReply) {
  const messages = await listContactMessages();
  return reply.send({ success: true, data: messages });
}
