import { LOGIN_SUCCESS,LOGIN_FAILURE,LOGIN_START,JOKER_CHANGE } from "./actionTypes";
import {loginStart,loginSuccess,loginFailure} from "./actionCreators"

const initialState = {
    auth:false,
    loading:false,
    user:null,
};

export const login = (email,password)=>(dispatch)=>{
    let alpha = dispatch(loginStart())
    console.log("alpha",alpha)
    
    if(email == "eshanarora00001@gmail.com" && password == "9756650020"){
        setTimeout(()=>{
            dispatch(loginSuccess({name:'ishan',age:19}))
            localStorage.setItem('authentication',true)

        },5000)

    }
    else{
        setTimeout(()=>{
            dispatch(loginFailure("Email and Password are incorrect"))
        })
    }

}

export default function(state = initialState, action) {
    console.log(state)
  switch (action.type) {
    
    case LOGIN_START: {
        return {
          ...state,
          loading:true,
        };
      }    
      case LOGIN_SUCCESS: {
          const {user} = action.payload
        return {
          ...state,
          loading:false,
          auth:true,
          user:user
        };
      }    
      case LOGIN_FAILURE: {
        const {err} = action.payload

        return {
          ...state,
          loading:false,
          auth:false,
          err:err
        };
      }

    
    default:
      return state;
  }
}
