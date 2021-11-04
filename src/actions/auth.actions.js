//for authentication
//import constants fron constants.js file
//and then export all the function from this file to action/index.js


import { authConstants } from "./constants"

export const login=(user)=>{

    // console.log("user>>",user);
    return (dispatch)=>{
        dispatch({
            type:authConstants.LOGIN_REQUEST,
            payload:{
               ...user
            }
        
        });
    }
}