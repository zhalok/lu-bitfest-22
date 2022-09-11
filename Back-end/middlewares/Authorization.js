const { validate_token } = require("../utils/Auth");

const authorization = (req, res, next) => {
  const token = req.headers.bearer;

  if (!token) {
    res.status(401).json({ message: "Unauthorized request" });
    return;
  }

  if (validate_token(token)) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized request" });
    return;
  }
};

module.exports = authorization;
