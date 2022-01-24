import { productConstants } from "../actions/constants";

const initState={
    products:[]
    // loading:false,
    // error:null
 };




const initial=(state=initState,action) =>{
    switch(action.type){
        case productConstants.GET_ALL_PRODUUCT_SUCCESS:
            state={
                ...state,
                products:action.payload.products
            }
            break;
            default:
            
    }
   return state;
}


export default initial;