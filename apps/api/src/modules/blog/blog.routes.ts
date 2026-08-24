import type { FastifyInstance } from "fastify";
import { getPosts, getPost } from "./blog.controller";

export async function blogRoutes(app: FastifyInstance) {
  app.get("/", getPosts);
  app.get("/:slug", getPost);
}
