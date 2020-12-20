import React from 'react';
import Home from '../views/home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,withRouter
  } from "react-router-dom";
  import AppBar from '../components/appbar'


function GrootLayout() {
    return (
        <>
            <AppBar />
            <Route exact path="/groot" render={()=>
            <Redirect to="/groot/home"/>
            } />
             <Route exact path = "/groot/home" component={Home} />
        </>
    )
}

export default GrootLayout
