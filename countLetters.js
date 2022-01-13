// Copied from assertEqual.js
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !==  ${expected}`);
  }
};

const countLetters = function(strInput) {
  let results = {};
  for (let keyChar of strInput) {
    if (keyChar === ' ') {
      continue;
    } else if (results[keyChar]) {
      results[keyChar] += 1;
    } else {
      results[keyChar] = 1;
    }
  }
  return results;
};
let results1 = countLetters("drink deep and descend");

assertEqual(results1.d, 5);
assertEqual(results1.e, 4);
assertEqual(results1.i, 1);
assertEqual(results1[' '], undefined);