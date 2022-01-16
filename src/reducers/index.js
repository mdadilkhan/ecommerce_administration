import authReducer from './auth.reducers';
import userReducer from './user.reducer';
import productReducer from './product.reducer';
import orderReducer from './order.reducer';
import categoryReducer from './category.reducer';
import { combineReducers } from 'redux';

// console.log("authreducer>>",authReducer);


const rootReducer=combineReducers({
    
   auth:authReducer,
   user:userReducer,
   category:categoryReducer,
   product:productReducer,
   order:orderReducer
});


export default rootReducer;
