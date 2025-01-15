function Person(name, age) {
  //construction function//
  this.name = name; // 'this' provides u the content
  this.age = age;
}
//------------------------------------------------//
//------------------------------------------------//
function Car(make, model) {
  this.make = make;
  this.model = model;
}
//------------------------------------------------//
//------------------------------------------------//
//if u want to create an object, u have to have to use 'new'
let myCar = new Car("Toyota", "Camry");
console.log(myCar);

let myNewCar = new Car("Tata", "Safari");
console.log(myNewCar);
//------------------------------------------------//
//------------------------------------------------//
function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this.type}`; //providing the context
  };
}
let lemonTea = new Tea("lemon tea");
console.log(lemonTea.describe);
//------------------------------------------------//
//------------------------------------------------//
function Animal(species) {
  this.species = species;
}
Animal.prototype.sound = function () {
  return `${this.species} makes a sound`; //accessing the variable species
};
let dog = new Animal("Dog");
console.log(dog.sound);
let cat = new Animal("Dog");
console.log(cat.sound);

//------------------------------------------------//
//------------------------------------------------//

function Drink(name) {
  //creating a check//
  if (!new.target) {
    throw new Error("Drink must be called with new keyword");
  }
  this.name = name;
}
let tea = new Drink("tea");
let coffee = new Drink("coffee");
