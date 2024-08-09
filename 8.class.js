// 1. Function Constructor

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const person1 = new Person("biman", "20");
// console.log(person1);

// 2. Class

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
//   changeName(newName) {
//     this.name = newName;
//   }
// }

// const person2 = new Person("biman", "20");

// console.log(person2);

// console.log(person2.greet());

// person2.changeName("Siti Aji");

// console.log(person2.greet());

// 3. Class >> getter dan setter

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
  set changeName(newName) {
    this.name = newName;
  }
}

const person2 = new Person("biman", "20");

console.log(person2);

// tuh di greet ga perlu (), karena pake getter
console.log(person2.greet);

// tuh di changeName ga perlu (), karena pake setter
person2.changeName = "AJO SATE";

console.log(person2.greet);
