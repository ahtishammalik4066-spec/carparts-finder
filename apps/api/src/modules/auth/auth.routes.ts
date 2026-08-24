import type { FastifyInstance } from "fastify";
import { loginSchema } from "@partfinder/shared";
import { login, register } from "./auth.controller";

export async function authRoutes(app: FastifyInstance) {
  app.post("/login", { schema: { body: loginSchema } }, login);
  app.post("/register", register);
}
