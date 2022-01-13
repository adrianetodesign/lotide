// Function Implementation
const assertEqual = function(actual, expected) {
  let assertion = `🛑 Assertion failed: ${actual} !==  ${expected}`;
  if (actual === expected) {
    assertion = `✅ Assertion passed: ${actual} ===  ${expected}`;
  }
  console.log(assertion);
};

// TEST CODE
// Assertion should fail.
assertEqual("Lighthouse Labs", "Bootcamp");
// Assertion should pass.
assertEqual("Hello there!", "Hello there!");
// Assertion should pass.
assertEqual(1,1);
// Assertion should fail.
assertEqual(10, 9);
// Assertion should pass
assertEqual(42, 42);