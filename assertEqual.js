// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ Assertion passed: " + actual + " === " + expected);
  } else {
    console.log("🛑 Assertion failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Hello there!", "Hello there!");
assertEqual(1,1);
assertEqual(10, 9);
assertEqual(42, 42);