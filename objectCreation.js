// ~~~~~~~~~~~~~~~ use javaScript ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//===========================================================================

// [1] using Object Literal

// Creating an object using object literal syntax
const person1 = {
  name: "Zahraa",
  age: 20,
  job: "Student",
};
console.log(person1); // {  name: "Zahraa" ,age: 20 ,job: "Student"}

//=============================================================================

// [2]  using Object Constructor

// Creating an object using constructor function
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}

const person2 = new Person("Zahraa", 20, "Student"); // {  name: "Zahraa" ,age: 20 ,job: "Student"}

//=============================================================================

//=============================================================================

// [3]  using Object Constructor

// Creating an object using Object.create()
const personPrototype = {
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const person3 = Object.create(personPrototype);
person3.name = "Zahraa";
person3.age = 20;
person3.job = "Student"; // {  name: "Zahraa" ,age: 20 ,job: "Student"}
personPrototype.greet(); // Hello, my name is Zahraa

//=============================================================================

//=============================================================================

// [4]  using Object Constructor

// Creating an object using ES6 class syntax
class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person4 = new Person("Zahraa", 20, "Student");

console.log(person4); // {  name: "Zahraa" ,age: 20 ,job: "Student"}

//=============================================================================

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Node js ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//you want to export and use objects across files, you can create modules

// person.js
class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

module.exports = Person;

// app.js
const Person = require("./person");

const person5 = new Person("Bob", 35, "Manager");
person5.greet();
