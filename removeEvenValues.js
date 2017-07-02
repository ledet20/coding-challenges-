// Given any object, "removeEvenValues" removes any properties whose values are even numbers.

var obj1 = { // create an object with key value pairs 
  a: 2,
  b: 3,
  c: 4
}

function removeEvenValues(obj) {
  for(var prop in obj) { // for in loop to iterate through the obj property values 
    if(obj[prop] % 2 === 0) { // if statement that will check if the value of each object is 
                              // divisible by two with a remainder of 0 will determine if the value is even or not
      delete obj[prop]; // if the statement is true the property value will be deleted 
    }
  }
  return obj  // return the object 
} 

removeEvenValues(obj1); // {b: 3}
