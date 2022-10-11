const functions = require("./functions.js");

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("checkValue Should be falsy when argument is undefined", () => {
  expect(functions.checkValue()).toBeFalsy();
});
