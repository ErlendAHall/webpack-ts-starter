// Default binding
function defaultBinding() {
  //"use strict"; // <-- does not work when this badboi is present
  console.log(this.a);
}

let a = 2;
// defaultBinding()

// Implicit soft binding
function timesTwo(operand) {
  console.log(this.a * operand);
}

var obj = {
  a: 2,
  timesTwo: timesTwo,
};

// 2 * 1
obj.timesTwo(1);

// override soft binding
// Explicit binding
function timesTwo(operand) {
  console.log(this.a * operand);
}

var obj = {
  a: 2,
  timesTwo: timesTwo,
};

// 2 * 1
obj.timesTwo(1);

var override = obj.timesTwo;
var a = 20;

// 2 * 20
override(10);
