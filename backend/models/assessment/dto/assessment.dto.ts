import { Type } from "@fastify/type-provider-typebox";
import type { Static } from "@fastify/type-provider-typebox";
import { predictionRequestSchema } from "../../prediction/dto/prediction.dto";

const patientAssessmentRequestSchema = Type.Object(
     {
          ...predictionRequestSchema.properties,
          gestationalAge: Type.Union([
               Type.Null(),
               Type.Number({ minimum: 1, maximum: 45 })
          ]),
          firstPregnancy: Type.Union([
               Type.Null(),
               Type.Boolean()
          ]),
          previousComplications: Type.Union([
               Type.Null(),
               Type.String({ maxLength: 2_000 })
          ])
     },
     { additionalProperties: false }
);

const patientAssessmentParamsSchema = Type.Object(
     {
          patientId: Type.String({ minLength: 1, maxLength: 50 })
     },
     { additionalProperties: false }
);

type PatientAssessmentRequest = Static<typeof patientAssessmentRequestSchema>;
type PatientAssessmentParams = Static<typeof patientAssessmentParamsSchema>;

export {
     patientAssessmentParamsSchema,
     patientAssessmentRequestSchema
};

export type {
     PatientAssessmentParams,
     PatientAssessmentRequest
};
