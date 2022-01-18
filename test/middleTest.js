const assert = require('chai').assert;
const middle = require("../middle");

describe("#middle", () => {

  it("Returns [] for [1]", () => {
    input = [1];
    expectedOutput = [];
    assert.deepEqual(middle(input), expectedOutput);
  });

  it("Returns [] for [1, 2]", () => {
    input = [1, 2];
    expectedOutput = [];
    assert.deepEqual(middle(input), expectedOutput);
  });

  it("Returns [2] for [1, 2, 3]", () => {
    input = [1, 2, 3];
    expectedOutput = [2];
    assert.deepEqual(middle(input), expectedOutput);
  });

  it("Returns [2, 3] for [1, 2, 3, 4]", () => {
    input = [1, 2, 3, 4];
    expectedOutput = [2, 3];
    assert.deepEqual(middle(input), expectedOutput);
  });

  it("Returns [3, 4] for [1, 2, 3, 4, 5 ,6]", () => {
    input = [1, 2, 3, 4, 5, 6];
    expectedOutput = [3, 4];
    assert.deepEqual(middle(input), expectedOutput);
  });

  it("Returns [4] for [1, 2, 3, 4, 5, 6, 7]", () => {
    input = [1, 2, 3, 4, 5, 6, 7];
    expectedOutput = [4];
    assert.deepEqual(middle(input), expectedOutput);
  });
});