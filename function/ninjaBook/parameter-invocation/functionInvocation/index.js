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
    if (!fn.id) {
      fn.id = this.nextId++
      this.cache[fn.id] = fn
      return true
    }
  },
}
function ninja() {}
console.log(store.add(ninja)) // true
console.log(store.add(ninja)) // false
console.log(store)
/* 
{
  nextId: 2,
  cache: { '1': [Function: ninja] { id: 1 } },
  add: [Function: add]
} */
