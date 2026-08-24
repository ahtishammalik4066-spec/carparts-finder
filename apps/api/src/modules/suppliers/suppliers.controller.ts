import type { FastifyRequest, FastifyReply } from "fastify";
import { registerNewSupplier, getLeadsForSupplier, addListing, editListing, removeListing } from "./supplier.service";

export async function registerSupplier(request: FastifyRequest, reply: FastifyReply) {
  const result = await registerNewSupplier(request.body as Record<string, unknown>);
  return reply.code(201).send(result);
}

export async function getSupplierLeads(request: FastifyRequest, reply: FastifyReply) {
  const leads = await getLeadsForSupplier();
  return reply.send({ success: true, data: leads });
}

export async function createListing(request: FastifyRequest, reply: FastifyReply) {
  const listing = await addListing(request.body as Record<string, unknown>);
  return reply.code(201).send({ success: true, data: listing });
}

export async function updateListing(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as { id: string };
  const listing = await editListing(id, request.body as Record<string, unknown>);
  return reply.send({ success: true, data: listing });
}

export async function deleteListing(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as { id: string };
  await removeListing(id);
  return reply.send({ success: true });
}
