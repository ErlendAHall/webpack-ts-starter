// Explicit binding
function timesTwo(operand) {
  console.log(this.a * operand);
}

var obj = {
  a: 2,
};

// 2 * 2
timesTwo.call(obj, 2);


// Hard binding
function timesTwo(operand) {
  console.log(this.a * operand);
}

var obj = {
  a: 2,
};

var hardBinding = explicitBinding.bind(obj);

// 3 * 2
hardBinding(3);


// New binding
function timesTwo(operand) {
  this.a = 2
  console.log(this.a * operand);
}
var timesTwo = new timesTwo(4)


// Fat arrow

