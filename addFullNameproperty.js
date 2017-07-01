// Given an object that has a "firstName" property and a "lastName" property, 
// "addFullNameProperty" returns a "fullName" property whose value is a string with the first name
// and last name separated by a space.

var person = {          // create an object with firstname and lastname properties 
  firstName: 'Micheal',
  lastName: 'Smith'
}

function addFullNameProperty(obj) {
  obj.fullName = obj.firstName + ' ' + obj.lastName; // create new property of fullname that will be the 
                                                     // objects first and lastname combined 
  return obj; // return object with added property 
  
}

addFullNameProperty(person); // { firstName: 'Micheal',
                             //   lastName: 'Smith',
                              //  fullName: 'Micheal Smith' }
