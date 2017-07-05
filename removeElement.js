// Given an array of elements, and a "discarder" parameter, "removeElement" returns an array containing
// the items in the given array that do not match the "discarder" parameter.

function removeElement(array, discarder) {
   var newArray = [];  // create a variable that will store an empty array
  for(var i = 0; i < array.length; i++) { // for loop that will iterate through the length of the array
    if(array[i] === discarder) { // if statement that will compare each array index with our discarder parameter 
      delete array[i];  // if the statement is true it will delete the variable 
    } else {          
      newArray.push(array[i]); // all index values remaining will be added to our new array using the .push method 
    }
  }
  return newArray;
}

removeElement(['the', 'cat', 'and', 'the'], 'the'); // ['cat', 'and'];
