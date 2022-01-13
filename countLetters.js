// Copied from assertEqual.js
const assertEqual = function(actual, expected) {
  let assertion = `🛑 Assertion failed: ${actual} !==  ${expected}`;
  if (actual === expected) {
    assertion = `✅ Assertion passed: ${actual} ===  ${expected}`;
  }
  console.log(assertion);
};

const countLetters = function(strInput) {
  let results = {};
  for (let keyChar of strInput) {
    if (keyChar === ' ') {
      continue;
    }
    if (!results[keyChar]) {
      results[keyChar] = 0;
    }
    results[keyChar] += 1;
  }
  return results;
};
let results1 = countLetters("drink deep and descend");

assertEqual(results1.d, 5);
assertEqual(results1.e, 4);
assertEqual(results1.i, 1);
assertEqual(results1[' '], undefined);