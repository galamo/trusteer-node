import * as express from "express";
import { customersRouter } from "./customers";
import { employeesRouter } from "./employees";
import { mls, mlsNames } from "./middleware";
import pool from "./connection";
import * as dotenv from "dotenv";
dotenv.config();

const port: number = 3200;
const app = express();

// app.use(...mls);
app.use(mlsNames.addRequestId);
app.get("/health-check", (req, res) => {
  res.send("Api is up");
});

app.get("/slow-query", async function (req, res, next) {
  const start = new Date().getTime();
  console.log(`Before slow query`, start);
  const result = await pool.query("do sleep(5)");
  const end = new Date().getTime();
  console.log(`After slow query`, end);
  res.send(`Result Time: ${end - start}`);
  console.log(end - start);
});

app.get("/fast-query", async function (req, res, next) {
  const start = new Date().getTime();
  console.log(`Before fast query`, start);
  const result = await pool.query("select * from products");
  const end = new Date().getTime();
  console.log(`After fast query`, end);
  res.send(`Result Time: ${end - start}`);
  console.log(end - start);
});

app.use(mlsNames.auth);
app.use(mlsNames.printLog);

app.use("/customers", customersRouter);
app.use("/employees", employeesRouter);

app.use((err: Error, req: express.Request, res, next) => {
  console.log(`Error in API: `, err.message, req.requestId);
  return res
    .status(500)
    .json({ message: "Something went wrong", requestId: req.requestId });
});

app
  .listen(port, () => {
    console.log(`Listening to port ${port}`);
  })
  .on("error", function (err) {
    console.log("API IS DOWN");
  });
