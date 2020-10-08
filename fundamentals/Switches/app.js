let color;
color = "red";

switch (color) {
  case "red":
    console.log(`Color is Red`);
    break;
  case "blue":
    console.log(`Color is Blue`);
    break;
  default:
    console.log(`Color is neither Red nor Blue`);
    break;
}

color = "blue";

switch (color) {
  case "red":
    console.log(`Color is Red`);
    break;
  case "blue":
    console.log(`Color is Blue`);
    break;
  default:
    console.log(`Color is neither Red nor Blue`);
    break;
}

color = "yellow";

switch (color) {
  case "red":
    console.log(`Color is Red`);
    break;
  case "blue":
    console.log(`Color is Blue`);
    break;
  default:
    console.log(`Color is neither Red nor Blue`);
    break;
}

//
let dayy = 1;

switch (dayy) {
  case 1:
    console.log("MONDAY");
    break;

  case 2:
    console.log("TUESDAY");
    break;

  case 3:
    console.log("WEDNESDAY");
    break;

  case 4:
    console.log("THURSDAY");
    break;

  case 5:
    console.log("FRIDAY");
    break;

  case 6:
    console.log("SATURDAY");
    break;

  case 7:
    console.log("SATURDAY");
    break;
  // instead of else we write here default
  default:
    console.log("INVALID DAY");
}

// checking what day is today
let d = new Date().getDay();
console.log(`Today is ${d}`);

let day;

switch (new Date().getDay()) {
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  case 7:
    day = "Sunday";
    break;
}
console.log(`Today is ${day}`);

// combining cases when they have same output
let emoji = "happy face";

switch (emoji) {
  case "happy face":
  case "sad face":
    console.log("pink");
    break;

  case "eggplant":
    console.log("purple");
    break;

  case "heart":
  case "lips":
    console.log("red");
    break;
}
