
import { categoryConstants } from "../actions/constants";

const initState={
   categories:[],
   loading:false,
   error:null
};


const buildNewCategories=(parentId,categories,category)=>{
    let myCategories=[];

    if(parentId === undefined){
        return [
            ...categories,
            {
                _id: category._id,
                name:category.name,
                slug:category.slug,
                children: []
            }
        ]
    }

    for(let cat of categories){

        if(cat._id === parentId){
             
            myCategories.push({
                ...cat,
                childeren: cat.childeren ?buildNewCategories(parentId, [...cat.childeren, {
                    _id: category._id,
                    name: category.name,
                    slug: category.slug,
                    parentId: category.ParentId,
                    children: category.children
                }], category) : []
             });
        }else{
            myCategories.push({
                ...cat,
                childeren: cat.childeren ?buildNewCategories(parentId, cat.childeren,category) : []
             });
        }
       
    }
    return myCategories;
}


const initial=(state=initState,action) =>{
    console.log(action)
     
     switch(action.type){
         case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
             state = {
                 ...state,
                 categories:action.payload.categories
             }
             break;
         case categoryConstants.ADD_NEW_CATEGORY_REQUEST:
             state={
                 ...state,
                 loading:true
             }
             break;
          case categoryConstants.ADD_NEW_CATEGORY_SUCCESS:
              const category=action.payload.category;
              const updatedCategories=buildNewCategories(category.parentId,state.categories,category);
              console.log(updatedCategories);
             state={
                 ...state,
                 categories: updatedCategories,
                 loading:false
             }
             break;
          case categoryConstants.ADD_NEW_CATEGORY_FAILURE:
              state={
                  ...initState

              }
             break;
             default:
            
     }
    
     return state;

}

export default initial;