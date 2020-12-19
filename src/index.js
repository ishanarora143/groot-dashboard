import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import {store} from "./store";

console.log(store)
let auth = localStorage.getItem('authentication')
console.log("app auth",typeof(auth))
if(auth=="true"){
  console.log(store)
  let user = {name:'ishan',age:19}
  store.dispatch({type:"LOGIN_SUCCESS",payload:{
    user
  }})
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
