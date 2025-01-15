//1. write a 'for' loop that loops through thr array ['green tea', "black tea", "chai", "olong tea" ]' and stops the loop when it finds 'chai'. store all teas before "chai" in a new array named 'selectedTeas'
let teas = ["green tea", "black tea", "chai", "olong tea"];
let selectedTeas = [];
for (i = 0; i < teas.length; i++) {
  if (i != "chai") {
    selectedTeas.push[teas[i]];
  } else {
    break;
  }
}
console.log(selectedTeas);

// 2. write a for loop that loops through the array ["London", "New York", "Paris", "Berlin"] and skips "Paris". Store the other cities in a new array named "visitedCities"
let arr2 = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];
for (i = 0; i < arr2.length; i++) {
  if (i === "Paris" || i === "paris") {
    continue;
  }
  visitedCities.push(i);
}
console.log(visitedCities);

// 3. usa a 'for-of' loop to iterate through the array [1,2,3,4,5] and stop when the number 4 is found. Store the numbers before 4 in an array named 'smallNumbers'
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const i of numbers) {
  if (i == 4) {
    break;
  }
  smallNumbers.push(i);
}
console.log(smallNumbers);

//4. use 'for-of' loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea",  "olong tea"] and skip "herbal tea". store other teas in an array named 'preferedTeas'.
let teaTypes = ["chai", "green tea", "herbal tea", "black tea", "olong tea"];
let preferedTeas = [];
for (const tea of teaTypes) {
  if (tea === "herbal tea") {
    continue;
  }
  preferedTeas.push(tea);
}
console.log(preferedTeas);

/*5. usa a for-in loop to loop through an object containing city populations. stop the loop when the population of berlin is found and store all the previous cities populations in a new object named 'cityPopulations'

let cityPopulation = {
"London": 8900000, 
"New York": 8400000, 
"Paris": 2200000, 
"Berlin": 3500000
};
 */

let cityPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};

let cityPopulations = {};
//check MDN for more
for (const city in cityPopulation) {
  if (city == "Berlin") {
    break;
  }
  cityPopulations[city] = cityPopulation[city];
}
