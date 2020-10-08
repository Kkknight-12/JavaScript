let str = "LOL";

for (let i = 1; i <= 4; i++) {
  console.log("==============");
  console.log("Outer:", i);
  console.log("==============");
  //   inner loop
  // it will run inner loop till it reach length
  //  of str the is 3
  // then it will go back to outer loop
  for (let j = 0; j < str.length; j++) {
    console.log("Inner:", str[j]);
    console.log("-------------");
  }
}

//

for (let i = 1; i <= 5; i++) {
  console.log("Outer loop", i);
  //   start at 10;
  //  run till it reach 0
  //  jump 2 step negative each time
  for (let j = 10; j > 0; j -= 2) {
    console.log(" INNER LOOP", j);
  }
}

//

const gameBoard = [
  [22, 21, 20, 25, 26],
  [19, 15, 16, 13, 18],
  [1, 7, 3, 6, 9],
  [44, 41, 42, 46, 45],
];

for (let i = 0; i < gameBoard.length; i++) {
  // setting totalScore to zero after every itteration
  let totalScore = 0;
  let rows = gameBoard[i];
  console.log(rows);

  //
  for (let j = 0; j < rows.length; j++) {
    console.log(rows[j]);
    totalScore += rows[j];
  }
  console.log("Total Score" + " " + totalScore);
}

//
const students = [
  {
    firstName: "Zeus",
    level: 98,
    element: "Lightning",
  },
  {
    firstName: "Athena",
    level: 90,
    element: "melee",
  },
  {
    firstName: "Aries",
    level: 95,
    element: "Fire",
  },
  {
    firstName: "Kratos",
    level: 99,
    element: "Dual Swords",
  },
];

let student;
for (let i = 0; i < students.length; i++) {
  // accessing 4 elements inside array
  student = students[i];
  console.log(student);
  for (let j = 0; j < 1; j++) {
    console.log(
      student.firstName + " " + student.level + " " + student.element
    );
  }
}
