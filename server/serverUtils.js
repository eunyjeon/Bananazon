const isAdmin = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    const error = new Error(`Nice try, you're not an Admin!`);
    return next(error);
  }
  next();
};

module.exports = { isAdmin };
