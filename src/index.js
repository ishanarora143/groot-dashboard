import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import {store} from "./store";
import jwt_decode from 'jwt-decode';
import axios from 'axios';

console.log(store)
let auth = localStorage.getItem('authentication')

if(auth=="true"){
  console.log(store)
  let user = {name:'ishan',age:19}
  store.dispatch({type:"LOGIN_SUCCESS",payload:{
    user
  }})
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}
else{
  fetch("http://localhost:3000/login/success", {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    }
  })
  .then(response => {
    if (response.status === 200) return response.json();
    throw new Error("failed to authenticate user");
  })
  .then((responseJson)=>{

    console.log(responseJson)
    const {token} = responseJson
    const decoded = jwt_decode(token);
    axios.defaults.headers.common['Authorization'] = token;

    console.log(decoded)

    let alpha = store.dispatch({
      type:'LOGIN_SUCCESS',
      payload:{
        user:decoded
      }
    })
  })
  .catch(error => {
    console.log(error)
  })
  .then(() => {

    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
   
  })
  
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
