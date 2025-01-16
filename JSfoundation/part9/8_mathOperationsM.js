export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}

/*
difference between 'export' and 'export default': 
-Use export for utility modules with multiple functions or constants.
-Use export default for modules that have a single main purpose.
*/
