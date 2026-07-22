import type { FastifyReply, FastifyRequest } from "fastify";
import { getDashboard } from "../../services/dashboard/dashboard.service";

const getDashboardDetails = async (request: FastifyRequest, reply: FastifyReply) => {
     try {
          const details = await getDashboard();

          return reply.code(200).send(details)
     } catch (error) {
          request.log.error(error);
        return reply.code(500).send({
            message: "Failed to retrieve dashboard details"
        });
     }
}