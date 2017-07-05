// Given an object and a key, "getOddLengthWordsAtProperty" returns an array containing all 
// the odd length word elements of the array located at the given key. 
 
var obj1 = { // create an object variable that will store an array
  words: ['it', 'was', 'the', 'advents', 'where']
};

function getOddLengthWordsAtProperty(obj, key) {
    var newArray = []; // create a variable that will store an empty array
  for(var prop in obj) { // for in loop that will iterate through the key value paris 
    for(var i = 0; i < obj[prop].length;i++) { // for loop that will iterate through the objects array
      if(obj[prop][i].length % 2 !== 0 ) { // if statement that will determine if the length of each array index word
                                           // is not divisible by two this will determine if the length of the word is  odd 
        newArray.push(obj[prop][i]); // if the statement is true the array index property will be pushed into the new array
      }
    }
  }
  return newArray;
}

getOddLengthWordsAtProperty(obj1,'words');  // ['was', 'the', 'advents', 'where']

