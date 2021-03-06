const dotenv = require("dotenv");
dotenv.config();

const { PORT, HOST, SECRETKEY, HOST_URL, DB_USER, DB_SERVER, DB_PASS, DB_DATABASE } = process.env;

module.exports = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  secretkey: SECRETKEY,
  sql: {
    server: DB_SERVER,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASS,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
    options: {
      trustedConnection: true,
      encrypt: true,
      trustServerCertificate: true,
      enableArithAbort: true,
    },
  },
};