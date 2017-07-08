// Given an object and a key, "getEvenElementsAtProperty" returns an array containing all the even elements
// of the array located at the given key.

var object = {
  key: [100, 11, 50, 17] // create a object that will store our key value pair 
}

function getEvenElementsAtProperty(obj, key) {
  var newArray = []; // create a variable that will store an empty array 
  for(var prop in obj[key]) { // for in loop that will iterate through the values of our array 
    if(obj[key][prop] % 2 === 0) { // if statement that will determine if the index of each array is divisble by 2 
                                 // this will determine if the statement is even 
      newArray.push(obj[key][prop]); // if the statement is true it will be pushed into our empty array 
    }
  }
  return newArray;
}

getEvenElementsAtProperty(object, 'key') // [100,50]
