import React from "react";
import { wrapper } from "./example.less";

export const Example: React.FC = () => {
  return (
    <main>
      <div className={wrapper}>CSS Modules</div>
      <div> API Url: {process.env.API_URL}</div>
    </main>
  );
};
