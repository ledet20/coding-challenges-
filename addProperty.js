// Given an object, and a key, "addProperty" sets a new property on the given object with a value of true.

var myObj = {}; // create a variable that will store an empty object 
 
function addProperty(obj, key) {
  obj[key] = true; // set your key value property to true 
  return obj; // return object with newly add key value pair  
}

addProperty(myObj, 'key'); // {key: true}
console.log(myObj.key); // true
