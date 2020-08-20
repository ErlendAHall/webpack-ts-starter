class Private {
  #test = "test3";
  test;

  constructor(test1) {
    this.test = test1;
  }

  getPrivate() {
    return this.#test;
  }

  getPrivate2() {
    return this.getPrivate();
  }
}

let private = new Private("test1");
console.log("private.getPrivate2()");
