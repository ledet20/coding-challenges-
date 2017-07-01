// Given a number, in this case an age, "isOldEnoughToDrink"
// returns whether a person of this given age is old enough to legally drink in the United States.

function isOldEnoughToDrink(age) {
  if(age < 21) {  //create an if statement that will determine if the age is less than the legal drinking age
    return false // return boolean if the person is old enough to drink
  } else {
    return true 
  }
}

isOldEnoughToDrink(24); // true
