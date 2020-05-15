class Input {
  constructor(onClick, width) {
    this.onClick = onClick;
    this.width = width;
  }

  draw() {
    console.log("drawing input");
  }
}

class Textfield extends Input {
  constructor(label, onClick, width) {
    super(onClick, width);
    this.label = label;
  }

  changeWidth(newWidth) {
    this.width = newWidth;
  }
}

let textfield = new Textfield("Push", () => {}, 15);
textfield.draw();

textfield.height = 20;
console.log(textfield.height);

Input.prototype.draw = function () {
  console.log("i have changed");
};

let textfield2 = new Textfield("Press", () => {}, 20);
textfield2.draw();
