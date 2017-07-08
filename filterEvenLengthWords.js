// Given an array of strings, "filterEvenLengthWords" returns an array containing only the 
// elements of the given array whose length is an even number.

function filterEvenLengthWords(words) {
  var newArray = []; // create a variable that will store an empty array
  for(var i = 0; i < words.length; i++) { // for loop that will iterate through the length of each word in our array 
    if(words[i].length % 2 === 0) { // if statement that will determine if the length of each index value is divisible by 2 
                                     // this will determine if our value is even 
      newArray.push(words[i])  // if our statement is true it will push the index value into our empty array 
    }
  }
  return newArray;
}

filterEvenLengthWords(['word','words','word','words']); // ['word','word']
