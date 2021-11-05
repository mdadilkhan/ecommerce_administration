import {applyMiddleware, createStore} from "redux";
import rootReducer from '../reducers';
import thunk from 'redux-thunk';




// console.log("rootReducer>>",rootReducer);

const store=createStore(rootReducer,applyMiddleware(thunk));


export default  store;