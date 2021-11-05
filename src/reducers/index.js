import authReducer from './auth.reducers';
import { combineReducers } from 'redux';

// console.log("authreducer>>",authReducer);


const rootReducer=combineReducers({
   
   auth:authReducer
});


export default rootReducer;
