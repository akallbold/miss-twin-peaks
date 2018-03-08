import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import twinPeaksReducer from "./reducer";
import { Provider } from "react-redux";

const store = createStore(twinPeaksReducer);
console.log("store", store);
console.log("state", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
