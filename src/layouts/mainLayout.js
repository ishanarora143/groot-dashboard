import React ,{useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,withRouter
  } from "react-router-dom";
  import AppBar from '../components/appbar'


  import Login from '../views/login'
  import Chats from '../views/chats';
  import {connect} from 'react-redux'
import Home from '../views/home';

const PrivateRoute = ({path,auth,component,...rest})=>{
    console.log('auth valuue ==',auth)
    return(
        <Route path={path} render={
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
            <AppBar />
            {/* <Router> */}
                {/* <Switch> */}
                    <Route exact path="/" component={(Login)} />
                    <Route exact path="/home" component={(Home) } />
                    <PrivateRoute auth={props.auth} path = "/chats" component={(Chats)} />
                {/* </Switch> */}
            {/* </Router> */}
        </div>
    )
}

export default connect((state)=>({auth:state.login.auth}))(Layout)
