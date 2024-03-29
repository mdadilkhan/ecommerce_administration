
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
                type:category.type,
                children: []
            }
        ]
    }

    for(let cat of categories){

        if(cat._id === parentId){
             const newCategory={
                _id: category._id,
                name: category.name,
                slug: category.slug,
                parentId: category.ParentId,
                type:category.type,
                children: []
             };
            myCategories.push({
                ...cat,
                childeren: cat.children.length > 0 ? [...cat.childeren,newCategory] : [newCategory]})
        }else{
            myCategories.push({
                ...cat,
                childeren: cat.childeren ?buildNewCategories(parentId, cat.childeren,category) : []
             });
        }
       
    }
    return myCategories;
}


const initial = (state = initState, action) => {
  console.log(action);

  switch (action.type) {
    case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
      state = {
        ...state,
        categories: action.payload.categories,
      };
      break;
    case categoryConstants.ADD_NEW_CATEGORY_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case categoryConstants.ADD_NEW_CATEGORY_SUCCESS:
      const category = action.payload.category;
      const updatedCategories = buildNewCategories(
        category.parentId,
        state.categories,
        category
      );
      console.log(updatedCategories);
      state = {
        ...state,
        categories: updatedCategories,
        loading: false,
      };
      break;
    case categoryConstants.ADD_NEW_CATEGORY_FAILURE:
      state = {
        ...initState,
        loading:false,
        error:action.payload.error
      };
      break;
    case categoryConstants.UPDATE_CATEGORIES_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case categoryConstants.UPDATE_CATEGORIES_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case categoryConstants.UPDATE_CATEGORIES_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    case categoryConstants.DELETE_CATEGORIES_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case categoryConstants.DELETE_CATEGORIES_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case categoryConstants.DELETE_CATEGORIES_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;

    default:
  }

  return state;
};

export default initial;