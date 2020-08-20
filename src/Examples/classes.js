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
