// Given an object and a key, "getLastElementOfProperty" returns the last element of an array
// located at the given key.

var person = {  // create a object that will store a key with array values 
 name: ['john', 'smiith', 'doe']
}

function getLastElementOfProperty(obj, key) {
    var element = obj[key][obj[key].length - 1]; // variable that will store the index of the last element in the array 
    return element; 
}

getLastElementOfProperty(person, 'name'); // 'doe'
