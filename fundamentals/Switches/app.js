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
