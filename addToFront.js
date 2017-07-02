// Given an array and an element, "addToFront" adds the given element to the front
// of the given array, and returns the given array.

function addToFront(arr, element) {
  arr.unshift(element); // javascript built in method .unshift() will add 
                       // a value passed into it at the front of an array
  return arr;         // returns new array with added index value to the front 
}

addToFront([2,4,8], 3) // [3,2,4,8]
