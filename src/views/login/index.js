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
        // axios.get('http://localhost:3232/auth/google').then((res)=>{
        //     console.log('succss')
        // })
        window.location.href = "http://localhost:3000/auth/google"
    }
    const handleProfile = ()=>{
        axios.get('http://localhost:3000/failed').then((res)=>{
            console.log(res)
        })
    }
    return (
        <div>
            I am login component
            <Link to="/chats">chats</Link>
            <button onClick={handleProfile}>get profile</button>
            <button onClick={handleLogin}>o auth</button>
            <button onClick={()=>props.login('eshanarora00001@gmail.com',"9756650020")} >Login</button>
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
