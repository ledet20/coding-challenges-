// Given a natural number (a whole number greater than 0), "computeFactorialOfN" returns its factorial.

function computeFactorialOfN(n) {
  var product = 1; // create a count varible that will start at 1 
  for(var i = n; i > 0; i--) { // for loop that begin at our n parameter and get every value greater than 0 
    product *= i; // count variable will be multiplyied by each value less than our parameter 
  }
  return product; // will return the value of all our index values multiplied by each other 
}

computeFactorialOfN(3) // 6
