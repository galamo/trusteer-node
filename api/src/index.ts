import * as express from "express";
import { customersRouter } from "./customers";
import { employeesRouter } from "./employees";
import { mls, mlsNames } from "./middleware";
import * as dotenv from "dotenv";
dotenv.config();

const port: number = 3200;
const app = express();

// app.use(...mls);
app.use(mlsNames.addRequestId);
app.get("/health-check", (req, res) => {
  res.send("Api is up");
});

app.use(mlsNames.auth);
app.use(mlsNames.printLog);

app.use("/customers", customersRouter);
app.use("/employees", employeesRouter);

app.use((err: Error, req: express.Request, res, next) => {
  console.log(`Error in API: `, err.message);
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
