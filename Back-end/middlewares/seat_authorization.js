const { validate_token } = require("../utils/Auth");

const user_authorization = (req, res, next) => {
  const token = req.headers.bearer;

  if (!token) {
    res.status(401).json({ message: "Unauthorized request" });
    return;
  }
  const decoded_token = validate_token(token);
  console.log(decoded_token);
  if (decoded_token) {
    if (
      decoded_token.type == "student" ||
      decoded_token.type == "admin" ||
      decoded_token.type == "staff" ||
      decoded_token.type == "teacher"
    )
      next();
  } else {
    res.status(401).json({ message: "Unauthorized request" });
    return;
  }
};

module.exports = user_authorization;
