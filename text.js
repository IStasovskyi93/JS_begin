class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

let vova = new Person("Vova", "Erpelov");
let sanya = new Person("Sasha", "Polozhai");
let myFriends = [vova, sanya];

console.log(vova.firstname + " " + vova.lastname);
console.log(sanya.lastname + " " + sanya.firstname);
