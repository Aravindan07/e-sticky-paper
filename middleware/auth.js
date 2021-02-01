const config = require("config");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("x-auth-token");

  // Check for token
  if (!token) {
    return res.status(401).json({ message: "Please SignIn to Continue" }); // 401 - unauthorized
  }

  try {
    // Verify token
    const jwtSecretKey = process.env.JwtSecret || config.get("JwtSecretKey");
    const decoded = jwt.verify(token, jwtSecretKey);
    //Add user from payload
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: "Token is not valid" });
  }
}

module.exports = auth;
