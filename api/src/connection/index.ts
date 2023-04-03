import * as mysql from "mysql2/promise";
import * as dotenv from "dotenv";
dotenv.config();
const { HOST, PORT, DATABASE, USER, PASSWORD } = process.env;

if (!HOST || !PORT || !DATABASE || !USER || !PASSWORD) {
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
  user: USER,
  password: PASSWORD,
  connectionLimit: 10,
  database: DATABASE,
});

pool.on("connection", () => {
  console.log("DB connection established");
});
export default pool;
// mysql.createConnection({

// })
