// Given a number, "isEven" returns whether it is even.


function isEven(num) {
  if(num % 2 === 0) { // if the number is divisible by 2 without a remainder the value is even 
    return true;
  } else {
    return false;
  }
}
isEven(24); //true
