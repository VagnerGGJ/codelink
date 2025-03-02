import { userRepository } from "../repositories/userRepository";
import { z } from "zod";
import bcrypt from "bcrypt";
import { userSchema, loginSchema } from "../schemas/userSchema";
import { Prisma } from "@prisma/client";

// Função para criar um novo usuário
export const userService = {
  async createUser(nome: string, email: string, senha: string, githubUsername: string, profileImageUrl?: string) {
    // Validação de dados de entrada
    const parsedData = userSchema.safeParse({ nome, email, senha });

    if (!parsedData.success) {
      throw new Error("Dados de usuário inválidos");
    }

    // Verifica se já existe um usuário com o mesmo e-mail
    const existingUser = await userRepository.findUserByEmail(email);
    if (existingUser) {
      throw new Error("E-mail já está em uso");
    }

    // Hash da senha para segurança
    const hashedPassword = await bcrypt.hash(senha, 10);

    // Cria o usuário no banco de dados
    return await userRepository.createUser(nome, email, hashedPassword, githubUsername, profileImageUrl);
  },

  async loginUser(email: string, senha: string) {
    // Validação de dados de login
    const parsedLoginData = loginSchema.safeParse({ email, senha });

    if (!parsedLoginData.success) {
      throw new Error("Dados de login inválidos");
    }

    // Verifica se o usuário existe
    const user = await userRepository.findUserByEmail(email);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    // Verifica a senha
    const isPasswordValid = await bcrypt.compare(senha, user.password);
    if (!isPasswordValid) {
      throw new Error("Senha incorreta");
    }

    return user;
  },

  async updateUser(id: number, data: Partial<{ name: string; email: string; password: string; profileImageUrl: string }>) {
    // Se a senha for atualizada, devemos fazer o hash
    if (data.password) {
      const hashedPassword = await bcrypt.hash(data.password, 10);
      data.password = hashedPassword;
    }

    return await userRepository.updateUser(id, data);
  },

  async deleteUser(id: number) {
    return await userRepository.deleteUser(id);
  },
};
