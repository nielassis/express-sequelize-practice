const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

function generateToken(userName) {
  const payload = {
    user: userName,
  };

  const token = jwt.sign(payload, secret, { expiresIn: "1h" });
  return token;
}

function readToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) reject(err);
      else if (decoded) resolve(decoded);
    });
  });
}

module.exports = { generateToken, readToken };
