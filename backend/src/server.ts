import fastify from "fastify";
import { userRoutes } from "./routes/userRoutes";

const server = fastify({
  logger: true,
});

server.register(userRoutes);

server.get("/", async (request, reply) => {
  return { message: "Bem-vindo ao CodeLink!" };
});

const start = async () => {
  try {
    await server.listen({ port: 3000 });
    console.log(`Servidor rodando em http://localhost:3000`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
