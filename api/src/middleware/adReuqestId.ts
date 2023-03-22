import * as express from "express";
import * as uuid4 from "uuid4";
declare global {
  namespace Express {
    interface Request {
      requestId?: string;
    }
  }
}

const addRequestId = (req: express.Request, res: express.Response, next) => {
  const requestId = uuid4();
  req.requestId = requestId;
  res.setHeader("x-request-id", requestId);
  next();
};

export { addRequestId };
