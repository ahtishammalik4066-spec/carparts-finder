import type { FastifyRequest, FastifyReply } from "fastify";
import { listLeads, findLead, modifyLead } from "./lead.service";

export async function getLeads(request: FastifyRequest, reply: FastifyReply) {
  const leads = await listLeads();
  return reply.send({ success: true, data: leads });
}

export async function getLead(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as { id: string };
  const lead = await findLead(id);
  return reply.send({ success: true, data: lead });
}

export async function updateLead(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as { id: string };
  const lead = await modifyLead(id, request.body as Record<string, unknown>);
  return reply.send({ success: true, data: lead });
}
