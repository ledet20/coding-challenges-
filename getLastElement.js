// Given an array, "getLastElement" returns the last element of the given array.
// will be shown in two ways 

// METHOD 1

function getLastElement(array) {
   if(array.length === 0) { // create an if statement to determine if the array is empty 
     return undefined;
   } else {
      return array.pop(); // use the javascript built in method .pop() to remove the last element of an array
   }
}

getLastElement([2,3,4,5]); // 5

 // METHOD 2 
 
 function getLastElement(array) {
  if (array.length > 0) {  //create an if statement to determine if the  array is empty  
    return array[array.length - 1]; // return the value of the  array with the index of one less than the
                                   // array length to get the last element 
  }
  return undefined;
}

getLastElement([1,2,3,4]); // 4
 
 
