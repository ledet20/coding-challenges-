// Given an array and an index, "getElementsAfter" returns a new array 
// with all the elements after (but not including) the given index.

// METHOD 1

function getElementsAfter(array, n) {
  var arr = array.slice(n + 1); // create a variable to store your array 
                                // javascript built in method .slice() will return an array 
                                // starting at the index of n & adding 1 to it will get every 
                                // element after the index 
  return arr;
}

getElementsAfter(['a','b','c','d'], 1) // ['c', 'd']

// METHOD 2

function getElementsAfter(array, n) {
  var newArr = [];                              // create an empty array variable 
  for (var i  = n + 1; i < array.length; i++) { // iterate through the length of the array, set the starting
                                                // iteration var at the value of n + 1 to get ever element after the index
  newArr.push(array[i]);                     // push the elements into the empty array using the method .push() 
  }
  return newArr;  // return the new array with the added elements 
}

getElementsAfter(['b','a','c','k','s'], 2) // ['k','s']
