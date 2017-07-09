// Given an object, a key, and a numerical index, "getElementOfArrayProperty" returns the value of the element at the given
// index of the array located within the given object at the given key.

var obj = {  // create an object variable that will store our key value pair 
  key: ['jamil', 'was','running']
};

function getElementOfArrayProperty(obj, key, index) {
  if(obj.key === [] || !Array.isArray(obj.key)) { // if statement that will determine if our array value is empty or our key value pair is not sotre das an array 
    return undefined; // if the statement is true it will return undefined 
  }
  for(var prop in obj) { // for in loop that will iterate through our array
    return obj[prop][index]; // return statement that will return an array value at a given index 
  }
}

getElementOfArrayProperty(obj,'key',1); // ''was'
