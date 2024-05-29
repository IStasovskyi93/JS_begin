let myCar = {
  make: "France",
  model: "Renault",
  class: "Scenic",
  generation: 3,
  year: 2013,
  distance: "165000 km",
};
let color;
myCar.color = "Dark charry";

console.table(myCar[("make", "model")]);
