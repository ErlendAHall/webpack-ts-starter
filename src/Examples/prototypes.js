var input = {
  init: function (text, width) {
    this.text = text;
    this.width = width;
  },

  draw: function () {
    console.log("drawing input");
  },

  changeWidth: function (newWidth) {
    this.width = newWidth;
  },
};

var Textfield = Object.setPrototypeOf(input);

Textfield.init("() => {}", 25);

console.log(Textfield);
