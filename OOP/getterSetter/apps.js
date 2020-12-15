// // get set allow us to write custom -> read property
// // logic

// The get syntax binds an object property to a
// function that will be called when that property is looked up.

const obj = {
  log: ['a', 'b', 'c'],

  get latest() {
    if (this.log.length === 0) {
      return undefined;
    }
    return this.log[this.log.length - 1];
  }
};
console.log(obj.latest);
// function get() will return the last element

// creating new arry of log
obj.log = ['c', 'd', 'e']
console.log(obj.latest);
// expected output: "c"
// obj.log->['a','b','c']
// obj.log.length - 1 -> 2
console.log(obj.log[obj.log.length -1])

// set -> write property
// The set syntax binds an object property to a
// function to be called WHEN THERE IS AN
// AN ATTMEPT TO SET THAT PROPERTY
// parameter can be defined in set
// but only one parameter can be set
const language = {
  set current(name) { 
      // setting the log property
    this.log.push(name);
  },
  // every time log is used the get property
  // will be accessed
  log: ['FN']
};

language.current = 'EN';
language.current = 'FA';

console.log(language.log);
// expected output: Array ["EN", "FA"]

//
class ShoppingCart {

    items = [1,2,3,4,5];
    updatedItems = [ ]

    set cartItems( value ) {
        this.items = value;
        console.log(this.items)
        console.log(this.totalAmount.toFixed(2))
        
  }

    get totalAmount() {
    const sum = this.items.reduce( (prevValue, curItem) => {
        return prevValue + curItem
    }, 0);
    return sum;
  }

    addProduct( product ){
    // const updatedItems = [...this.items];
    this.updatedItems = [...this.items];
    this.updatedItems.push(product);
    console.log(this.updatedItems)

    this.cartItems = this.updatedItems; //
  }

}
const newShop = new ShoppingCart();

// accessing the get
// check the list
console.log(newShop.items)
// check total amount in list
console.log(newShop.totalAmount)

// add item in list
newShop.addProduct(5)
// again check what is the amount now
newShop.totalAmount

// 
const la = {
    li : ['a', 'b'],

    set current(name) {
        // setting the log property
        this.li = name,
        console.log(this.li.reverse())
      
    },

    // every time log is used the get property
    // will be accessed
    jodo(naya) {
      this.newli = [...this.li],
      this.newli.push(naya),
      console.log(this.newli)
      this.current = this.newli
  }
};

la.jodo('bachan')
la.newli

const ge = {
  items : [10,10],
  // newitems : [], 

  get totalAmount() {
        const sum = this.newitems.reduce( (prevValue, curItem) => {
            return prevValue + curItem
        }, 0);
        return sum;
      },

  jodo(naya) {
    this.newitems = [...this.items],
    this.newitems.push(naya),
    console.log(this.newitems)
    // this.items = this.newitems
  }
}

ge.jodo(5)
console.log(ge.totalAmount)

// ge.a = [1,2,3,4]
// console.log(ge.a)


class Person {
    constructor(name) {
        // underscore name is a private property
        // which can't be accessed from outside
        // ONLY WAY TO ACCESS _name IS TO USE get name()
        // which will return this private property
        this._name = name;
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(value) {
        // assign the value only if the length of
        // value is greater then 2
        if( value.length > 2 ) {
            this._name = value;
        } else {
        console.log('Rejected!')
        }
    }

    ji(){

    }
}

//
let person = new Person('KNight'); // _name is KNight
// _name will be shown
console.log(person);
//
console.log(person.name);

// overwrite the name
person.name = 'Bablu';
console.log(person.name) // get name()
// original name
console.log(person._name) //


// reject if value is less then 2
person.name = 'B'
console.log(person.name)

// /////////////
// example 2  /
// ////////////
const data = {
    location: ''
}
data.location = 'phill'
console.log(data.location)

// 
const data1 = {
    // empty array where all the location will be stored
    locations: [],

    // getter will run setter to get the value of _location
    get location() {
        return this._location;
    },

    // value passed in location ( trip, Hawai ) will be sent here
    // trip will be passed here
    set location(value) {
        // remove spaces in trip with trim function
        // save that in _location
        this._location = value.trim()
        this.locations.push(this._location.toUpperCase())
    }
}
// setter/setter are used like any another property
data1.location = ' trip ' // setter -> assigning value
console.log(data1.location) // accessing getter - > reads it
//
data1.location = ' Hawai'
console.log(data1)

console.log(data1.locations);
// data1.location('data')