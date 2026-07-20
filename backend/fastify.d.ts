import 'fastify';
import type fastify from 'fastify';

declare module 'fastify' {
  // opening the FastifyRequest interface to add our property
  interface FastifyRequest {
    user: {
      id: string;
      email?: string;
    } | null;
  }
}