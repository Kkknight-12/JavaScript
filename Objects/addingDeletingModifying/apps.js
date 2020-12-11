let person = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function() {
    alert('Hi there!');
  }
};

// add property with dot
// if adding property without value
// it will show value is undefined
// person.isAdmin = true;

// never set a property to be undefined , 
// it is a default value of Js assigned to uninitialised variable/properties 
// property set to be undefined will be shown with undefined value which means
// there is no user property which is
// equal to delete 
person.user = undefined; 
// null must be used instead it will set the property who's value is yet to be denifed
person.User = null;

// you can update/change the property
person.age = 31;

// you can delete property with delete keyword
delete person.age;

// accessing a property that don't exist will give value of undefined
console.log(person.age);


console.log(person);