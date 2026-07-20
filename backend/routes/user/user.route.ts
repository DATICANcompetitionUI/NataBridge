import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import { getAllUsers, getUserById } from "../../controllers/user/user.controller";


export async function userRoutes(fastify: FastifyInstance) {
    fastify.get('', getAllUsers);
    fastify.get('/:id', getUserById);
    fastify.post('', async (request: FastifyRequest, reply: FastifyReply) => {
        return { message: 'User created' };
    });
}