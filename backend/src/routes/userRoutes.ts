import { FastifyInstance } from "fastify";
import { createUser, loginUser, updateUser, deleteUser } from "../controllers/userController";

export const userRoutes = async (fastify: FastifyInstance) => {
  fastify.post("/users", createUser);           // Rota para criar um novo usuário
  fastify.post("/users/login", loginUser);      // Rota para login de usuário
  fastify.put("/users/:id", updateUser);        // Rota para atualizar informações do usuário
  fastify.delete("/users/:id", deleteUser);     // Rota para excluir um usuário
};
