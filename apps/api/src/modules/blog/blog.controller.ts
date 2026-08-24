import type { FastifyRequest, FastifyReply } from "fastify";
import { listPosts, findPost } from "./blog.service";

export async function getPosts(request: FastifyRequest, reply: FastifyReply) {
  const posts = await listPosts();
  return reply.send({ success: true, data: posts });
}

export async function getPost(request: FastifyRequest, reply: FastifyReply) {
  const { slug } = request.params as { slug: string };
  const post = await findPost(slug);
  return reply.send({ success: true, data: post });
}
