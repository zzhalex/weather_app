var express = require("express");
var router = express.Router();
const { generateJWT } = require("../token/token");

/* Auth */
router.post("/login", async function (req, res, next) {
  try {
    let { username, pwd } = req.body;
    if (username === "admin" && pwd === "123456") {
      let data = await generateJWT({ username: username });
      res.send(data);
    } else {
      res.status(401).send("Incorrect username or password.");
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
