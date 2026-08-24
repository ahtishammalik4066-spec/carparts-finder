import type { FastifyReply } from "fastify";

export function success<T>(reply: FastifyReply, data: T, statusCode = 200) {
  return reply.code(statusCode).send({
    success: true,
    data,
  });
}

export function error(
  reply: FastifyReply,
  code: string,
  message: string,
  statusCode = 400,
  details?: unknown
) {
  return reply.code(statusCode).send({
    success: false,
    error: {
      code,
      message,
      ...(details ? { details } : {}),
    },
  });
}

export function notFound(reply: FastifyReply, resource = "Resource") {
  return error(reply, "NOT_FOUND", `${resource} not found`, 404);
}

export function unauthorized(reply: FastifyReply) {
  return error(reply, "UNAUTHORIZED", "Authentication required", 401);
}

export function forbidden(reply: FastifyReply) {
  return error(reply, "FORBIDDEN", "Insufficient permissions", 403);
}