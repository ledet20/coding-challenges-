//  an array and an element, "addToBack" returns the given array with
// the given element added to the end.

function addToBack(arr, element) {
  arr.push(element); // javascript built in method .push() will add a new element 
                     // to the end of a given array
  return arr;
}

addToBack([3,5,2,3], 7); // [3,5,2,3,7]
