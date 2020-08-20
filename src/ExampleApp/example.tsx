import React from "react";
import { wrapper } from "./example.less";
import { Input } from "../ExampleAppPrototype/ExampleProto";

export const Example: React.FC = () => {
  Input.prototype = React.Component.prototype;

  return (
    <main>
      <Input text="text" onClick={() => console.log("test")} />
      <div className={wrapper}>CSS Modules</div>
      <div> API Url: {process.env.API_URL}</div>
    </main>
  );
};
