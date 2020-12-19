import './App.css';
import React ,{useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,Redirect,
  Link
} from "react-router-dom";
import Home from './views/home';
import Login from './views/login'
// import Demo from './views/demo'
import Layout from './layouts/mainLayout';
import {connect} from 'react-redux'
import { store } from './store';



function App(props) {
  console.log(Home())

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route to="/" component={Layout}/>
        </Switch>
      </Router>
    </div>
  );
}

export default connect((state)=>({auth:state.login.auth}))(App);
