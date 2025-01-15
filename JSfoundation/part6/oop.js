let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  //adding functionality//
  start: function () {
    return `${this.brand} car got started in ${this.year}`;
  },
};
// console.log(car.start());

//creating a Vehicle class//
class Vehicle {
  //class has a special type of methond, known as constructor
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  //defining a method inside the class
  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

/*Inheritance*/
//if you want to inherit, write the word 'extends'
class Car extends Vehicle {
  drive() {
    return `${this.brand}: This is an inheritance example`;
  }
}
//creating object
//myCar object oif the vehicle class
let myCar = new Car("Toyota", "Corolla");
// console.log(myCar.start);
// console.log(myCar.drive);

//always use "new"
let vehOne = new Vehicle("Toyota", "Corolla");
// console.log(vehOne.brand);

/*Encapsulation*/
//It means: Restricting direct access to data
class BankAccount {
  //by using '#', noone can access this variable
  #balance = 0;

  //I can access it within the method, this is the whole idea behind encapsulation.
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance() {
    return ` $ ${this.#balance}`;
  }
}

let account = new BankAccount();
// console.log(account.getBalance());

/*Abstraction*/
// It hides the complex implementation details.

class CoffeeMachine {
  start() {
    //call DB
    //filter value
    return `Starting the machine`;
  }
  brewCoffee() {
    // complex calculation
    return `Brewing coffee`;
  }

  pressStartButton() {
    let msgOne = this.start();
    let msgTwo = this.brewCoffee();
    return `${msgOne} + ${msgTwo}`;
  }
}
let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

/*Polymorphism*/
// the ability of something to have/be displayed in kore than one form.

class Bird {
  fly() {
    return `Flying....`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can;t fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());

/*Static Method */
class Calculator {
  //static method is a special method which is called by it's class
  static add(a, b) {
    return a + b;
  }
}
// console.log(Calculator.add(2, 3));

/** getters and setters */
class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("salary cannot be negative");
    }
    this.name = name;
    this.#salary = salary;
  }
  get salary() {
    return `you are not alllowed to see the salary`;
  }
  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this._salary = value;
    }
  }
}
let emp = new ("Alice", 50000)();
console.log(emp._salary);
emp.salary = 60000;

//getters are used to fetch data, and setters are used to modify data, providing a way to control access to object properties//
