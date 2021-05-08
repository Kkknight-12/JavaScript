// // Getting and Setting values using Immutable module

// // Immutable objects are called ‘maps’
// const Immutable = require('immutable'); // import immutable module

// // this is how we declare an immutable Object
// const map1 = Immutable.Map({ a: 1, b: 2, c: 3 });


// // Here is an important part. We can’t update map1, so instead we have to make the change on map2. 
// const map2 = map1.set('b', 50);

// // Because of this, the old state of map1 is still available
// map1.get('b'); // 2

// // And map2 shows our update.
// map2.get('b'); // 50
// console.log(map2.get('b'))

// // equality check
// map1.equals(map2); // false
// console.log(map1.equals(map2))

// // Use with ordinary objects
// const state1 = Immutable.Map({ a: 1, b: 2, c: 3, d: 4 });
// const state2 = Immutable.Map({ c: 10, a: 20, t: 30 });
// const obj = { d: 100, o: 200, g: 300 };
// const map3 = state1.merge(state2, obj);
// console.log(map3.toJS()) // toJS() is a helper method to convert immutable object into javascript dictionary

// // If you open the returned object, you can see that it isn't an ordinary object
// // you'll find all the properties under "entries"

// // Use with ordinary arrays
// // An immutable array is declared as a `List` like this:
// const numbers = Immutable.List([1, 2, 3]);

// //But Immutable can also work with plain JS arrays
// const otherNumbers = [4, 5, 6]

var arithmetic = require('arithmetic');
arithmetic.add(2, 4);