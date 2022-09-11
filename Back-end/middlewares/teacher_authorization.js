const { validate_token } = require("../utils/Auth");

const user_authorization = (req, res, next) => {
  const token = req.headers.bearer;

  if (!token) {
    res.status(401).json({ message: "Unauthorized request" });
    return;
  }
  const decoded_token = validate_token(token);
  if (decoded_token) {
    if (decoded_token.type == "teacher" || decoded_token.type == "admin")
      next();
  } else {
    res.status(401).json({ message: "Unauthorized request" });
    return;
  }
};

module.exports = user_authorization;
