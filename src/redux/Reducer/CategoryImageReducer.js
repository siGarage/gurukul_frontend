import {
    CATEGORY_IMAGE_ADD_SUCCESS,
    CATEGORY_IMAGE_GET_SUCCESS,
    // CATEGORY_DELETE_SUCCESS
  } from "../Constants/Constants";
  
  let initState = {
    categoryImage: [],
  };
  
  const categoryImageReducer = (state = initState, action) => {
    switch (action.type) {
      case CATEGORY_IMAGE_ADD_SUCCESS:
        return {
          ...state,
          categoryImage: [...state.categoryImage, action.payload],
        };
      case CATEGORY_IMAGE_GET_SUCCESS:
        return {
          ...state,
          categoryImage: action.payload,
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
  export default categoryImageReducer;
  