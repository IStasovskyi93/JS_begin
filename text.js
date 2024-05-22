const myName = "Ihor";
console.log(myName);
const objectA = {
  a: 10,
  b: 5,
};
console.log(objectA.b);
const objectCopy = objectA;
objectCopy.b = 20;
console.log(objectA.b, objectCopy.b);
objectA.c = 30;
console.table(objectA);
