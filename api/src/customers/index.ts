import * as express from "express";
import { getCustomers } from "./handlers/getCustomers";

const customersRouter = express.Router();

customersRouter.get("/", async function (req, res, next) {
  const result = await getCustomers();
  res.json(result);
});

customersRouter.get("/search", function (req, res, next) {
  res.json("search");
});
customersRouter.get("/health-check", function (req, res, next) {
  res.json("/customers Api is ok");
});

export { customersRouter };
