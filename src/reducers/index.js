import { combineReducers } from 'redux';
import authReducer from './auth.reducers';

console.log("authreducer>>",authReducer);
const rootReducer=combineReducers({
   
   auth:authReducer
});


export default rootReducer;
