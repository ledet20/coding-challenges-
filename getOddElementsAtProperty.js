// Given an object and a key, "getOddElementsAtProperty" returns an array containing all 
// the odd elements of the array located at the given key. 


var obj = { // create an object that will store key value pairs 
  key: [1,2,3,4,5]
}

function getOddElementsAtProperty(obj, key) {
    var newArray = []; // create a variable that will store an empty array 

        for (var prop in obj[key]) { // for in loop that will iteraate through our arrray values 
            if (obj[key][prop] % 2 !== 0) { // if statement that will determine if the index of the array is not divisible by 2 
                                             // this will determine if the value is odd 
                newArray.push(obj[key][prop]); // if the statement is correct it will push the index value into our new array 
            }
        }
    return newArray;
}

console.log(getOddElementsAtProperty(obj, 'key')); // [1,3,5]
