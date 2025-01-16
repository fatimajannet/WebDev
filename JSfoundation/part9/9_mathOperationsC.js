/*common js
there are two method for importing and exporting: Module and COmmon JS. 
-common js is old but still is used to places like packages, npms and so on
*/

//named export

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

//while using js, you have a keyword named module. Through module you have to export

module.exports = {
  add,
  subtract,
  multiply,
};
