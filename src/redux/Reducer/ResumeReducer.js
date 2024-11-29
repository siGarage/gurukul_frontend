import {
    RESUME_ADD_SUCCESS,
    RESUME_GET_SUCCESS,
    RESUME_DELETE_SUCCESS
  } from "../Constants/Constants";
  
  let initState = {
    resumes: [],
  };
  
  const resumeReducer = (state = initState, action) => {
    switch (action.type) {
      case RESUME_ADD_SUCCESS:
        return {
          ...state,
          resumes: [...state.courses, action.payload],
        };
      case RESUME_GET_SUCCESS:
        return {
          ...state,
          resumes: action.payload,
        };
      case RESUME_DELETE_SUCCESS:
        return {
          ...state,
          resumes: state?.resumes?.filter(
            (item) => item?._id !== action.payload.id
          )
        };
      default:
        return state;
    }
  };
  export default resumeReducer;
  