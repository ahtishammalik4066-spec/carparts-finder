import type { FastifyRequest, FastifyReply } from "fastify";
import { listShops, findShop } from "./shop.service";

export async function getShops(request: FastifyRequest, reply: FastifyReply) {
  const shops = await listShops();
  return reply.send({ success: true, data: shops });
}

export async function getShop(request: FastifyRequest, reply: FastifyReply) {
  const { slug } = request.params as { slug: string };
  const shop = await findShop(slug);
  return reply.send({ success: true, data: shop });
}
