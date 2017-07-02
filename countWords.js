// Given a string, "countWords" returns an object where each key is a word in the given string, 
// with its value being how many times that word appeared in th given  string. 

function countWords(str) {
    var dict = {}; // create an empty object variable
    if (str !== "") {  // if statment that will run if the string is not empty 
        var arr = str.split(" "); // create a arr variable that will split the array by each word 
        for (var i = 0; i < arr.length; i++) { // iterate through the length of the array 
            if (typeof dict[arr[i]] != "undefined") { // create an if statement that will 
                                                      // determine if the new object key value is defined 
                dict[arr[i]] += 1;                 // add 1 to the value of the word every time 
                                                   // it occurs in the loop 
            } else {
                dict[arr[i]] = 1;                
            }
        }
    }
    return dict;    // return the entire object 
  }
  
  countWords('ask a bunch get a bunch') // {ask: 1, a: 2, bunch: 2}
