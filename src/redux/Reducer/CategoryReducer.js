import {
    CATEGORY_ADD_SUCCESS,
    CATEGORY_GET_SUCCESS,
    // CATEGORY_DELETE_SUCCESS
  } from "../Constants/Constants";
  
  let initState = {
    categories: [],
  };
  
  const categoryReducer = (state = initState, action) => {
    switch (action.type) {
      case CATEGORY_ADD_SUCCESS:
        return {
          ...state,
          categories: [...state.categories, action.payload],
        };
      case CATEGORY_GET_SUCCESS:
        return {
          ...state,
          categories: action.payload,
        };
    //   case CATEGORY_DELETE_SUCCESS:
    //     return {
    //       ...state,
    //       categories: state?.category?.filter(
    //         (item) => item?._id !== action.payload.id
    //       )
    //     };
      default:
        return state;
    }
  };
  export default categoryReducer;
  