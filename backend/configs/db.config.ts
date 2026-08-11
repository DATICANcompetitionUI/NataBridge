const configuredPort = Number(process.env.db_port);
const certificate = process.env.avien_ca_cert?.trim();

const dbConfig = {
	host: process.env.db_host,
	user: process.env.db_user,
	password: process.env.db_password,
	database: process.env.db_name,
	port: Number.isInteger(configuredPort) && configuredPort > 0
		? configuredPort
		: 5432,
	max: 10,
	idleTimeoutMillis: 10000,
	connectionTimeoutMillis: 0,
	ssl: certificate === undefined || certificate.length === 0
		? undefined
		: {
			ca: certificate.replace(/\\n/g, '\n')
		}
};

export { dbConfig };
