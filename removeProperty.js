// Given an object and a key, "removeProperty" removes the given key from the given object.

var object = {   // create object with key value pairs 
  name: 'Sam',
  age: 20,
  height: 'small'
};

function removeProperty(obj, key) { 
  for(var prop in obj) { // for in loop to itereate through the object 
    // if statement will determine if a property in our object is equal to the key value we pass in our argument
   if(prop === key) {    
      delete obj[prop];  // if the if statment is true the key value will be deleted 
    }
  }
  return obj;  // will return the object  remaining if change has occured 
}

removeProperty(object, 'age'); // {name: 'Sam", height: 'small'}
