const assert = require('chai').assert;
const tail = require("../tail");

describe("#tail", () => {

  it("Returns ['Deep', 'and', 'Descend'] for ['Drink', 'Deep', 'and', 'Descend']", () => {
    let input = ["Drink", "Deep", "and", "Descend"];
    let expectedOutput = ["Deep", "and", "Descend"];
    assert.deepEqual(tail(input), expectedOutput);
  });

  it("Returns [6,7,5,3,0,9] for [8,6,7,5,3,0,9]", () => {
    let input = [8,6,7,5,3,0,9];
    let expectedOutput = [6,7,5,3,0,9];
    assert.deepEqual(tail(input), expectedOutput);
  });

  it("Returns [] for [1]", () => {
    let input = [1];
    let expectedOutput = [];
    assert.deepEqual(tail(input), expectedOutput);
  });

  it("Returns [] for []", () => {
    let input = [];
    let expectedOutput = [];
    assert.deepEqual(tail(input), expectedOutput);
  });
});