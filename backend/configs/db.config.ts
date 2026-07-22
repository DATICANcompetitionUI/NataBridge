const dbConfig = {
	host: process.env.db_host,
	user: process.env.db_user,
	password: process.env.db_password,
	database: process.env.db_name,
	port: process.env.db_port,
	max: 10,
	idleTimeoutMillis: 10000,
	connectionTimeoutMillis: 0,
	ssl: {
		ca: process.env.avien_ca_cert?.replace(/\\n/g, '\n')
	}
};

export { dbConfig };
