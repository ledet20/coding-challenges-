// Given an object, "removeOddValues" removes any properties whose valuse are odd numbers.

var age = { // create a variable that stores an object 
  a: 2, 
  b: 3,
  c: 4,
  d: 5
}

function removeOddValues(obj) {
  for(var prop in obj) { // for in loop to iterate through the key value pairs 
    if(obj[prop] % 2 !== 0) { // if statement that would determine if the value is odd by checking 
                              // if the vale will not have a remiander of 0 when divided by 2 
      delete obj[prop];      // if the statement is true it will delete the key value pair 
    }
  }
  return obj;
}

removeOddValues(age); // {a: 2, c: 4}
 
