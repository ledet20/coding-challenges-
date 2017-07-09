// Given an array of numbers, "filterOddElements" returns an array containing only the odd numbers of the given array.

function filterOddElements(arr) {
    var newArray = []; // create a variable that will store an empty array
   for(var i = 0; i < arr.length; i++) {  // for loop that will iterate through the length of the array 
     if(arr[i] % 2 !==0) { // if statement that will determine if each index of the array is not divisible by two 
                           // this will determine if our index value is odd 
       newArray.push(arr[i]); // if the statement is true it wil push the index array into our empty array variable 
     }
   }
   return newArray;
}

filterOddElements([1,2,3,4,5]); // [1,3,5]
