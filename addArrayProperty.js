// Given an object, a key, and an array, "addArrayProperty" sets a new property on the object at
// the given key, with its value set to the given array.

var myObj = {};  // create an empty object to store new key value pair 
var myArray =  [1,4]; // create a variable that will store the array values 

function addArrayProperty(obj, key, arr) {
  obj[key] = arr;
  return obj;
}

addArrayProperty(myObj, 'myProperty', myArray); // {myProperty: [1,4]}
console.log(myObj.myProperty); //  [1, 4]
