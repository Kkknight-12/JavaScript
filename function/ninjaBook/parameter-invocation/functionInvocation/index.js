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
