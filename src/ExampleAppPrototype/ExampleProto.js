import React, { Component as ReactComponent } from "react";

export function Input(text, onClick) {
  let input = Object.create(ReactComponent);

  input.init = function () {
    this.text = text;
    this.onClick = onClick;
  };

  input.setText = function () {
    this.text = "newText";
    console.log("click");
    input.render();
    console.log(input);
  };

  input.render = function () {
    return <div className="input-boundary">{this.text}</div>;
  };

  return input;
}
