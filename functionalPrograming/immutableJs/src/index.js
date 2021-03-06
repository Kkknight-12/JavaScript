// https://github.com/immutable-js/immutable-js
// Getting and Setting values using Immutable module
const Immutable = require('immutable'); // import immutable module

// Immutable objects are called ‘maps’
// ////////////////////////////////////////////
// this is how we declare an immutable Object//
// ////////////////////////////////////////////
// Immutable.Map( {  } )
const map1 = Immutable.Map( { a: 1, b: 2, c: 3 } );
// console.log(map1)

// Here is an important part. We can’t update map1, 
// so instead we have to make the change on map2. 
const map2 = map1.set('b', 50);

// Because of this, the old state of map1 is still available
map1.get('b'); // 2

// And map2 shows our update.
// map2.get('b'); 
console.log(map2.get('b')) // 50

// equality check
// map1.equals(map2); // false
console.log(map1.equals(map2)); // false

// Use with ordinary objects
const state1 = Immutable.Map({ a: 1, b: 2, c: 3, d: 4 });
const state2 = Immutable.Map({ c: 10, a: 20, t: 30 });

const obj = { d: 100, o: 200, g: 300 };

// .merge() to merge two object
const map3 = state1.merge(state2, obj); 
// { a: 20, b: 2, c: 10, d: 100, g: 300, o: 200, t: 30 }

// toJS() is a helper method to convert immutable object into javascript dictionary
console.log(map3.toJS()) 

// If you open the returned object, you can see that it isn't an ordinary object
// you'll find all the properties under "entries"

// ///////////////////////////
// Use with ordinary arrays //
// ///////////////////////////

// An immutable array is declared as a `List` like this:
// Immutable.List( [ ] );
const numbers = Immutable.List([1, 2, 3]);
console.log( numbers.toJS() ) // [1, 2, 3]
/* 
 Almost all of the methods on Array will be found in similar form on Immutable.List, those of Map found on Immutable.Map, and those of Set found on Immutable.Set, including collection operations like forEach() and map().
*/ 

const number2 = numbers.push(3, 4, 5);
console.log(number2.toJS()) // [1, 2, 3, 3, 4, 5]

const number3 = number2.unshift(0); // adding zero at begining
console.log(number3.toJS()) // [0, 1, 2, 3, 3, 4, 5]

// adding number2 ,number3 to numbers
const number4 = numbers.concat(number2, number3);
console.log(number4.toJS()) // [1, 2, 3, 1, 2, 3, 3, 4, 5, 0, 1, 2, 3, 3, 4, 5]

// adding 4 at zero index
console.log(numbers.get((0), 1)); // [4, 5, 6]

// ///////////////////////////////////////////////////
// But Immutable can also work with plain JS arrays //
// ///////////////////////////////////////////////////
const otherNumbers = [4, 5, 6]
console.log(otherNumbers);

const alpha = Immutable.Map({ a: 1, b: 2, c: 3, d: 4 });
const a = alpha.map( (v, k) => k.toUpperCase() )
console.log(a.toJS()) // {a: "A", b: "B", c: "C", d: "D"}
console.log(a.join()) // 'A,B,C,D'

// ///////////
// Exercise // 
// ///////////

// PART 1. Getting and Setting values
// Given the following object, make an update that turns name to 'Mal' and role to 'Captain'
const map11 = Immutable.Map({ 
  name: 'Wash',
  ship: {
      name: 'Serenity',
      class: 'Firefly'
  },
  role: 'Pilot',
  favoriteThing: {
      item: "Toy",
      details: {
          type: 'Toy Tyrannosaurus Rex'
      }
  }
});

const map22 = Immutable.Map({
  name: 'Mal',
  role: 'Captain',
  favoriteThing: {
      item: "Not complicated"
      },
  history: ["Browncoat sergeant"]
});

// YOUR TURN --------------------------------------------------------------
// create `map3` immutable object by merging `map1` and `map2`

console.log(map11.toJS())
console.log(map22.toJS())

const map33 = map11.merge(map22)
console.log(map33.toJS())
/* 
favoriteThing:
    item: "Not complicated"
history: ["Browncoat sergeant"]
name: "Mal"
role: "Captain"
ship:
    class: "Firefly"
    name: "Serenity" 
*/

// -----------------------------------------------------------------
// -----------------------------------------------------------------

// PART 2. More with objects
// This is a normal javascript object. It is very different from an Immutable Map
const obj1 = { d: 100, o: 200, g: 300 };

// But thankfully, normal javascript objects are still valid in Immutable
// Notice that here we can merge a normal object into an Immutable Map
const map4 = map1.merge(map22, obj1);

// But also notice how different the two are when we console log map3 
console.log(map4.toJS())
/* 
a: 1
b: 2
c: 3
d: 100
favoriteThing:
    item: "Not complicated"
g: 300
history: ["Browncoat sergeant"]
name: "Mal"
o: 200
role: "Captain" 
*/

// YOUR TURN --------------------------------------------------------------
// Can you locate the contents of our variable 'obj' inside the Immutable Map map3?

//Your code
console.log(map4.get("history")) // ["Browncoat sergeant"]

// -----------------------------------------------------------------
// -----------------------------------------------------------------

// PART 3. Arrays and Immutable Lists

// An immutable array is called a LIST, and is declared like this:
const numbers11 = Immutable.List([1, 2, 3]);

// We can turn normal JS arrays into Immutable Lists like this:
const plainArray = [ 1, 2, 3, 4 ]
const listFromPlainArray = Immutable.List(plainArray)
console.log(listFromPlainArray.toJS())

// we can declare a new Immutable List
const myList = Immutable.List([ 'stuffed t-rex' ]);
console.log(Array.from(myList));

// and we can use the set method again to add or update values. Just provide the index first and value second
const myList1 = myList.set(1, 'toy lightsaber');
console.log(Array.from(myList1)); // [ "stuffed t-rex", "toy lightsaber" ]

// but, in order to not need to supply the index, we can also add new values with push
const myList2 = myList1.push( 'Picard bobblehead' )
console.log(Array.from(myList2));

// YOUR TURN --------------------------------------------------------------------------

// 1. Turn the following array into an Immutable array
// 2. Add a character

// Your code
const newAr = [ 'Luff', 'coding', 'job' ]
const ImNewAr = Immutable.List(newAr)
console.log(Array.from(ImNewAr))

const ImNewAr2 = ImNewAr.push('Kuro Hime')
console.log(Array.from(ImNewAr2))

// -----------------------------------------------------------------
// -----------------------------------------------------------------


// STRETCH CHALLENGE ----------------------------------------------------------------------
// 3. Remove Jabba the Hut from the Immutable List
// look up in the documentation how you would remove a character from the Immutable list

const characters = [
  {
    name: 'Marvin the Paranoid Android',
    role: 'First Mate',
    universe: 'Hitchhikers Guide to the Galaxy',
    weapon: 'severe depression',
    powerLevel: 1000
  },
  {
    name: 'Jabba the Hut',
    role: 'villain',
    universe: 'Star Wars',
    weapon: 'henchmen',
    powerLevel:  200
  },
  {
    name: 'Zoë Alleyne Washburne',
    role: 'First Mate',
    universe: 'Firefly',
    weapon: 'Winchester Model 1892 rifle',
    powerLevel: 160
  },
  {
    name: 'Peter Venkman',
    role: 'Ghostbuster',
    universe: 'Ghostbusters',
    weapon: 'proton pack',
    powerLevel: 120
  },
  {
    name: 'Kathryn Janeway',
    role: 'Captain',
    universe: 'Star Trek',
    weapon: 'Wit',
    power_level: 140
  }
]

// solution
const immutableCharacters = Immutable.List(characters).push({
    name: 'Yoda',
    role: 'Jedi Master',
    universe: 'Star Wars',
    weapon: 'The Force',
    powerLevel: 900
})
console.log(Array.from(immutableCharacters))

// STRETCH SOLUTION
const withoutJabba = immutableCharacters.delete(1)
console.log(Array.from(withoutJabba))

// or, all in one line, you could do:
const allatonce = Immutable.List(characters).push({
    name: 'Yoda',
    role: 'Jedi Master',
    universe: 'Star Wars',
    weapon: 'The Force',
    powerLevel: 900
}).delete(1)
console.log(Array.from(allatonce))


// Lets think about how we could refactor our application state flow to use Immutable. 
// The original code is provided below, how might you re-write both the store object and updateStore function with Immutable?
// if you need help, the docs should be the first place you look.

let store = {
    user: {
        first_name: 'John',
        last_name: 'Doe'
    }
}

const updateStore = (store, newState) => {
    store = Object.assign(store, newState)
    render(root, store)
}

let ImmputableStore = Immutable.Map({
    user: Immutable.Map({
        first_name: 'Beni',
        last_name: 'hime'
    })
})
// console.log(ImmputableStore.toJS())

let newState = {
    work: 'Software Developer'
}

function updateStoreIm(state, newState) {
    store = state.merge(newState)
    return store
    /* 
    user:
        first_name: "Beni"
        last_name: "hime"
    */
};

console.log(updateStoreIm(ImmputableStore, newState ).toJS());
/* 
user:
    first_name: "Beni"
    last_name: "hime"
work: "Software Developer" 
*/
console.log(ImmputableStore.get('user').toJS()) 
// {first_name: "Beni", last_name: "hime"}

// getIn
console.log(ImmputableStore.getIn([ 'user', 'first_name' ]))
// Beni

// ////////
// Note  //
// ////////

/* 
One important thing to note is that nested objects have to be declared as Immutable maps just like top level ones. Otherwise, they will be stored as normal JS objects, which Immutable handles differently. You can see the difference below.
*/

// Nest 1
const currentShow1 = Immutable.Map({
    title: 'Dr. Who',
    seasons: 11,
    currentSeason: 4,
    characters: {
        main: 'The Doctor',
        supporting: ['Dalek1']
    }
})
console.log( currentShow1.getIn( [ "characters", "supporting"] )) // The Doctor
// ["Dalek1"]

// Nest 2
const currentShow2 = Immutable.Map({
    title: 'Dr. Who',
    seasons: 11,
    currentSeason: 4,
    //          Immutable.Map
    characters: Immutable.Map({
        main: 'The Doctor',
        //          Immutable.List
        supporting: Immutable.List(['Dalek1'])
    })
})
console.log( currentShow2.getIn( [ "characters", "supporting"] )) // The Doctor
// List {size: 1, _origin: 0, _capacity: 1, _level: 5, _root: null, …}


/* 
Nest 1 is not the same as Nest 2. The main difference is that the nested object characters is declared with Immutable.Map in Nest 2. characters in Nest 1 will not be immutable while characters in Nest 2 will be.

Summary
Immutable makes it possible for us to write even better Functional code - or just better code in general - without being a big task to learn, which makes it a big win to me. If you want to look further into the how’s and the why's of Persistent Data Structures and ImmutableJS, a great place to start is their well-written documentation. https://immutable-js.github.io/immutable-js/
*/