import * as express from "express";
import { getEmployees } from "./handlers/getEmployees";

const employeesRouter = express.Router();

employeesRouter.get("/", async function (req, res, next) {
  const result = await getEmployees();
  res.json(result);
});

export { employeesRouter };
