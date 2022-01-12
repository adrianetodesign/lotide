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
  for (keyChar of strInput) {
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

console.log(countLetters("Adrian"));