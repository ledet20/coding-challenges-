// Given a string and a number, "repeatString" returns the given string repeated the given number of times.

function repeatString(string, num) {
  var result = ''; // varibale that will store an empty string value 
  for(var i = 0; i < num; i++) { // for loop that will iterate through our num parameter 
    result += string // for each iteration our string value will be added to our empty string variable 
  }
  return result;
}

repeatString('code', 3); // 'codecodecode'
