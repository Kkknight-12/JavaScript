var text = "Domo arigato!"
console.log("Before defining functions")

function useless(ninjaCallback) {
  console.log("In useless function")
  return ninjaCallback()
}

function getText() {
  console.log("In getText function")
  return text
}

console.log("Before making all the calls")

console.log(useless(getText))

console.log("After the calls have been made")

/*  
Before defining functions
Before making all the calls
In useless function
In getText function
Domo arigato!
After the calls have been made
*/

// storing
var store = {
  nextId: 1,
  cache: {},
  add: function (fn) {
    // if the function dont have id property
    if (!fn.id) {
      // then give it a if property
      fn.id = this.nextId++
      // now store that function as key value pair inside cache
      this.cache[fn.id] = fn
      return true
    }
  },
}

// creating a function
function ninja() {}

// passing it to store object add property
console.log(store.add(ninja)) // true

// passsing it again to check
console.log(store.add(ninja)) // undefined

console.log(store)
/* 
{
  nextId: 2,
  cache: { '1': [Function: ninja] { id: 1 } },
  add: [Function: add]
} */

function isPrime(value) {
  // create a property answer on function isPrime
  // if the function is running for first time
  if (!isPrime.answers) {
    isPrime.answers = {}
  }

  // return the value of prime if saved previously
  if (isPrime.answers[value] !== undefined) {
    return isPrime.answers[value]
  }

  // prime is true if number is not 1
  var prime = value !== 1 // 1 is not a prime

  // check if number if prime
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      // if not them prime will be false
      prime = false
      break
    }
  }
  /* the value of prime will be true or false depending on its prime of not
  - when the value is not prime and we try to access it */
  return (isPrime.answers[value] = prime)
}

console.log(isPrime(5)) // true
console.log(isPrime(6)) // false
console.log(isPrime(7)) // true
console.log(isPrime.answers)
/*
- the downside of above function is 
- even when the value is not prime we will save it in the
- answers object property of isPrime function
{ '5': true, '6': false, '7': true }  
*/
