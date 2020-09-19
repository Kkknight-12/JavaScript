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
