import type { FastifyRequest, FastifyReply } from "fastify";
import { listUsers, findUser, modifyUser, removeUser } from "./user.service";

export async function getUsers(request: FastifyRequest, reply: FastifyReply) {
  const users = await listUsers();
  return reply.send({ success: true, data: users });
}

export async function getUser(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as { id: string };
  const user = await findUser(id);
  return reply.send({ success: true, data: user });
}

export async function updateUser(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as { id: string };
  const user = await modifyUser(id, request.body as Record<string, unknown>);
  return reply.send({ success: true, data: user });
}

export async function deleteUser(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as { id: string };
  await removeUser(id);
  return reply.send({ success: true });
}
