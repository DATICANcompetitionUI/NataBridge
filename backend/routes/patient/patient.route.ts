import type { FastifyInstance } from "fastify";
import {
    getPatient,
    getPatients,
    postPatient
} from "../../controllers/patient/patient.controller";
import {
    createPatientRequestSchema,
    patientParamsSchema
} from "../../models/patient/dto/patient.dto";

export async function patientRoutes(fastify: FastifyInstance) {
    fastify.post(
        "",
        {
            schema: {
                body: createPatientRequestSchema
            }
        },
        postPatient
    );
    fastify.get("", getPatients);
    fastify.get(
        "/:patientId",
        {
            schema: {
                params: patientParamsSchema
            }
        },
        getPatient
    );
}
