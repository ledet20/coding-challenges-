//Given an array and an element, "addToFrontOfNew" returns a new array containing 
// all the elements of the given array, with the given element added to the front.

function addToFrontOfNew(arr,element) {
  var newArray = arr; // create a variable that will store our array 
  newArray.unshift(element);  // javascript built in method .unshift() to our new array to add our element parameter 
                              // in front of our array
  return newArray;
}

addToFrontOfNew([1,2,3,4], 2); //[2,1,2,3,4]
