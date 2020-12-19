import React,{useEffect} from 'react';
import axios from 'axios'
import { store } from '../../store';

function Home(props) {

    useEffect(() => {
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
        .then(responseJson => {

          console.log(responseJson)
          store.dispatch({
            type:'LOGIN_SUCCESS',
            payload:{
              user:responseJson.user
            }
          })
          // this.setState({
          //   authenticated: true,
          //   user: responseJson.user
          // });
        })
        .catch(error => {
          console.log(error)
          // this.setState({
          //   authenticated: false,
          //   error: "Failed to authenticate user"
          // });
        });
      
    }, [])
    console.log(props)
    let user = {
      name:'ishan arora',
      email:"eshanarora00001@gmail.com"
    }

    const handleQuery = ()=>{
      axios.get('http://localhost:3000/handleQuery', {
        headers: {
          'Authorization': `token${JSON.stringify(user)}`
        }
      })
      .then((res)=>{
        // console.log(res.user)
    
      })
    }
    return (
        <div>
          i am home component
          <button onClick={handleQuery}></button>
          {/* <AppBar /> */}
        </div>
    )
}

export default Home
