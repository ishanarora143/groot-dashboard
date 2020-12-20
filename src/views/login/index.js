import React,{useState} from 'react';
import {connect} from 'react-redux';
import LockIcon from '@material-ui/icons/Lock';
import {TextField,Button} from '@material-ui/core'

import './login.css'

import {login } from './loginState';

function Login(props) {
    return (
        <div className="login" >
        <div className="login__picture">

        </div>
        <div className="login__box">
                <LockIcon />
                <h3>Sign In</h3>
                <div className="login__input">
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <TextField id="outlined-basic" type="password" label="Password" variant="outlined" />
                    <Button className="login__button" variant="contained" color="primary">
                    Login
                    </Button>
                </div>
                <h5>Or</h5>
                <Button onClick={()=>window.location.href="http://localhost:3000/auth/google"}>
                    GOOGLE LOGIN
                </Button>
                {/* <GoogleLogin
                    clientId={ CLIENT_ID }
                    buttonText='Login'
                    onSuccess={ login }
                    onFailure={ handleLoginFailure }
                    cookiePolicy={ 'single_host_origin' }
                    responseType='code,token'
                    /> */}
                
        </div>
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
