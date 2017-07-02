// Given an object, "removeStringValues" removes any properties
// on the given object whose values are strings.


var obj1 = { // variable to store object 
  name: 'sam', 
  age: 20
}

function removeStringValues(obj) {
    for(var prop in obj){ // for in loop that will iterate through the key value pairs 
    if (typeof obj[prop] === 'string') { // if statement that will determine if the value of a key fhl
                                         //  is a string or not 
                                         // typeof operater will determine if the value is a string 
      delete obj[prop];                  // if the statement is true it will delete the key value pair 
    }
  }
  return obj;
}

removeStringValues(obj1); // {age: 20}
