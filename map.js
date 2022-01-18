// Copied from eqArrays.js
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Copied from assertArraysEqual.js
const assertArraysEqual = function(array1, array2) {
  let assertion = `🛑 Assertion failed: [${array1}] !==  [${array2}]`;
  if (eqArrays(array1, array2)) {
    assertion = `✅ Assertion passed: [${array1}] ===  [${array2}]`;
  }
  console.log(assertion);
};

const map = function(arr, callback) {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => word.slice(1));

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, ["round", "ontrol", "o", "ajor", "om"]);

module.exports = map;