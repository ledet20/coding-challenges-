// Given an object, "removeNumberValues" removes any properties whose valuse are numbers.

var obj = { // variable that will store our object 
  a: 2, 
  b: 'remianing',
  c: 4
}

function removeNumberValues(obj) {
  for(var prop in obj){ // for in loop that will iterate through the key value pairs 
    if (Number.isInteger(obj[prop]) === true) { // if statement that will determine if the value
                                                // of the object is a number 
                                                // Number.isInteger() will determine if the value passed is an integer
      delete obj[prop];   // if the statement is true it will delete the key value pair 
    }
  }
  return obj;
}

removeNumberValues(obj) // {b: 'remaining'}
