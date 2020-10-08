const colors = [
  ["red", "crimson"],
  ["orange", "dark orange"],
  ["yellow", "golden rod"],
  ["green", "olive"],
  ["blue", "navy blue"],
];

// indexing to access elements of array
console.log(colors[1]);

// accessing elements inside nested arrays
// 3rd array i.e ["yellow", "golden rod"]
// first element i.e ["yellow"]
console.log(colors[2][0]);

// you can also change the elements inside array in same manner
colors[2][0] = "YELLOW";
console.log(colors[2]);

//
