// const person = { info:{''}}
let person = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function() {
    alert('Hi there!');
  }
};

// using self invoking anonymous function
// to check existance of property
( function () {
    if( 'name' in person ){
    console.log('name is a property')
    }
})();

(function () {
    if( !('age' in person) ){
    console.log('Not a property')
    }
    else{
        console.log('age is a property')
    }
})();

(function () {
    if( person.hello === undefined ){
        console.log('hello is not a property')
    }
})();



