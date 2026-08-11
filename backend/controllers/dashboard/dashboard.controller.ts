import type { FastifyReply, FastifyRequest } from "fastify";
import { getDashboard } from "../../services/dashboard/dashboard.service";
import { requireAuthenticatedUserId } from "../../utils/auth";

const getDashboardDetails = async (request: FastifyRequest, reply: FastifyReply) => {
     requireAuthenticatedUserId(request);

     const details = await getDashboard(request.server);

     return reply.code(200).send({
          data: details
     });
};

export {
     getDashboardDetails
};
