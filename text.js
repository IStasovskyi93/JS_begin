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
let myFriends = [vova, sanya];

console.log(vova.fullName());
