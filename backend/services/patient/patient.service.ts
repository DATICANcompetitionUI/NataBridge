import type { FastifyInstance } from "fastify";
import { CreatePatientRequest } from "../../models/patient/dto/patient.dto";
import { createPatient, getPatientsWithLatestAssessment } from "../../repositories/patient/patient.repo";
import { uuidv7 } from "uuidv7";

const registerPatient = async (
     server: FastifyInstance,
     patient: CreatePatientRequest
) => {
     const client = await server.pg.connect();

     try {
          await client.query("BEGIN");

          const uid = uuidv7();
          const createdPatient =
               await createPatient(client, {id: uid, ...patient});

          await client.query("COMMIT");

          return createdPatient;
     } catch (error) {
          await client.query("ROLLBACK");

          throw error;
     } finally {
          client.release();
     }
};

const fetchPatientsWithLatestAssessment = async (server: FastifyInstance) => {    
     const client = await server.pg.connect();
     
     const result = await getPatientsWithLatestAssessment(client);

     return result;
}

export {
     registerPatient,
     fetchPatientsWithLatestAssessment
};