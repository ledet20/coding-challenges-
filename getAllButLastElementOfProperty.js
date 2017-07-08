// Given an object and a key, "getAllButLastElementOfProperty" returns an array containing all but the last 
// element of the array located at the given key.

var obj = { // create an object variable that will store a key value pair 
  key: [2,3,7,6]
};

function getAllButLastElementOfProperty(obj, key) { 
     var newArray = []; // varaible that will store an empty array 
     var arr = obj.key; // variable that will have access to our objects array index values 
     newArray = arr.slice(0, (arr.length - 1)); // reassign our newArray varaible to get all elements in our array but the last 
                     // .slice() method will begin at the first index and get every element but the last 
     return newArray;
  
}

console.log(getAllButLastElementOfProperty(obj, 'key')); // [2,3,7]
