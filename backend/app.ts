import fastifyCors from "@fastify/cors";
import { fastifyPostgres } from "@fastify/postgres";
import type { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { fastify, FastifyInstance } from 'fastify'
import { dbConfig } from "./configs/db.config";
import { assessmentRoutes } from "./routes/assessment/assessment.route";
import { patientRoutes } from "./routes/patient/patient.route";

const server: FastifyInstance = fastify({
	logger: true,
}).withTypeProvider<TypeBoxTypeProvider>();

// load plugins (from the Fastify ecosystem) next
server.register(fastifyCors, {
	origin: process.env.FRONTEND_ORIGIN!,
	methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
	allowedHeaders: ["Content-Type", "Authorization"],
});
server.register(fastifyPostgres, dbConfig);
server.register(patientRoutes, {prefix: '/api/patients'});
server.register(assessmentRoutes, {prefix: '/api/assessments'});

server.decorateRequest("user", null);

server.listen(
	{ port: Number(process.env?.PORT) || 4200, host: "0.0.0.0" },
	(err, address) => {
		if (err) {
			server.log.error(err);
			process.exit(1);
		}

		server.log.info(`Server running on port ${address}!`);
	},
);