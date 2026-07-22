import type { FastifyReply, FastifyRequest } from "fastify";
import { InitAssessmentRequest } from "../../models/assessment/dto/assessment.dto";
import { processAssessment } from "../../services/assessment/assessment.service";

const postAssessment = async (request: FastifyRequest<{ Body: InitAssessmentRequest }>, reply: FastifyReply) => {
    try {
        const userId = request.user?.id;

        const result = await processAssessment(request.server, request.body, userId);

        return reply.code(200).send(result);
    } catch (error) {
        request.log.error(error);
        return reply.code(500).send({
            message: "Failed to process assessment"
        });
    }
}

export {
    postAssessment
}