// Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word. 

function findMinLengthOfThreeWords(word1, word2, word3) {
  var firstMin = Math.min(word1.length, word2.length); // variable that will store compare the length of the first two words
    // Math.min() function returns thesmallest value of the numbers being compared
  var secondMin = Math.min(first_min, word3.length); //variable that will compare our answer from firstMin to 
                                                     // the length of the third word  
  return secondMin;           // returns the value of our second variable  
}

findMinLengthOfThreeWords('ate','slow','beets'); // 3
