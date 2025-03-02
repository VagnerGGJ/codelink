import { FastifyReply, FastifyRequest } from "fastify";
import { userService } from "../services/userService";

// Função para criar um novo usuário
export const createUser = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { nome, email, senha, githubUsername, profileImageUrl } = request.body as {
      nome: string;
      email: string;
      senha: string;
      githubUsername: string;
      profileImageUrl?: string;
    };

    // Chama o serviço para criar o usuário
    const newUser = await userService.createUser(nome, email, senha, githubUsername, profileImageUrl);

    // Retorna o usuário criado
    reply.status(201).send({ message: "Usuário criado com sucesso", user: newUser });
  } catch (error) {
    reply.status(400).send({ error: error.message });
  }
};

// Função para login do usuário
export const loginUser = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { email, senha } = request.body as { email: string; senha: string };

    // Chama o serviço para autenticar o usuário
    const user = await userService.loginUser(email, senha);

    // Retorna o usuário autenticado
    reply.status(200).send({ message: "Login bem-sucedido", user });
  } catch (error) {
    reply.status(400).send({ error: error.message });
  }
};

// Função para atualizar as informações do usuário
export const updateUser = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = request.params as { id: number };
    const data = request.body as {
      name?: string;
      email?: string;
      password?: string;
      profileImageUrl?: string;
    };

    // Chama o serviço para atualizar o usuário
    const updatedUser = await userService.updateUser(id, data);

    // Retorna o usuário atualizado
    reply.status(200).send({ message: "Usuário atualizado com sucesso", user: updatedUser });
  } catch (error) {
    reply.status(400).send({ error: error.message });
  }
};

// Função para excluir o usuário
export const deleteUser = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = request.params as { id: number };

    // Chama o serviço para excluir o usuário
    await userService.deleteUser(id);

    // Retorna uma resposta de sucesso
    reply.status(200).send({ message: "Usuário excluído com sucesso" });
  } catch (error) {
    reply.status(400).send({ error: error.message });
  }
};
