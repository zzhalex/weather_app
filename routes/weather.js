var express = require("express");
var router = express.Router();
const { checkInput, getWeather } = require("../weather/weather");
const { decodeJWT } = require("../token/token");
/* GET weather information. */
router.get("/weather", decodeJWT, async function (req, res, next) {
  try {
    console.log("route layer");
    if (!checkInput(req.query.city)) res.status(401).send("Incorrect search.");
    let data = await getWeather(req.query.city);
    console.log(data);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
