const person = {
  firstName: "Max",
  lastName: "Smith",
  age: 29,
  email: "smith@mail.com",
  hobies: ["Taekwondo", "Coading"],
  address: {
    city: "Miami",
    state: "Flodrida",
  },
  getBirthYear: function () {
    return 2020 - this.age;
  },
};

let val;

// it will create a object
val = person;
console.log(val);

//get specific value
val = person.firstName;
console.log(val);

val = person["firstName"];
console.log(val);

val = person.age;
console.log(val);

val = person.hobies[1];
console.log(val);

val = person.address.state;
console.log(val);

val = person.getBirthYear();
console.log(val);

// Array of objects

const people = [
  { name: "Jhon", age: 30 },
  { name: "Mike", age: 22 },
  { name: "Nike", age: 22 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
