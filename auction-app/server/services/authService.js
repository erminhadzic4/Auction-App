const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const secretKey = crypto.randomBytes(32).toString("hex");

function generateToken(userId) {
  return jwt.sign({ userId }, secretKey, { expiresIn: "1h" });
}

function verifyToken(token) {
  return jwt.verify(token, secretKey);
}

module.exports = {
  generateToken,
  verifyToken,
};
