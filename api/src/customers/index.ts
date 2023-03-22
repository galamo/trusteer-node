import * as express from "express";

const customersRouter = express.Router();

customersRouter.get("/", function (req, res, next) {
  const customers = [{ name: "michael" }];
  res.json(customers);
});

customersRouter.get("/search", function (req, res, next) {
  res.json("search");
});
customersRouter.get("/health-check", function (req, res, next) {
  res.json("/customers Api is ok");
});

export { customersRouter };
