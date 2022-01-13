// Copied from assertEqual.js
const assertEqual = function(actual, expected) {
  let assertion = `🛑 Assertion failed: ${actual} !==  ${expected}`;
  if (actual === expected) {
    assertion = `✅ Assertion passed: ${actual} ===  ${expected}`;
  }
  console.log(assertion);
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false