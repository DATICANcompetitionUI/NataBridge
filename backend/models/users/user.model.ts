import { Static, Type } from "@fastify/type-provider-typebox";

const userRequestSchema = Type.Object({

})

type UserRequestPayload = Static<typeof userRequestSchema>;

export type { UserRequestPayload };