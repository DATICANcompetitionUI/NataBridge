import { buildServer } from "./server";

const server = buildServer();

const start = async () => {
     try {
          const address = await server.listen({
               port: Number(process.env.PORT) || 4500,
               host: "0.0.0.0"
          });

          server.log.info(`Server running on ${address}`);
     } catch (error) {
          server.log.error(error);
          process.exit(1);
     }
};

void start();
