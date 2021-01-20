const jwt = require("jsonwebtoken");
const secret = process.env.secret;

const generateJWT = (user) => {
  const tokenData = { username: user.username };
  return jwt.sign({ user: tokenData }, secret, { expiresIn: "1800s" });
};

function decodeJWT(req, res, next) {
  let token = req.headers.authorization;
  console.log(token);
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, secret, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

module.exports = { generateJWT, decodeJWT };
