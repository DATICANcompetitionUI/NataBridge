import { Static, Type } from "@fastify/type-provider-typebox";

const createPatientRequest = Type.Object({
     firstName: Type.String(),
     middleName: Type.String(),
     lastName: Type.String(),
     dob: Type.String(),
     email: Type.String({format:"email"}),
     phone: Type.String(),
})

type CreatePatientRequest = Static<typeof createPatientRequest>;

export  type { CreatePatientRequest };