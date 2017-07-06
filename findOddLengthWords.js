// Given an array of string, "filterOddLengthWords" returns an array containing only 
// the elements of the given array whose lengths are odd numbers.

function filterOddLengthWords(words) {
  var newArray = [];  // create a array that will store an empty array 
  for(var i = 0; i < words.length;i++) { // for loop that will iterate through the length of each word 
    if(words[i].length % 2 !== 0) { // if statment that will determine if the length of the word is not divisible by 2 
                                    // indicating that the word length is odd 
      newArray.push(words[i]);    // if the statement is true it will push the element into the new array 
    } 
  }
  return newArray;
}

filterOddLengthWords(['the','word', 'is', 'odd']); // ['the', 'odd']
