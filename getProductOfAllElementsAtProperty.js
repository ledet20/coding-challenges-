// Given an object and a key, "getProductOfAllElementsAtProperty" returns the product of all the elements in the array
// located at the given key. 

var object = { // create an object that will store a key value pair 
  key: [10,2,2]
};

function getProductOfAllElementsAtProperty(obj, key) {
  var product = 1; // set a count variable to equal 1 
  if(obj[key].length === 0 || !Array.isArray(obj.key)) { // if our object does not have an array value or has no items in the array 
     return 0;                                            // have it return 0 
  } else {
    for(var prop in obj[key]) { // for in loop that will iterate through our array index values 
      product = product * obj[key][prop]; // reassign our product variable to be mulitplied by each index value in our array 
                                         // these values will also be multiplied by each other 
    }
  }
  return product
}

getProductOfAllElementsAtProperty(object, 'key'); // 40
