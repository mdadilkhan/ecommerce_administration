import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';




// console.log("rootReducer>>",rootReducer);

const store=createStore(rootReducer,composeWithDevTools(
    applyMiddleware(thunk)
));


export default  store;