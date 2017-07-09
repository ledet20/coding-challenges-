// Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array.

function computeSumOfAllElements(arr) {
  if(arr.length > 0) { // if statement to determine if there are any index array values in our array 
    return arr.reduce(function(a,b) { // apply the javascript function of .reduce() to add all the elements in the array 
      return a +  b; // will return the sum of all values 
    });
  } else {
    return 0; //if there are no index values in the array te value 0 will be returned 
  }
}

computeSumOfAllElements([1,2,3]); // 6
