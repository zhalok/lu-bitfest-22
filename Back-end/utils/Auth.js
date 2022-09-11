const jwt = require("jsonwebtoken");
const auth = {};
auth.generate_token = (payload) => {
  const encoded = jwt.sign(payload, "03041959", {
    expiresIn: "2 days",
  });
  return encoded;
};

auth.validate_token = (token) => {
  try {
    var decoded = jwt.verify(token, "03041959");
    const cur_time = Math.floor(Date.now() / 1000);
    if (cur_time > decoded.exp) return false;
    else return decoded;
  } catch (e) {
    return false;
  }
};

console.log();
module.exports = auth;
