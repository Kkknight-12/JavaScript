// takes 3 argument
// 1st decalre variable
// 2nd give condition till when you want to run the loop
// 3rd give condition how you want to increment

// start at 1| stop at 10 | add 1 each time
for (let i = 1; i <= 10; i++) {
  console.log(i + " " + "times");
}

console.log(2 * 2);

// moving in negative direction
// start at 50, run till 0, move 10 step back at a time
for (let i = 50; i >= 0; i -= 10) {
  console.log(i + " " + "times");
}

//
const examScores = [98, 99, 100, 20, 53];
for (let i = 0; i < examScores.length; i++) {
  console.log(examScores[i]);
}

//
const students = [
  {
    firstName: "Zeus",
    grade: 98,
  },
  {
    firstName: "Athena",
    grade: 90,
  },
  {
    firstName: "Aries",
    grade: 95,
  },
  {
    firstName: "Kratos",
    grade: 99,
  },
];

let student;
let total = 0;
for (let i = 0; i < students.length; i++) {
  // accessing 4 elements inside array
  student = students[i];
  console.log(`${student.firstName} scored ${student.grade}`);
  total += student.grade;
}
console.log("total score" + " " + total);
console.log("Average score" + " " + total / students.length);

//
const word = "stressed";
let reverseWord = "";
for (let i = word.length - 1; i >= 0; i--) {
  reverseWord += word[i];
}
console.log(reverseWord);
console.log(word.length);
