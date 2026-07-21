import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import { getAllUsers, getUserById } from "../../controllers/user/user.controller";

function generateShortHexId(byteLength: number = 4): string {
  const buffer = new Uint8Array(byteLength);
  crypto.getRandomValues(buffer);
  
  // converts each byte to a 2-character hex string and join them
  return Array.from(buffer)
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
}

export async function userRoutes(fastify: FastifyInstance) {
    fastify.get('', getAllUsers);
    fastify.get('/:id', getUserById);

    // demo endpoint to simulate login
    fastify.post('/login', async (request: FastifyRequest, reply: FastifyReply) => {
        const uniqueId = generateShortHexId(4);

        request.user = {
			id: uniqueId,
		};

        return reply.code(200).send({ message: 'User logged in' });
    });
}