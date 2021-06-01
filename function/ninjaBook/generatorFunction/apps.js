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

for(var item2 of weaponGenerator3()){
  if(item2 !== null) {
    console.log(item2)
  }
}