//1. check if a number is greaterr than another one
let num1 = 3;
let num2 = 5;
console.log("I'm a regular upper code");

if (num1 < num2) {
  console.log("num1 is smaller than num2");
} else {
  console.log("num1 is greater than num2");
}

console.log("I'm a regular bottom code");

//2.checking if a str is equal to another str
let stra = "mahia";
let strb = "MAHIA";

if (stra == strb) {
  console.log("pick another username");
} else {
  console.log("you can pick this username");
}

//3. check is a var is number or not
let score = 45;
// '===' checks even the type of the variation is same or not
if (typeof score === "number") {
  console.log("yes, this is a number");
} else {
  console.log("no, it isn't a number");
}

//4. check if a bool value is true or false
let isTeaReady = false;
if (isTeaReady) {
  console.log("tea is ready");
} else {
  console.log("tea is not ready");
}

//5. check if an array is empty or not

let item = [];
if (item.length == 0) {
  console.log("array is empty");
} else {
  console.log("array is not empty");
}
