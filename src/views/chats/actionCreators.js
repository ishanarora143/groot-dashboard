import {FETCH_START,FETCH_SUCCESS,FETCH_FAILURE} from './actionTypes';

export const fetchStart =()=>({
    type:FETCH_START
    
})

export const fetchSuccess = (user)=>({
    type:FETCH_SUCCESS,
    payload:{
        user
    }
})
export const fetchFailure = (err)=>({
    type:FETCH_FAILURE,
    payload:{
        err
    }
})