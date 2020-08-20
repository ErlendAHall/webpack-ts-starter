var input = {
    text = text,
    width = width,

  draw: function () {
    console.log("drawing input");
  },

  changeWidth: function (newWidth) {
    this.width = newWidth;
  },
};

var textField = Object.create(input);

textField.draw();

console.log(textField.text);
