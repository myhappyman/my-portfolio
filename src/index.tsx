import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";
import HelmetComponent from "./HelmetComponent";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <HelmetComponent />
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
