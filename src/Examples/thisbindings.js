// Default binding
function defaultBinding() {
  //"use strict"; // <-- does not work when this badboi is present
  console.log(this.a);
}

let a = 2;
// defaultBinding()

// Implicit object binding
function implicitObjectBinding() {
  console.log(this.a);
}

var obj = {
  a: 2,
  binding: implicitObjectBinding,
};

obj.binding();

// Explicit binding
function explicitBinding() {
  console.log(this.a);
}

var obj = {
  a: 2,
};

explicitBinding.call(obj);

function hardBinding() {
  console.log(this.a)
}

var obj = {
  a: 2
}

var hardBinding = explicitBinding.bind(obj)
var b = hardBinding(3);
console.log(b)
