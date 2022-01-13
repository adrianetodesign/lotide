// Copied from assertEqual.js
const assertEqual = function(actual, expected) {
  let assertion = `🛑 Assertion failed: ${actual} !==  ${expected}`;
  if (actual === expected) {
    assertion = `✅ Assertion passed: ${actual} ===  ${expected}`;
  }
  console.log(assertion);
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
assertEqual(eqArrays([1, 2], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // => should PASS