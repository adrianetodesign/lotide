// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !==  ${expected}`);
  }
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