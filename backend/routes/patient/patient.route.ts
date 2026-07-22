import type { FastifyInstance } from "fastify";
import { getPatients, postPatient } from "../../controllers/patient/patient.controller";

export async function patientRoutes(fastify: FastifyInstance) {
    fastify.post('', postPatient);
    fastify.get('/', getPatients);
}