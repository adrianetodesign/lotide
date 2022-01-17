const assertEqual = require("../assertEqual");
const tail = require("../tail");

const test1 = ["Drink", "Deep", "and", "Descend"];
const result1 = tail(test1);
assertEqual(test1.length, 4);
assertEqual(result1[0], "Deep");
assertEqual(result1[1], "and");
assertEqual(result1[2], "Descend");
console.log("---");

const test2 = [8,6,7,5,3,0,9];
const result2 = tail(test2);
assertEqual(test2.length, 7);
assertEqual(result2[0], 6);
assertEqual(result2[1], 7);
assertEqual(result2[2], 5);
assertEqual(result2[3], 3);
assertEqual(result2[4], 0);
assertEqual(result2[5], 9);
console.log("---");

const test3 = [1];
const result3 = tail(test3);
assertEqual(test3.length, 1);
assertEqual(result3.length, 0);
console.log("---");

const test4 = [];
const result4 = tail(test4);
assertEqual(test4.length, 0);
assertEqual(result4.length, 0);