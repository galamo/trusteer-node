import * as express from "express";

const port: number = 3200;
const app = express();

app.use((req, res, next) => {
  const params = req.query;
  if (params.token === "123") {
    return next();
  } else {
    return res.status(404).send("Not Authorized!");
  }
});

app.use((req, res, next) => {
  console.log(req.url);
  const params = req.query;
  console.log(req.url, req.path, params, req.body);
  next();
});

app.get(
  "/getDate",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    for (let index = 0; index < 9999999999; index++) {}
    return res.send(new Date().toString());
  }
);

app.get(
  "/user",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    return res.json({ name: "Alon", age: 34, lastLogin: Date.now() });
  }
);

app.get(
  "/users/:usersparam",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    return res.json([
      { name: "Alon", age: 34, lastLogin: Date.now() },
      { name: "Alon", age: 34, lastLogin: Date.now() },
    ]);
  }
);

app
  .listen(port, () => {
    console.log(`Listening to port ${port}`);
  })
  .on("error", function (err) {
    console.log("API IS DOWN");
  });
