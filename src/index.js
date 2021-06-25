/* Counter
import { createStore } from "redux";


const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");


number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch(action.type){
    case ADD:
      return count+1;
    case MINUS:
      return count-1;
    default: 
      return count;
  }
}

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
}

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
}


add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);*/

/*To do JS */

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {Provider} from 'react-redux';
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
