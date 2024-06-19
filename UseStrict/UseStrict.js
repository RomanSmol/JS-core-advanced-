"use strict";

function containsValue(array, value) {
    return array.includes(value);
}

console.log(containsValue([1, 2, 3, 4, 5], 3)); 
console.log(containsValue([1, 2, 3, 4, 5], 6)); 
console.log(containsValue(['a', 'b', 'c'], 'b')); 