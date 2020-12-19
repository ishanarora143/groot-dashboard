import { FETCH_SUCCESS,FETCH_FAILURE,FETCH_START } from "./actionTypes";
import {fetchStart,fetchSuccess,fetchFailure} from "./actionCreators"

const initialState = {
    
};

export const fetchData = ()=>(dispatch)=>{
    dispatch(fetchStart())
    setTimeout(()=>{
        dispatch(fetchSuccess())
    })
    

}

export default function(state = initialState, action) {
  switch (action.type) {
    
    case FETCH_START: {
        return {
          ...state,
        };
      }    
      case FETCH_SUCCESS: {
        return {
          ...state,
          
        };
      }    
      case FETCH_FAILURE: {

        return {
          ...state,
          
        };
      }
    
    default:
      return state;
  }
}
