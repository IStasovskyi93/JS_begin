class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  fullName() {
    return this.firstname + " " + this.lastname;
  }
}

let vova = new Person("Vova", "Erpelov");
let sanya = new Person("Sasha", "Polozhai");
let person1 = vova.fullName();
let person2 = sanya.fullName();
console.log(`${person1} and ${person2}`);
console.log(`${vova.fullName()} and ${sanya.fullName()}`);
