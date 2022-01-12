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

//Copied from assertArraysEqual.js
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion passed: [${array1}] ===  [${array2}]`);
  } else {
    console.log(`🛑 Assertion failed: [${array1}] !==  [${array2}]`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      continue;
    } else if (results[sentence[i]]){
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};