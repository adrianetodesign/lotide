const assertEqual = require("../assertEqual");
const head = require("../head");

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([8,6,7,5,3,0,9]), 8);
assertEqual(head(["Adrian"]), "Adrian");
assertEqual(head([]), undefined);