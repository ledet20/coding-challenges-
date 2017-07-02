// Given an array and an integer, "getNthElement" returns the element at the given integer, within the given array.

function getNthElement(array, n) {
  if(array.length > 0) {  // create an if statement to determine if there are values in the array
   return array[n]; } //return a value of the array at a given index 
 else {
  return undefined;
  }
}

  

getNthElement([1,4,7], 2);  // 7
