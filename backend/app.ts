import fastifyCors from "@fastify/cors";
import fastifyCookies from "@fastify/cookie";
import { fastifyPostgres } from "@fastify/postgres";
import type { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { fastify, FastifyInstance } from 'fastify'
import { dbConfig } from "./configs/db.config";
import { assessmentRoutes } from "./routes/assessment/assessment.route";
import { patientRoutes } from "./routes/patient/patient.route";
import { userRoutes } from "./routes/user/user.route";

const server: FastifyInstance = fastify({
	logger: true,
}).withTypeProvider<TypeBoxTypeProvider>();

// load plugins (from the Fastify ecosystem) next
server.register(fastifyCors, {
	origin: process.env.frontend_origin!,
	methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
	allowedHeaders: ["Content-Type", "Authorization"],
	credentials: true
});
server.register(fastifyPostgres, dbConfig);
server.register(fastifyCookies);
server.register(userRoutes, { prefix: '/api/users' });
server.register(patientRoutes, { prefix: '/api/patients' });
server.register(assessmentRoutes, { prefix: '/api/assessments' });

server.decorateRequest("user", null);

server.addHook('preHandler', async (request, reply) => {
	const sessionId = request.cookies.session_id;

	if (!sessionId) {
		request.user = null;
		return;
	}

	request.user = {
		id: sessionId
	};
});

server.listen(
	{ port: Number(process.env?.PORT) || 4500, host: "0.0.0.0" },
	(err, address) => {
		if (err) {
			server.log.error(err);
			process.exit(1);
		}

		server.log.info(`Server running on port ${address}!`);
	},
);