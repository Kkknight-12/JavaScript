// for loop
// take 3 parameter seperated by ;
// first is decleration can be let/var
// second is condition
// increment

for (let i = 0; i < 10; i++) {
  //i =0  and less then 10 and after each iteration it will increase
  console.log("Number " + i);
}

// adding if statement
// at it will print here i come, but it will also print number 7
for (let i = 0; i < 10; i++) {
  if (i == 7) {
    console.log(" here i come !!!");
  }
  console.log("Number " + i);
}

// writing continue will skip this
for (let i = 0; i < 10; i++) {
  if (i == 7) {
    console.log(" here i come !!!");
    continue; // it will push the code to for loop, stoping it from moving to next condition
  }
  console.log("Number " + i);
}

// break will break the loop when condition is satisfied
for (let i = 0; i < 10; i++) {
  if (i == 7) {
    console.log(" here i come !!!");
    break; // it will push the code to for loop, stoping it from moving to next condition
  }
  console.log("Number " + i);
}

//while loop
// define variable outside the loop
// define condition in bracket after function
// inceremnt is defined inside the while loop
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// DO while

let j = 100;
do {
  console.log("Number " + j); // this condition is going to run no matter what, even if the while condition is not met
  j++;
} while (
  // then in while we will define condition
  j < 10
);

// loop throught array

const cars = ["Ford", "Chevy", "Honda"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// for each loop
//  can take upto 3 argument
// cars.forEach(function (car) {
//   console.log(car);
// });
// cars.forEach(function (car, index) {
//   console.log(`${index}: ${car}`);
// });

cars.forEach(function (car, index, array) {
  console.log(`${index}: ${car}`);
  console.log(array);
});

// map

const users = [
  { id: 1, name: "jhon" },
  { id: 2, name: "shin" },
  { id: 3, name: "heroshi" },
];
//crearing array of id
const ids = users.map(function (user) {
  return user.id;
});

console.log(ids);

//  for in loop
const usr = {
  firstName: "jhon",
  lastName: "const",
  age: 30,
};
// it will return key
// for (let x in usr) {
//   console.log(x);
// }
// key and value
for (let x in usr) {
  console.log(`${x}:${usr[x]}`);
}
