function Person(nama, umur) {
  this.name = nama;
  this.age = umur;
  this.sayHello = function () {
    console.log("Hello, my name is " + this.name);
  };
}

const person1 = new Person("Bima", 20);
const person2 = new Person("ALdi", 293);

console.log(person1);
console.log(person2);

person1.meeting = function () {
  console.log("MEET");
};

console.log(person1);
console.log(person1.meeting());
