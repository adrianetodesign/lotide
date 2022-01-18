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

// Copied from eqObjects.js
const eqObjects = function(object1, object2) {
  // Checks to make sure there are the same number of keys in each object.
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  // Iterate on every key in object1.
  for (let key in object1) {
    if (!object2[key]) {
      // Check if the key in object1 exists in object2. If not, return false.
      return false;
    } 
    if (Array.isArray(object1[key])) {
      // Check if the key is an array.
      if (!Array.isArray(object2[key])) {
        // If the same key in object2 is NOT an array, returns false.
        return false;
      }
      if (!eqArrays(object1[key], object2[key])) {
        // If eqArrays returns false, return false.
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      // If the value at object1[key] is NOT equal to object2[key], return false.
      return false;
    }
  }
  return true;
};

const assertObjectEqual = function(actual, expected) {
  // inspect is just here to help us see the object printed to the console in a string.
  const inspect = require('util').inspect;
  let assertion = `🛑 Assertion failed: ${inspect(actual)} !==  ${inspect(expected)}`
  if (eqObjects(actual, expected)) {
    assertion = `✅ Assertion passed: ${inspect(actual)} ===  ${inspect(expected)}`;
  }
  console.log(assertion);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

// Assertion should pass.
assertObjectEqual(ab, {a: "1", b: "2"});
assertObjectEqual(ab, ba);
// Assertion should fail.
assertObjectEqual(ab, {a: "1", c: "2"});
assertObjectEqual(ab, abc);