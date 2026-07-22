import type { FastifyInstance } from "fastify";
import { postAssessment } from "../../controllers/assessment/assessment.controller";

export async function dashboardRoutes(fastify: FastifyInstance) {
    fastify.post('', postAssessment);
}