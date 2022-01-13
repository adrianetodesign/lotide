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

const assertArraysEqual = function(array1, array2) {
  let assertion = `🛑 Assertion failed: [${array1}] !==  [${array2}]`;
  if (eqArrays(array1, array2)) {
    assertion = `✅ Assertion passed: [${array1}] ===  [${array2}]`;
  }
  console.log(assertion);
};

// Assertion should pass.
assertArraysEqual([1, 2, 3],[1, 2, 3]);
// Assertion should fail.
assertArraysEqual([8, 6, 7],[5, 3, 0, 9]);