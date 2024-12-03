const { readToken } = require("../utils/auth.js");

async function middleware(req, res, next) {
  const token = req.headers.authorization;

  try {
    if (!token) {
      throw new Error("No token provided");
    }
    const user = await readToken(token);
    req.user = user;
    next();
  } catch {
    res.status(404).json({ mensagem: "Unauthorized" });
  }
}

module.exports = middleware;
