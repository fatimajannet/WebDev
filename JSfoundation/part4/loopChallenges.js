//1. write a while loop that calculates the sum of all numbers from 1-5 and stores the result in a variable named 'sum'
let sum = 0;
while (i <= 5) {
  sum += i;
  i++;
}
console.log(sum);

//2. write a while loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown'
let countdown = [];
let i = 5;
while (i >= 1) {
  countdown.push(i);
  i--;
}
console.log(countdown);

//3. write a 'do while' loop that prompts a user to enter their favourite tea type until they enter "stop". Store each tea type in an array named ' teaCollection'.

// this loop is guaranteed to execute the code block at least once

// let teaCollection = [];
// let tea; //variable tea where we'll be adding inputs from user
// do {
//   prompt(`enter your favourite tea (type "stop" to finish)`);

//   if (tea !== "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== "stop");
//do it in browser console. nodejs does not support user input

//4. Write a 'do while' loop that adds numbers from 1 to 3 and stores the result in a variable named 'total'
let total = 0;
let j = 1;
do {
  total += j;
  j++;
} while (j <= 3);

//5. write a 'for' loop that multiples each element in the array '[2,4,6]' by 2 and stores the results in a new array named 'multipliedNumbers'
let multipliedNumbers = [];
let arr1 = [2, 4, 6];
// initialization; condition; increment //
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  multipliedNumbers.push(arr1[i] * 2);
}
console.log(multipliedNumbers);

//6. write a 'for' loop that lists all the cities in the array '["Paris", "New York", "Tokyo", "London"]' and stores each city in a new array named 'cityList'

let cityList = [];
let arr2 = ["Paris", "New York", "Tokyo", "London"];

for (i = 0; i < arr2.length; i++) {
  cityList.push(arr2[i]);
}
console.log(cityList);
