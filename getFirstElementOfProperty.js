//Given an object and a key, "getFirstElementOfProperty" returns the first element of the array 
//located at the given key. 

var obj1 = { // create an object that will hold a key with an array of data
    age: [22,23,12]
}

function getFirstElementOfProperty(obj, key) {
    var element;  // creat an empty variable 
    if ((typeof obj[key] != "undefined") && Array.isArray(obj[key]) && obj[key].length > 0) { // if statement that 
                                       // will determine if the array is not empty, or not an array or if there is no properties in the array
        element = obj[key][0];         // if the statement is true our element variable will store the first element in our array
    }
    return element;
}

getFirstElementOfProperty(obj1, 'age'); // 22

