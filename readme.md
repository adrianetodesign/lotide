# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by Adrian To as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @adrianetodesign/lotide`

**Require it:**

`const _ = require('@adrianetodesign/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the head of a given array.
* `tail(array)`: Returns the tail of a given array.
* `middle(array)`: Returns the middle value(s) of given arrays with length longer than 2. Otherwise returns an empty string.
* `eqArrays(array1, array2)`: Returns `true` if both given arrays are strictly equal.
* `eqObjects(object1, object2)`: Returns `true` both given objects are strictly equal.
* `assertEqual(variable1, variable2)`: Logs an assertion message if both primitive variables are strictly equal.
* `assertArraysEqual(array1, array2)`: Logs an assertion message if both arrays are deeply equal.
* `assertObjectsEqual(object1, object2)`: Logs an assertion message if both objects are deeply equal.
* `countLetters(string)`: Returns an object that has a count of how many times each letter appears within a string. Does not count spaces. Each letter is represented as a key of the object, with the count as it's value.
* `countOnly(array, object)`: Counts only items that appear in the given array based on a given object. If any values of keys in the object are false, those items will not be counted. Object must follow format of `{itemName: true, itemName2: false}`.
* `findKey(object, callback)`: Returns the first key in a given object that fulfills the conditions of the callback function.
* `letterPositions(string)`: Returns an object with the index for each letter. Each letter is represented as a key of the object, with the indices stored in an array as it's value.
* `map(array, callback)`: Returns an array with the given callback function applied to each item of the array.
* `takeUntil(array, callback)`: Returns an array with the given array sliced until the given callback function returns a truthy value.
* `without(array1, array2)`: Returns the first given array with all values in the second given array removed.