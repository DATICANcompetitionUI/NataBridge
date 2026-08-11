import type { FastifyInstance } from "fastify";
import { postPatientAssessment } from "../../controllers/assessment/assessment.controller";
import {
    patientAssessmentParamsSchema,
    patientAssessmentRequestSchema
} from "../../models/assessment/dto/assessment.dto";

export async function assessmentRoutes(fastify: FastifyInstance) {
    fastify.post(
        "/:patientId/assessments",
        {
            schema: {
                body: patientAssessmentRequestSchema,
                params: patientAssessmentParamsSchema
            }
        },
        postPatientAssessment
    );
}
