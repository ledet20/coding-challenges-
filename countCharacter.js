// Given a string input and a character, "countCharacter" returns the number of occurences of
// a given character in the given string.

// METHOD 1

function countCharacter(str, char) {
  var arr = str.split("");  // create a variable that will create every element in the array
                           // into individual string characters using the .split() element
  var charCount = 0;      // create a count variable that will start at 0 
   for(var i = 0; i < arr.length;i++) { // iterate through the  length of the array 
    if( char === arr[i]) { // create an if statement that will compare the char 
                           // argument with each index in the array 
      charCount++;         // if the statement is true add one to the count variable 
    }
   }
   return charCount;  // return the value of the total count variable 
}

countCharacter("all a wanted", 'a'); // 3
