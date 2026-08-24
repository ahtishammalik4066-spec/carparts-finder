import type { FastifyRequest, FastifyReply } from "fastify";

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
  try {
    await request.jwtVerify();
  } catch (err) {
    return reply.code(401).send({
      success: false,
      error: {
        code: "UNAUTHORIZED",
        message: "Authentication required",
      },
    });
  }
}

export async function requireRole(roles: string[]) {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const user = request.user as { role?: string } | undefined;
    if (!user?.role || !roles.includes(user.role)) {
      return reply.code(403).send({
        success: false,
        error: {
          code: "FORBIDDEN",
          message: "Insufficient permissions",
        },
      });
    }
  };
}