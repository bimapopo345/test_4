function Person(nama, umur) {
  this.nama = nama;
  this.umur = umur;
}

// objek prototype inherit

Person.prototype.getFullname = function () {
  return `${this.nama} ${this.umur}`;
};

const person1 = new Person("Bima", 20);
const person2 = new Person("asda", 918293);

console.log(person1);
console.log(person2);

// bisa dilihat , walaupun di person1 ga ada Bima 20, tapi kita udh modif dia di protoypenya, jadi turunanan dari person, akan mewarisi protype induknya
console.log(person1.getFullname());
