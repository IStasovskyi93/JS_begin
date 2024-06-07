//Create class employee with getters and setters

class Employee {
  #expirience;
  #firstname;
  #lastname;
  constructor(firstname, lastname, expirience) {
    this.#firstname = firstname;
    this.#lastname = lastname;
    this.expirience = expirience;
  }
  get firstname() {
    return this.#firstname;
  }
  set firstname(firstname) {
    this.#firstname = firstname;
  }
  get lastname() {
    return this.#lastname;
  }
  set lastname(lastname) {
    this.#lastname = lastname;
  }
  get expirience() {
    return this.#expirience;
  }
  set expirience(expirience) {
    this.#expirience = expirience;
  }
  // infoPerson = function () {
  //   return this.firstname + this.lastname + "have expirience about"
  //   + this.expirience +"years."
  // }
}

/*Create objects employees and add function through prototype which 
watch info about employees*/
let person1 = new Employee("Ivan", "Karas", 8);
let person2 = new Employee("Oksana", "Bond", 2);
let employees = [person1, person2];
Employee.prototype.infoPerson = function () {
  return (
    this.firstname +
    " " +
    this.lastname +
    " have expirience about " +
    this.expirience +
    " years."
  );
};
employees.forEach((person) => console.log(person.infoPerson()));
