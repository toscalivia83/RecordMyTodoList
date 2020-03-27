import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createDefaultStore } from "./redux/store";
import { App } from "./App";

ReactDOM.render(
  <Provider store={createDefaultStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
