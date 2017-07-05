// Given an array of numbers, "computeAverageOfNumbers" returns their average.

// METHOD 1
function computeAverageOfNumbers(nums) {
  var input = nums.reduce(function(a,b) {  // variable that will store our built in function 
     // .reduce function will add the each element in  our array and return one value 
    return a + b; // will return that addition of all elements 
  });
  return input / nums.length; // will return our value divided by the number of elements in our array 
}

computeAverageOfNumbers([2,4,4,2]); // 3
