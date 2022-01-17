const assertEqual = require('../assertEqual');

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