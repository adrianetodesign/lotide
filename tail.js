// assertEqual function copied from assertEqual.js
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !==  ${expected}`);
  }
};

const tail = function(array) {
  if (array.length <= 1) {
    return [];
  } else {
    let finalArr = array.slice(1);
    return finalArr;
  }
};

// Test Case: Check the original array 
const words = ["Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);