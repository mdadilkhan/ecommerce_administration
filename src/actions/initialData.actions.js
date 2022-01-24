import axios from "../helpers/axios";
import { categoryConstants, productConstants } from "./constants";


export const getInitialData=()=>{
    return async dispatch=>{
    
         const res = await axios.post(`/initialData`);
        //  console.log('initi>>>>',res);
        //  console.log('cat>>>',res.data.categories);
        //  console.log('pro>>>',res.data.products);
        
        if(res.status===200){
            const {categories,products}=res.data;
         
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload: {categories}
            });
            dispatch({
                type:productConstants.GET_ALL_PRODUUCT_SUCCESS,
                payload:{products}
            })
        }
        
    }
}