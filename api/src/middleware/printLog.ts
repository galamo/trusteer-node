const printLog = (req, res, next) => {
  const params = req.query;
  console.log(req.url, req.path, params, req.body);
  next();
};

export { printLog };
