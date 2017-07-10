// Given an object and a key, "getSumOfAllElementsAtProperty" returns the sum of all the elements in the array located at the given key. 

var object = {
  key: [2,2,8] // create a variable that will sotre an object with a key value pair 
};

function getSumOfAllElementsAtProperty(obj, key) {
  var sum = 0; // create a count variable that will start at 0
    for(var prop in obj[key]) { // for in loop that will iterate through our array index values 
     sum += obj[key][prop] // set our count variable to be added with each array index value 
                           // each value will then be added to our our other array index values 
    }
  return sum;
}

getSumOfAllElementsAtProperty(object, 'key'); // 12
