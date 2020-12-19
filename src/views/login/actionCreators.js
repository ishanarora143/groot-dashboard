import {LOGIN_START,LOGIN_SUCCESS,LOGIN_FAILURE, JOKER_CHANGE} from './actionTypes';

export const loginStart =()=>({
    type:LOGIN_START
    
})

export const loginSuccess = (user)=>({
    type:LOGIN_SUCCESS,
    payload:{
        user
    }
})
export const loginFailure = (err)=>({
    type:LOGIN_FAILURE,
    payload:{
        err
    }
})

