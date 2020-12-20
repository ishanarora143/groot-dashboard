import React ,{useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,withRouter
  } from "react-router-dom";

  import GrootLayout from './GrootLayout'


  import Login from '../views/login'
  import Chats from '../views/chats';
  import {connect} from 'react-redux'
import Home from '../views/home';

const PrivateRoute = ({path,auth,component,...rest})=>{
    console.log('auth valuue ==',auth)
    return(
        <Route path={path}  render={
            (props)=>
                auth?
                React.createElement(component,props):
                <Redirect to="/" />
            
        } />
    )
}
function Layout(props) {
    console.log('fuck',props.auth)
    useEffect(() => {
        console.log('is mounted')
        
    }, [])
    return (
        <div>
                    <Route exact path="/" component={(Login)} />
                    <PrivateRoute auth ={props.auth} path="/groot" component={GrootLayout } />
                    {/* <PrivateRoute auth={props.auth} path = "/chats" component={(Chats)} /> */}
        </div>
    )
}

export default connect((state)=>({auth:state.login.auth}))(Layout)
