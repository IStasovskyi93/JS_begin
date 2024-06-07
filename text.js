class PriceList {
  _x;
  constructor(x) {
    // this.name = name;
    this._x = x;
  }
  get x() {
    return this._x;
  }
  set x(x) {
    this._x = x;
  }
}

//
// totalPrice(quantity) {
//   return quantity + this.name + "cost" + quantity * this.price + "$";
// }
let doll = new PriceList(5);
console.log(doll);
