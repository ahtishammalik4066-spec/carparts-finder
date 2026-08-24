import type { FastifyInstance } from "fastify";
import { contactSchema } from "@partfinder/shared";
import { createContactMessage, getContactMessages } from "./contact.controller";

export async function contactRoutes(app: FastifyInstance) {
  app.post("/", { schema: { body: contactSchema } }, createContactMessage);
  app.get("/", getContactMessages);
}
