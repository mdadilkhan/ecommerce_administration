import { authConstants } from "../actions/constants"

const initState={
    name:'adil'
};


const initial = (state=initState,action) => {
    
   
    // console.log("action>>>",action);
    // console.log("type>>",action.type);
    // console.log("payload>>>",action.payload);

    switch(action.type){
        case authConstants.LOGIN_REQUEST:
          state={
              ...state,
              ...action.payload
              
          }
          break;
          default:
    }
    return state;
}

export default initial;