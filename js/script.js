// examples for OOP

// example-1: simple object
let student = {
  firstname: "abe",
  lastname: "kebe",
  greet: "hello",
};

console.log(student);

// example-2: object with methods
let myFiatCar = {
  name: "Fiat",
  model: 500,
  weight: "850kg",
  color: "white",

  start: function () {
    return "start my " + this.name;
  },
  drive: function () {
    return "Go forward";
  },
  brake: function () {
    return "Press brake on my " + this.name;
  },
  stop: function () {
    return "stop my " + this.name;
  },
};

console.log(myFiatCar["color"]);
console.log(myFiatCar.drive());
console.log(myFiatCar.weight);
console.log(myFiatCar.stop());
console.log(myFiatCar.brake());

// update and add properties
myFiatCar.name = "tesla";
console.log(myFiatCar);
myFiatCar.mileage = 40000;
console.log(myFiatCar.mileage);

// 6.3 JS object constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

let person1 = new Person("Abe", "Kebe");
let person2 = new Person("Sara", "Ali");

console.log(person1.fullName());
console.log(person2.fullName());
