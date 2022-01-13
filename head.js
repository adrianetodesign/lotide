// assertEqual function copied from assertEqual.js
const assertEqual = function(actual, expected) {
  let assertion = `🛑 Assertion failed: ${actual} !==  ${expected}`;
  if (actual === expected) {
    assertion = `✅ Assertion passed: ${actual} ===  ${expected}`;
  }
  console.log(assertion);
};

const head = function(array) {
  if (array === []) {
    return undefined;
  } else {
    return array[0];
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([8,6,7,5,3,0,9]), 8);
assertEqual(head(["Adrian"]), "Adrian");
assertEqual(head([]), undefined);