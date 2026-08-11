import type { FastifyRequest } from "fastify";
import { ClientFacingError } from "../errors/api-error";

const requireAuthenticatedUserId = (request: FastifyRequest): string => {
     const userId = request.user?.id;

     if (userId === undefined) {
          throw new ClientFacingError({
               statusCode: 401,
               code: "AUTHENTICATION_REQUIRED",
               message: "You must be signed in to perform this action."
          });
     }

     return userId;
};

export {
     requireAuthenticatedUserId
};
