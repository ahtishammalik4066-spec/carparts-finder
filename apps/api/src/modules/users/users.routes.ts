import type { FastifyInstance } from "fastify";
import { getUsers, getUser, updateUser, deleteUser } from "./user.controller";

export async function userRoutes(app: FastifyInstance) {
  app.get("/", getUsers);
  app.get("/:id", getUser);
  app.put("/:id", updateUser);
  app.delete("/:id", deleteUser);
}
