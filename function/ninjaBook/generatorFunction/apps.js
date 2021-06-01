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


