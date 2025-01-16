/*
there are special type of functions, in which if any function is created, it retains the memory of the function.
 */

/*Closures are functions that remember the environment in which they were created. 
They can access and retain variables declared outside of their scope, even after the outer function has finished executing.
 */

function outer() {
  let counter = 4;
  return function () {
    counter++;
    return counter;
  };
}

let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());

/* Here, the 'inner' function forms a closure, allowing it to "remember" the variable 'count' 
from the 'outer' function's scope, even though 'outer' has already executed.
*/
