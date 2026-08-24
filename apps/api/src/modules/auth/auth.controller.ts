import type { FastifyRequest, FastifyReply } from "fastify";
import { loginUser, registerUser } from "./auth.service";

export async function login(request: FastifyRequest, reply: FastifyReply) {
  const { email, password } = request.body as { email: string; password: string };
  const result = await loginUser(email, password);
  return reply.send(result);
}

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const body = request.body as Record<string, unknown>;
  const result = await registerUser(body);
  return reply.code(201).send(result);
}
