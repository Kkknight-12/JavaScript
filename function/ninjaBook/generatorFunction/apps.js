function* WeaponGenerator(){
  yield "Katana";
  yield "Wakizashi";
  yield "Kusarigama";
}

for(let weapon of WeaponGenerator()) {
  if(weapon !== undefined){
    console.log(weapon);
  } 
}


// example 2
function* WeaponGenerator2(){
  yield "Katana";
  yield "Wakizashi";
}

const weaponsIterator = WeaponGenerator2();

// next function
const result1 = weaponsIterator.next();
console.log(result1) // {value: "Katana", done: false}

if(typeof result1 === "object"
    && result1.value === "Katana"
    && !result1.done){
        console.log("Katana received!")
}

const result2 = weaponsIterator.next();
if(typeof result2 === "object"
    && result2.value === "Wakizashi"
    && !result2.done){
        console.log( "Wakizashi received!")
}

const result3 = weaponsIterator.next();
if(typeof result3 === "object"
    && result3.value === undefined
    && result3.done){
        console.log("There are no more results!")
}

console.log(result3) //{value: undefined, done: true}

function* weaponGenerator3(){
	yield "Katana";
	yield "Wakizashi";
}

const weaponIterator3 = weaponGenerator3();
let item;
while( !( item = weaponIterator3.next() ).done ){ // while this condition dont turn false continue looping
	if( item !== null ){
		console.log( item.value )
  }
};

// console.log(( item = weaponIterator3.next() )) // {value: "Katana", done: false}
// console.log(( item = weaponIterator3.next() ).done) // false
// console.log( !( item = weaponIterator3.next() ).done) // true

// same result with for of loop
for(var item2 of weaponGenerator3()){
  if(item2 !== null) {
    console.log(item2)
  }
}

// ////////////////////////////////
// Yielding to another generator //
// ////////////////////////////////
function* WarriorGenerator(){
  yield "Sun Tzu";
  yield* NinjaGenerator(); // calling NinjaGenerator()
  yield "Genghis Khan";
}

function* NinjaGenerator(){
  yield "Hattori";
  yield "Yoshi";
}

for(let warrior of WarriorGenerator()){
  if(warrior !== null) { console.log(warrior) };
}

/* 
  Sun Tzu
  Hattori
  Yoshi
  Genghis Khan
*/

// ///////////////////////////////////
// Using generators to generate IDs //
// ///////////////////////////////////
function *IdGenerator(){
  let id = 0;
  while(true){
    yield ++id;
  }
}

const idIterator = IdGenerator();

const ninja1 = { id: idIterator.next().value };
const ninja2 = { id: idIterator.next().value };
const ninja3 = { id: idIterator.next().value };

if(ninja1.id === 1) { console.log("First ninja has id 1")} // First ninja has id 1
if(ninja2.id === 2) {console.log("Second ninja has id 2")} // Second ninja has id 2
if(ninja3.id === 3) {console.log("Third ninja has id 3")}; // Third ninja has id 3


// ////////////////////////////////////////
// Using generators to traverse the DOM  //
// ////////////////////////////////////////

function traverseDOM(element, callback) {
  callback(element);
  element = element.firstElementChild;
  // console.log("element: ",element)

  while (element) {
    traverseDOM(element, callback);
      element = element.nextElementSibling;
  }
}
const subTree = document.getElementById("subTree");
traverseDOM(subTree, function (element) {
  if(element !== null){console.log(element.nodeName)};
});

function* DomTraversal(element){
  yield element;
  element = element.firstElementChild;

  while (element) {
    yield* DomTraversal(element);
    element = element.nextElementSibling;
  }
}

const subTreeYield = document.getElementById("subTree");
for(let element of DomTraversal(subTreeYield)) {
  if(element !== null){console.log(element.nodeName)};
}

// ///////////////////////////////
// Communicating with generator //
// ///////////////////////////////
function* CommunicatingNinjaGenerator(action) {
  const imposter = yield ("Hattori " + action);
  
  if(imposter === "Hanzo"){
    console.log("The generator has been infiltrated"); // The generator has been infiltrated (2)
  }
  
  yield ("Yoshi (" + imposter + ") " + action);
}
 
const ninjaIterator = CommunicatingNinjaGenerator("skulk");

const result1Com = ninjaIterator.next();
console.log(result1Com) // {value: "Hattori skulk", done: false}
if(result1Com.value === "Hattori skulk") {console.log("Hattori is skulking")};
// Hattori is skulking (1)

const result2Com = ninjaIterator.next("Hanzo");
if(result2Com.value === "Yoshi (Hanzo) skulk"){console.log("We have an imposter!")}; 
// We have an imposter! (3)

