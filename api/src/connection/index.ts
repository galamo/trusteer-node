import * as mysql from "mysql2/promise";
import * as dotenv from "dotenv";
dotenv.config();
// process.env.UV_THREADPOOL_SIZE = "8";
// console.log(process.env.UV_THREADPOOL_SIZE);

const { HOST, PORT, DATABASE, DBUSER, PASSWORD } = process.env;

if (!HOST || !PORT || !DATABASE || !DBUSER || !PASSWORD) {
  console.log(
    "\x1b[41m\x1b[33m%s\x1b[0m",
    "Missing Environment Variables - Connection MYSQL"
  ); //yellow
  process.exit(1);
}

console.log("Connection running...");
// user environment variables
const pool = mysql.createPool({
  host: HOST,
  port: +PORT,
  user: DBUSER,
  password: PASSWORD,
  connectionLimit: 20,
  database: DATABASE,
});

pool.on("connection", () => {
  console.log("DB connection established");
});
export default pool;
// mysql.createConnection({

// })
