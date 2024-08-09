const Person = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
};

console.log(Person);

console.log(Person.name);

console.log(Person["name"]);

console.log("age" in Person);

for (let prop in Person) {
  console.log(prop);
}

// 1.

for (let prop in Person) {
  //   console.log(prop);
  console.log(Person[prop]);
}
