import { Static, Type } from "@fastify/type-provider-typebox";

const initAssessmentSchema = Type.Object({
     age: Type.Number({ minimum: 10, maximum: 70 }),
     systolicBP: Type.Number({ minimum: 60, maximum: 250 }),
     diastolicBP: Type.Number({ minimum: 30, maximum: 150 }),
     bloodSugar: Type.Number({ minimum: 2 }),
     bodyTemp: Type.Number({ minimum: 90, maximum: 110 }),
     heartRate: Type.Number({ minimum: 30, maximum: 220 }),
     dob: Type.Union([Type.Null(), Type.String({ format: "date-time" })]),
     email: Type.Union([Type.Null(), Type.String({ format: "email" })]),
     gestationalAge: Type.Union([Type.Null(), Type.Number()]),
     firstPregnancy: Type.Union([Type.Null(), Type.Boolean()]),
     firstname: Type.Union([Type.Null(), Type.String()]),
     lastname: Type.Union([Type.Null(), Type.String()]),
     middlename: Type.Union([Type.Null(), Type.String()]),
     phone: Type.Union([Type.Null(), Type.String()]),
     previousComplications: Type.Union([Type.Null(), Type.String()]),
})

type InitAssessmentRequest = Static<typeof initAssessmentSchema>;

export type { InitAssessmentRequest }