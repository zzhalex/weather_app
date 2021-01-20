const { checkInput, convertTemp } = require("../weather/weather");
var assert = require("assert");

describe("Weather Function", function () {
  describe("#checkInput()", function () {
    it("should return true when the value is not empty and alpha", function () {
      assert.equal(checkInput("aaa"), true);
    });
  });
  describe("#convertTemp()", function () {
    it("should convert temp from F to C and make ceiling value ", function () {
      assert.equal(convertTemp(273.15), 0);
      assert.equal(convertTemp(278), 5);
      assert.equal(convertTemp(273), 0);
      assert.equal(convertTemp(272), -1);
    });
  });
});
