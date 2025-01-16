/*
Inheritance implemented through prototypes:
- JavaScript uses prototypes to enable inheritance, allowing objects to share properties and methods.
- Prototypes are essentially templates from which other objects inherit properties and behaviors.

In this example:
1. `Person` is a constructor function for creating new `Person` objects.
2. `Person.prototype.greet` is a method added to the prototype of `Person`.
   - This ensures all instances of `Person` share the `greet` method instead of duplicating it for each object.
3. `fatima` is an instance of `Person` created with the `new` keyword.
   - It inherits the `greet` method from `Person.prototype`.
*/

function Person(name) {
  // Assign the name property to the object being created
  this.name = name;
}

// Add a method to the prototype of Person
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`); // Access the name property using 'this'
};

// Create an instance of Person
let fatima = new Person("fatima");

// Call the inherited greet method
fatima.greet(); // Output: "Hello, my name is fatima"

/*
Key Points:
- Prototypes allow efficient memory usage since methods like `greet` are shared among all instances of `Person`.
- When a property or method is accessed, JavaScript first looks for it on the object itself.
  - If not found, it looks up the prototype chain (i.e., `Person.prototype`).
*/
