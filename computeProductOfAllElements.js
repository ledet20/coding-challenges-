// Given an array of numbers, "computeProductOfAllElements" returns the products of all the elements in the given array.

function computeProductOfAllElements(arr) {
  if(arr.length > 0) { // if statement that will determine if the length of the array is greater than 0 
    return arr.reduce(function(a,b) { // return statement that will apply the reduce() method to our array and have our parameters 
      return a * b;                   // multipy each element in our array and return one value 
    });
  } else {                        // if the array is empty it will return the value of 0
    return 0;
  }
  
}

computeProductOfAllElements([2,3,4]); // 24
