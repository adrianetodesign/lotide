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

const takeUntil = function(array, callback) {
  results = [];
  for (i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return results;
    }
    results.push(array[i]);
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

const data3 = ["Drink", "Deep", "and", "Descend"];
const results3 = takeUntil(data3, x => x === "and");
assertArraysEqual(results3, ["Drink", "Deep"]);

 module.exports = takeUntil;