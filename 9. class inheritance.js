// 1. inheritance pake extends

// parent
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }

  // private methods
  #test() {
    console.log("This is a private method.");
  }

  display() {
    console.log("This is a public method.");
    this.#test(); // access private method
  }
}

// childrennya > extends

class Student extends Person {
  // override method / shadow method
  greet() {
    console.log("I'm a student.");
  }
}

const student1 = new Student("John Doe", 18);

console.log(student1);

console.log(student1.display());
