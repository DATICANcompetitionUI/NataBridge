import type { FastifyInstance } from "fastify";
import { getDashboardDetails } from "../../controllers/dashboard/dashboard.controller";

export async function dashboardRoutes(fastify: FastifyInstance) {
    fastify.get("", getDashboardDetails);
}
