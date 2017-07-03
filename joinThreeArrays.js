// Given three arrays, "joinThreeArrays" returns an array with the elements
//of "arr1" in order followed by the elements in "arr2" in order followed by the elements of "arr3" in order.

function joinThreeArrays(arr1, arr2, arr3) {
  var newArray = arr1.concat(arr2,arr3); // create a variable to storeyou new array
            // use teh javascript built in method .concat to join all 3 arrays together
  return newArray; // return the new array
}

joinThreeArrays([1,2,2],[4,5,6], [7,8,9]); // [ 1, 2, 2, 4, 5, 6, 7, 8, 9 ]
