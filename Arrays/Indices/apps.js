// first index in zero
let colors = ["red", "orange", "green", "yellow"];
let i;
for (i = 0; i < colors.length; i++) {
  console.log(i + " " + colors[0]);
}

// arrays are mutable
// changing item on position 1

colors[1] = "Oooraange";
console.log(colors);

// adding item to end of list, position 4
colors[4] = "position4";
console.log(colors);
// when you dont know the position of last item
colors[colors.length] = "lastposition";
console.log(colors);
