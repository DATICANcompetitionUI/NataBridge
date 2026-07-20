import { FastifyInstance } from "fastify";
import { postAssessment } from "../../controllers/assessment/assessment.controller";

export async function assessmentRoutes(fastify: FastifyInstance) {
    fastify.post('', postAssessment);
}