// Given an object and a key, "getSquaredElementsAtProperty" returns an array containing all the squared elements
// of the array located at the given key. 

var square = {  // create an object that will store a key value pair of an array
  number: [4,7]
};

function getSquaredElementsAtProperty(obj, key) {
  var newArray = []; // create a variable that will store an empty array
  for(var prop in obj) { // for in loop to iterate through the key value pair 
    for(var i = 0; i < obj[prop].length;i++) { // for loop that will iterate through each index value in te array
      newArray.push(Math.pow(obj[prop][i], 2)); // each index will be squared by the powerof 2 with the Math.pow method
         // this value will be pushed into our empty array 
    }
  }
  return newArray;
}

getSquaredElementsAtProperty(square, 'number'); // [16,49]
