// Given an object, "removeArrayValues" removes any properties whose values are arrays.

var obj = { //create a variable that will store you object 
  a: [1,2,6],
  b: 'hello',
  c: 12,
  d: ['see', 'blue']
};

function removeArrayValues(obj) {
  for(var prop in obj){ // for in loop that will iterate through the key value pairs 
    if (Array.isArray(obj[prop]) === true) { // if statement that will determine if the key 
                                             // value pair is an array 
      delete obj[prop]; // if the statment is truethe property willbe deleted 
    }
  }
  return obj;
}
 
removeArrayValues(obj); // {b: 'hello', c: 12}
