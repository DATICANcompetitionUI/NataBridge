import { FastifyRequest, FastifyReply } from "fastify";
import { UserRequestPayload } from "../../models/users/user.model";

const getAllUsers = async(request: FastifyRequest, reply: FastifyReply) => {
    // Logic to get all users
    return { message: 'List of users' };
}

const getUserById = async(request: FastifyRequest<{Params: {id: string}}>, reply: FastifyReply) => {
    const { id } = request.params;

}

const postUser = async(request: FastifyRequest<{Body: UserRequestPayload}>, reply: FastifyReply) => {
     // const incomingUser: UserRequestPayload = request.body;
}

export {
     getAllUsers,
     getUserById,
     postUser
}