document.querySelector(".clear-tasks").addEventListener("click", function (e) {
  console.log("hello");
  //   preventing the default behaviour
  //   e.preventDefault();
});

// better Approch
document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
  console.log("Clicked");
}

// Event Target Element

document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
  let val;
  val = e;
  val = e.target;
  console.log(val);

  val = e.target.className;
  console.log(val);
  //   getting class in form of list
  val = e.target.classList;
  console.log(val);

  //event type
  val = e.type;
  console.log(val);

  //timestamp
  val = e.timeStamp;
  console.log(val);

  //Coords event relative to the window
  val = e.clientX;
  val = e.clientY;
  console.log(val);

  // Coords event relative to the element
  val = e.offsetX;
  val = e.offsetY;
  console.log(val);
}
