import { Static, Type } from "@fastify/type-provider-typebox";

const aiResultSchema = Type.Object({
  prediction: Type.String(),
  confidence: Type.Number(),
  probabilities: Type.Object({
    "Low Risk": Type.Number(),
    "Mid Risk": Type.Number(),
    "High Risk": Type.Number()
  }),
  topFactors: Type.Array(Type.Object({
       feature: Type.String(),
       impact: Type.Number()
  })),
  modelVersion: Type.String()
})

type AiApiResponse = Static<typeof aiResultSchema>;

export {
     type AiApiResponse
}