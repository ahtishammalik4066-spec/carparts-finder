import type { FastifyRequest, FastifyReply } from "fastify";
import { listListings, findListing } from "./listing.service";

export async function getListings(request: FastifyRequest, reply: FastifyReply) {
  const query = request.query as Record<string, unknown>;
  const listings = await listListings(query);
  return reply.send({ success: true, data: listings });
}

export async function getListing(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as { id: string };
  const listing = await findListing(id);
  return reply.send({ success: true, data: listing });
}
