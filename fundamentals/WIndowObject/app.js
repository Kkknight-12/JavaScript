//Window Method/ Objects/ Properties

// window.console.log(123);
// window.alert("hello")
//dont need to write window

//promt method
//similer to alert, but prompt takes input
// const input = prompt();
// alert(input);

// Confirm
// if (confirm("Are You Sure")) {
//   console.log("Gotchyaa");
// } else {
//   console.log("No");
// }

// getting height and width of window
let val;
//outer height and width
val = window.outerHeight;
console.log(val);

val = window.outerWidth;
console.log(val);

//inner height and width
val = window.innerHeight;
console.log(val);

val = window.innerWidth;
console.log(val);

//scroll points
val = window.scrollY;
console.log(val);

//location object
val = window.location;
console.log(val);

val = window.location.hostname;
console.log(val);

val = window.location.port;
console.log(val);

val = window.location.href;
console.log(val);

//Redirect
// window.location.href = "http://google.com/";
//reload page
// window.location.reload();

// console.log(val);

// History
// window.history.length(-1);
val = window.history.length;
console.log(val);

//Navigator object
val = window.navigator;
console.log(val);

val = window.navigator.appName;
console.log(val);

val = window.navigator.appVersion;
console.log(val);

val = window.navigator.userAgent;
console.log(val);

val = window.navigator.platform;
console.log(val);

val = window.navigator.vendor;
console.log(val);
val = window.navigator.language;
console.log(val);
