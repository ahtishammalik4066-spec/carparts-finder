import Fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import jwt from "@fastify/jwt";
import rateLimit from "@fastify/rate-limit";
import { API_PREFIX } from "@partfinder/shared";

import { config } from "./config";
import { registerRoutes } from "./plugins/routes";

const app = Fastify({
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
      },
    },
  },
});

async function bootstrap() {
  // Register plugins
  await app.register(cors, {
    origin: true,
    credentials: true,
  });

  await app.register(helmet);

  await app.register(jwt, {
    secret: config.jwtSecret,
  });

  await app.register(rateLimit, {
    max: 100,
    timeWindow: "1 minute",
  });

  // Register all module routes
  await registerRoutes(app, API_PREFIX);

  // Health check
  app.get("/health", async () => {
    return { status: "ok", timestamp: new Date().toISOString() };
  });

  // Start server
  try {
    await app.listen({ port: config.port, host: "0.0.0.0" });
    app.log.info(`PartFinder API running on port ${config.port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

bootstrap();