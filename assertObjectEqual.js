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
    } else if (Array.isArray(object1[key])) {
      // Check if the key is an array.
      if (!Array.isArray(object2[key])) {
        // If the same key in object2 is NOT an array, returns false.
        return false;
      } else if (!eqArrays(object1[key], object2[key])) {
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

const assertObjectEqyal = function() {

};