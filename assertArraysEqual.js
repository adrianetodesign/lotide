const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2) {
  let assertion = `🛑 Assertion failed: [${array1}] !==  [${array2}]`;
  if (eqArrays(array1, array2)) {
    assertion = `✅ Assertion passed: [${array1}] ===  [${array2}]`;
  }
  console.log(assertion);
};

module.exports = assertArraysEqual;