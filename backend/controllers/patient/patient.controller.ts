import type { FastifyReply, FastifyRequest } from "fastify";
import { fetchPatientsWithLatestAssessment, registerPatient } from "../../services/patient/patient.service";
import { CreatePatientRequest } from "../../models/patient/dto/patient.dto";

const postPatient = async (
     request: FastifyRequest<{
          Body: CreatePatientRequest
     }>,
     reply: FastifyReply
) => {
     try {
          if (!request.user) return reply.code(403).send("Unauthenticated");

          const patient = await registerPatient(request.server, request.body);

          return reply.code(201).send(patient);
     } catch (error) {
          request.log.error(error);

          return reply.code(500).send({
               message: "Failed to create patient"
          });
     }
};

const getPatients = async (
     request: FastifyRequest,
     reply: FastifyReply
) => {
     try {          
          if (!request.user) return reply.code(403).send("Unauthenticated");

          const patients = await fetchPatientsWithLatestAssessment(request.server);

          return reply.status(200).send({
               data: patients
          });
     } catch (error) {
          request.log.error(error);

          return reply.code(500).send({
               message: "Failed to get patients"
          });
     }
};

export {
     postPatient,
     getPatients
};