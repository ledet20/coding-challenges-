// Given a number, "computeSummationToN" returns the sum of sequential numbers leading up to the given number, beginning at 0.

function computeSummationToN(n) {
  var sum = 0;  create a count variable that will begin at 10
  for(var i = 1; i <= n; i++) { //for loop that will iterate through each number bettween 1 and the number we pass through 
    sum += i; // reassign our count variale to add our sum value with each element in our index 
  }
  return sum;
}

computeSummationToN(4) // 10
