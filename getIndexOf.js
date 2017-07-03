//Given a character and a string, "getIndexOf" returns the first position of the given character
// in the given string.

function getIndexOf(char, str) {
  for(var i = 0; i < str.length; i++) { // for loop to iterate through the length of the string 
    var letter = str[i];  // create a letter variable to store the string at each index value
    if(char === letter) { // if statementto check if the char we pass in our argument is equal to a letter 
                          // stored in our string
      return i;           // if the statement is true theindex value of where the letter was stored will be returned 
    }
  }
  return -1;               // if the string is empty -1 will bereturned 
}

getIndexOf('a','Im a hacker'); //  3
