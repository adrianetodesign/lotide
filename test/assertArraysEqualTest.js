const assertArraysEqual = require("../assertArraysEqual");

// Assertion should pass.
assertArraysEqual([1, 2, 3],[1, 2, 3]);
// Assertion should fail.
assertArraysEqual([8, 6, 7],[5, 3, 0, 9]);