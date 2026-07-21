import { Static, Type } from "@fastify/type-provider-typebox";

const topFactors = Type.Object({
  feature: Type.String(),
  impact: Type.Number()
})

const recommendations = Type.Object({
  feature: Type.String(),
  patientValue: Type.Number(),
  condition: Type.String(),
  actions: Type.Array(Type.String()),
  counselling: Type.Array(Type.String())
})

const aiResultSchema = Type.Object({
  prediction: Type.String(),
  confidence: Type.Number(),
  probabilities: Type.Object({
    "Low Risk": Type.Number(),
    "Mid Risk": Type.Number(),
    "High Risk": Type.Number()
  }),
  topFactors: Type.Array(topFactors),
  recommendations: Type.Array(recommendations),
  modelVersion: Type.String()
})

type AiApiResponse = Static<typeof aiResultSchema>;

export {
  type AiApiResponse
}