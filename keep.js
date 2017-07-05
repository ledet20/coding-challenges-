// Given an array and a keeper element, "keep" returns an array containing the items
// that match the given keeper element.

function keep(array, keeper) {
  var newArray = []; // create a variable that will store an empty array
  for(var i= 0; i < array.length; i++) { // for loop to iterate through the array 
    if(array[i] === keeper) { // if statment that will determine if an index in the array is equal to the keeper parameter
      newArray.push(array[i]); // if the statement is true the index value will be added to our new array 
    }
  }
  return newArray;
}

keep([1,2,2,3,4,5,5], 2); // [2,2]
