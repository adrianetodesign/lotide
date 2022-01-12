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
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion passed: ${array1} ===  ${array2}`);
  } else {
    console.log(`🛑 Assertion failed: ${array1} !==  ${array2}`);
  }
};

const without = function(source, itemsToRemove) {
  let outputArr = source.slice();
  for (let i = 0; i < itemsToRemove.length; i++) {
    let outIndex = outputArr.indexOf(itemsToRemove[i]);
    if (outIndex > -1) {
      outputArr.splice(outIndex, 1);
    }
  }
  return outputArr;
};

// Example array given on assignment page.
const words = ["hello", "world", "lighthouse"];
// Check to ensure one element is removed from the array, and returned as a different array.
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const nums = [8, 6, 7, 5, 3, 0, 9];
// Check to ensure multiple elements are removed from the array, and returned as a different array.
assertArraysEqual(without(nums,[3, 5, 9]), [8, 6, 7, 0]);
assertArraysEqual(nums, [8, 6, 7, 5, 3, 0, 9]);