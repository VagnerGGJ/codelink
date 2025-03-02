import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userRepository = {
  async createUser(nome: string, email: string, senha: string, githubUsername: string, profileImageUrl?: string) {
    return await prisma.user.create({
      data: {
        name: nome,
        email,
        password: senha,
        githubUsername,
        profileImageUrl,
      },
    });
  },

  async findUserByEmail(email: string) {
    return await prisma.user.findUnique({
      where: { email },
      include: {
        ideas: true,
        likes: true,
      },
    });
  },

  async findUserById(id: number) {
    return await prisma.user.findUnique({
      where: { id },
      include: {
        ideas: true,
        likes: true,
      },
    });
  },

  async updateUser(id: number, data: Partial<{ name: string; email: string; password: string; profileImageUrl: string }>) {
    return await prisma.user.update({
      where: { id },
      data,
    });
  },

  async deleteUser(id: number) {
    return await prisma.user.delete({
      where: { id },
    });
  },
};
