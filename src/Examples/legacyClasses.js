function Input(text, width) {
  this.text = text;
  this.width = width;
}

Input.prototype.draw = function () {
  console.log("drawing input");
};

function Textfield(text, width, label) {
  // super
  Input.call(this, text, width);
  this.label = label;
}

Textfield.prototype.changeWidth = function (newWidth) {
  this.width = newWidth;
};

Textfield.prototype.draw = function () {
  console.log("polymorphism");
};

Input.prototype = Object.create(Textfield.prototype);

var btn = new Textfield("hello", 15, "Press");

console.log(btn.width);
btn.draw();
