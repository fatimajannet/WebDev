//number
let balance = 120;
console.log(typeof balance);

//(not used)
let anotherBalance = new Number(120);
console.log(anotherBalance); //output [Number: 120]

//boolean
let isActive = true;
let isReallyActive = new Boolean(true); //not recommended

//null and defined
let firstName;
console.log(firstName);
//output: undefined.

// console.log(sup);
//output: sup is not defined (doesn;t exist)

let secondName = null;
let lastName = undefined;
console.log(secondName);

//string
let myStrOne = "hola";
let username = "mahia";

let oldGreet = myStrOne + " " + username;
console.log(oldGreet);

let greetMessage = `Hello ${username} !`; //it will auto generate a space
let demoOne = `Value is ${2 * 2}`;
console.log(greetMessage); //output: hello mahia !
console.log(demoOne); // output: Value is 4

// symbol: guarantees the uniqueness

let sm1 = Symbol("mahia");
let sm2 = Symbol("mahia");

console.log(sm1 == sm2); //output: false.
//whole point of symbol is generating a unique value
//check MDN for more
