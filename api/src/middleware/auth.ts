const token = "1234";

const auth = (req, res, next) => {
  const params = req.query;
  if (params.token === token) {
    return next();
  } else {
    return res.status(404).send("Not Authorized!");
  }
};

export { auth };
