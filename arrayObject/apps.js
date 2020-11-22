//              person.name|  person.age| person.city
var person = [ {name:"John",   age:30,   city:"New York"}, // 0
               {name:"Jaggu",  age:30,   city:"New Delhi"} ]; //1

for( x in person ) { //  x -> 0, 1
    console.log(person[x].name);  // person[0].name -> John | person[1].name -> Jaggu
};

for( x in person ) {
    console.log((person[x]).city) // (person[0]).city
    // person[0] {name:"John",   age:30,   city:"New York"}
    // (person[0]).city -> city:"New York"
}
