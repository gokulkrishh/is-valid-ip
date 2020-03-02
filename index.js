"use strict";

module.exports = function(str) {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string");
  }

  if (!str) return false;

  var list = str.split(".");

  return (
    list.length === 4 &&
    list.every(
      item => String(Number(item)) === item && item >= 0 && item <= 255
    )
  );
};
