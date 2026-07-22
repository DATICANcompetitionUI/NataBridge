import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { getAllUsers, getUserById } from "../../controllers/user/user.controller";
import { Static, Type } from "@fastify/type-provider-typebox";

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

    const authCredentialsSchema = Type.Object({
        id: Type.String(),
        password: Type.String()
    })

    // demo endpoint to simulate login
    fastify.post('/login', async (request: FastifyRequest<{
        Body: Static<typeof authCredentialsSchema>
    }>, reply) => {
        const uniqueId = generateShortHexId(4);

        reply.setCookie('session_id', uniqueId, {
            httpOnly: true,
            sameSite: 'lax',
            path: '/'
        });

        return reply.code(200).send({
            message: 'User logged in',
            userId: uniqueId
        });
    });
}