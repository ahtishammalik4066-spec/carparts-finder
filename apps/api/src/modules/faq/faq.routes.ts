import type { FastifyInstance } from "fastify";
import { getFaqs } from "./faq.controller";

export async function faqRoutes(app: FastifyInstance) {
  app.get("/", getFaqs);
}
