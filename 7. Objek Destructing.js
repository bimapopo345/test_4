const Person = {
  name: "John Doe",
  age: 30,
};

// destructing

let { name: namaku, age: umurku } = Person;

console.log(namaku); // John Doe
console.log(umurku); // John Doe
