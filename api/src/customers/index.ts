import * as express from "express";
import { getCustomerById, getCustomers } from "./handlers/getCustomers";

const customersRouter = express.Router();

customersRouter.get("/", async function (req, res, next) {
  const result = await getCustomers();
  res.json(result);
});

customersRouter.get("/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    if (isNaN(Number(id)))
      throw new Error("Validation Error ID is not a number");
    const result = await getCustomerById(+id);
    res.json(result);
  } catch (error) {
    return next(error);
  }
});

customersRouter.get("/search", function (req, res, next) {
  res.json("search");
});
customersRouter.get("/health-check", function (req, res, next) {
  res.json("/customers Api is ok");
});

export { customersRouter };
