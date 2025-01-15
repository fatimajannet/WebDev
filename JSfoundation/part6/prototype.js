let computer = { cpu: 12 };
let lenovo = {
  screen: "HD",
  __proto__: computer, //go and link up to the properties of computer
};
let tomHardware = {};
// console.log(`computer`, computer.__proto__);
console.log(`lenovo`, lenovo.__proto__); //custom property

/* 
all the properties, function which you try to access or inject into another gets injected behind the scenes via prototypes 

lenovo -> {} -> screen: HD
*/

//another way of doing this is-
let genericCar = { tyres: 4 };
let tesla = {
  driver: "AI",
};
//(in the tesla, i want to access all the properties of genericCar)
Object.setPrototypeOf(tesla, genericCar);
console.log(`tesla`, Object.getPrototypeOf(/*whatevr i want*/ tesla));

//hasOwnProperty: return boolean
