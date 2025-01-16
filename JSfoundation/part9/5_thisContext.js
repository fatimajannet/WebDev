/*
Context Binding:
- Context binding in JavaScript refers to controlling the value of `this` when a function is invoked.
- `this` refers to the object that calls the function.
- In `person.greet()`, `this` refers to `person`, so it correctly logs the name.
- When `greetFunction` is called without a specific context, `this` becomes undefined or the global object (depending on strict mode).
- `bind` explicitly sets `this` to the provided object (`{ name: "John" }` in this case), ensuring the function always uses that context.

Usage:
- `bind`: Creates a new function with `this` bound to a specific object.
- `call`: Invokes a function with `this` set to a specific object and passes arguments individually.
- `apply`: Similar to `call`, but arguments are passed as an array.
*/

const person = {
  name: "fatima",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

person.greet();

const greetFunction = person.greet;
greetFunction();

//binding this greeting(passing object)
const boundGreet = person.greet.bind({ name: "John" });
boundGreet();

//bind, call and apply
