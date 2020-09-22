# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @georgecctang/lotide`

**Require it:**

`const _ = require('@georgecctang/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `assertEqual(expected, actual)`: Prints the result of a strict comparison between two values of primitive data types.
* `head(array)`: Returns the first element of an `array`.
* `tail(array)`: Returns an array consisting of all but the first element of the `array`.
* `eqArrays(array1, array2)`: Performs a deep comparison between two arrays.
* `assertArraysEqual(array1, array2)`: Prints the result of a deep comparison between two arrays.
* `without(source, itemsToRemove)`: Returns an array consisting of all elements in the `source` array except for those included in the `itemsToRemove` array. 
* `flatten(array)`: Convert a nested `array` into an unnested array.
* `middle(array)`: Returns the middle element(s) of an `array`.
* `countOnly(allItems, itemsToCount)`: Counts the occurence of each element in the `allItems` array that is a key in the `itemsToCount` object and has a value of _true_.
* `countLetters(string)`: Counts the occurrence of each character in a `string`.
* `letterPositions(string)`: Returns the position(s) of each character in a `string`.
* `findKeyByValue(object, value)`: Returns the first key of an `object` that has a value equal to `value`.
* `eqObjects(object1, object2)`: Performs deep comparsion between two objects.
* `assertObjectsEqual(object1, object2)`: Prints the result of a deep comparison between two objects.
* `map(array, callback)`: Returns an array with the `callback` function applied to each element of an `array`.
* `takeUntil(array, callback)`: Returns a slice of an `array` with elements taken from the beginning, until `callback` function returns a truthy value.
* `findKey(object, callback)`: Returns the first key of an `object` for which the `callback` returns a truthy value.
