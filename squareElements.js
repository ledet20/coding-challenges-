// Given a array of numbers, "squareElements" should return a new array where each element is the square
// of the element of the given array.

function squareElements(arr) {
   var newArray = []; // create a variable to store an empty array 
  for(var i = 0; i < arr.length; i++) { // for loop that will iterate through the length of the array  
     newArray.push(Math.pow(arr[i], 2)); // using the Math.pow() method we can sqaure each  element in te array index and push it into 
                                         // our empty array we created 
  }
  return newArray;                
}

squareElements([1,2,3]); // [1,4,9]
