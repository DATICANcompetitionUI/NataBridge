import type { FastifyReply, FastifyRequest } from "fastify";
import type {
    PatientAssessmentParams,
    PatientAssessmentRequest
} from "../../models/assessment/dto/assessment.dto";
import { processPatientAssessment } from "../../services/assessment/assessment.service";
import { requireAuthenticatedUserId } from "../../utils/auth";

const postPatientAssessment = async (
    request: FastifyRequest<{
        Body: PatientAssessmentRequest;
        Params: PatientAssessmentParams;
    }>,
    reply: FastifyReply
) => {
    const userId = requireAuthenticatedUserId(request);

    const result = await processPatientAssessment(
        request.server,
        request.params.patientId,
        request.body,
        userId,
        request.id
    );

    return reply.code(201).send({
        data: result
    });
};

export {
    postPatientAssessment
};
