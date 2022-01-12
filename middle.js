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
    console.log(`✅ Assertion passed: [${array1}] ===  [${array2}]`);
  } else {
    console.log(`🛑 Assertion failed: [${array1}] !==  [${array2}]`);
  }
};

const middle = function(arrX) {
  if (arrX.length <= 2) {
    return [];
  }
  if ((arrX.length %2) !== 0) {
    return [arrX[(arrX.length - 1) / 2]];
  } else {
    let firstIndex = ((arrX.length / 2) - 1);
    return arrX.slice(firstIndex, firstIndex + 2);
  }
}
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArraysEqual(middle([1, 2 ,3 ,4 ,5 ,6]), [3, 4]);