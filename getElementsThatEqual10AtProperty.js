// Given an object and a key, "getElementsThatEqual10AtProperty" returns an array containing all the elements of
// the array located at the given key that are equal to ten.

ar obj1 = {   // create an empty object that will store you key value pairs 
  key: [12,10,100,23]
}

function getElementsThatEqual10AtProperty(obj, key) {
  var arr = [];  // create a variable that will store an empty array
  for(var prop in obj[key]){ // for in loop to loop through the values in the object 
    if (obj[key][prop] === 10) { // if statement that will determine if the value is 10 
      arr.push(obj[key][prop]); // if the statement is true the javascript method .push() will push the
                                // values into the new array 
    }
  }
  return arr;  // will return the new array statement
}

getElementsThatEqual10AtProperty(obj1, 'key') // [10]
