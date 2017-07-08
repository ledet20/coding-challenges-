// Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.

function getLengthOfLongestElement(arr) {
  var maxItem = 0 // create a variable that will set our starter value to 0 
  var maxLength = 0  // create a variable that will set our starter length to 0 
  for (var i = 0; i < arr.length; i++) { // for loop that will iterate through the length of the array 
    if (arr[i].length > maxLength) { // if statement that will run at each index array and determine if the length of the array is greater then our set max length
                                  // if the statement is true it will change our maxItem and maxLength to the value of that specific index 
      maxItem = arr[i]               // maxItem and maxLength will only change once our statement is true 
      maxLength = arr[i].length  
    }
  }
  return maxLength            
}

getLengthOfLongestElement(['one', 'two', 'three']); // 5
