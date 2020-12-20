import React,{useState} from 'react';
import {connect} from 'react-redux';
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";
  import {login } from './loginState';

function Login(props) {
    console.log(props)
    
    const handleLogin = ()=>{
        window.location.href = "http://localhost:3000/auth/google"
    }
   
    return (
        <div>
            I am login component
            <Link to="/chats">chats</Link>
            <button onClick={handleLogin}>o auth</button>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        auth:state.login.auth,
        loading:state.login.loading,
    }
}

export default connect(mapStateToProps,{login})(Login)
