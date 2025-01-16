// To make a function a generator, you add an asterisk (*) after the "function" keyword.
/**
 * A generator function doesn't execute everything at once.
 * Instead, it pauses after yielding a value and resumes when called again.
 */
//generator
function* numberGenerator() {
  yield 1; // Pauses and returns 1
  yield 2; // Pauses and returns 2
  yield 3; // Pauses and returns 3
  // When there are no more "yield" statements, it returns undefined by default.
}

// Create instances of the generator function.
let gen = numberGenerator();
let genTwo = numberGenerator(); // A new instance, independent of "gen".

// Use the .next() method to move through the generator and get the values.

//iterator
//iterators return an object with next() method which produces a sequence of values
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
console.log(gen.next().value); // Output: 3
console.log(gen.next().value); // Output: undefined (no more values to yield)

// New generator instance starts fresh.
console.log(genTwo.next().value); // Output: 1
console.log(genTwo.next().value); // Output: 2
