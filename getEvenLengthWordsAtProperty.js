// Given an object and a key, "getEvenLengthWordsAtProperty" returns an array containing all the even length
// word elements of the array located at the given key.

var object = { // create an object with  a key value pair 
    name: ['peter', 'harry', 'bill']
};

function getEvenLengthWordsAtProperty(obj, key) {
    var array = [];  // create a variable that will store an empty array
        for (var prop in obj[key]) { // for in loop that will iterarte through the key value array property 
            if (obj[key][prop].length % 2 === 0) { // if statement that will determine if the length of each element in the array 
                                                   // will divide by 2 evenly indicating that the value is even 
                array.push(obj[key][prop]);    // if the statement is correct the element will be pushed into our new array 
            }
        }
    return array;
}

getEvenLengthWordsAtProperty(object, 'name');  // bill
