// Given two numbers, "average" returns their average.
// here i provide two ways in which problem could be solved 


// function 1 (more code)

function average(num1, num2) {
  var multiply = num1 + num2; // create a variable that will add the values of the two numbers
  return multiply / 2;   // create return statement that will multiply the added numbers by two 
}

average(2,3); //2.5

// function 2 (less code)

function average(num1, num2) {
  return (num1 + num2) / 2; // create a return statement that will add the variables together and divide them by 2
}

average(5,5); // 5
