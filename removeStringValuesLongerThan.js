// Given an number and an object, "removeStringValuesLongerThan" removes any properties
// on the given object whose values are strings longer than the given number

var person = {  // create a object with key value pairs 
  name: 'montana',
  age: 20,
  location: 'texas'
}

function removeStringValuesLongerThan(num, obj) {
  for(var prop in obj) { // for in loop to iterate through the key value pairs 
    if(obj[prop].length > num) { // if statement that will check if the length of the value
                                 // is greater than the number provided 
      delete obj[prop];          // if the statement is true the key value pair will be deleted 
    }
  }
  return obj;  // return the remaining object property 
} 

removeStringValuesLongerThan(6, person) // {age: 20, location: 'texas'}
