//  Given an array of numbers, "filterEvenElements" returns an array containing only the even numbers of the given array.

function filterEvenElements(arr) {
   var newArray = []; // create a variable that will store an empty array 
  for(var i = 0; i < arr.length; i++) { // for loop that will iterate through the length of the array 
    if(arr[i] % 2 === 0) { // if statement that will determine if each index in the array is evenly divisible by 2, this will determine if the number is even 
      newArray.push(arr[i]); // if the statement is true it will push the index value into our empty array 
    }
  }
  return newArray;
}

filterEvenElements([1,2,3,4,5,6]); // [2,4,6]
