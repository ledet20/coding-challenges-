// Given a number and an object, "removeNumbersLargerThan" removes any properties 
// whose values are numbers greater than the given number

var obj1 = { // create a object with key value pairs 
  a: 8,
  b: 2,
  c: 'hill'
}

function removeNumbersLargerThan(num, obj) {
  for(var prop in obj) { // for in loop to iterate through the key value pairs 
    if(obj[prop] > num) { // if statement that will determine if the values in our object are greater
                          // than the num in our argument that we pass 
      delete obj[prop] // deletes the key value pair if the if statement is true 
    }
  }
   return obj; // returns the new  object 
}

removeNumbersLargerThan(7,obj1); // {b: 2, c: 'hill'}
