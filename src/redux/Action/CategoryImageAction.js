import API from "../../service/API";
import {
  CATEGORY_IMAGE_ADD_FAILURE,
  CATEGORY_IMAGE_ADD_REQUEST,
  CATEGORY_IMAGE_ADD_SUCCESS,
  CATEGORY_IMAGE_GET_REQUEST,
  CATEGORY_IMAGE_GET_SUCCESS,
  CATEGORY_IMAGE_GET_FAILURE,
} from "../Constants/Constants";
import { ToastContainer, toast } from "react-toastify";

//Add Status action
export const createCategoryImage = (CategoryImage) => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_IMAGE_ADD_REQUEST });
    const { data } = await API.post("/create-category-image", CategoryImage);
    if (data.status_code == 201) {
      dispatch({ type: CATEGORY_IMAGE_ADD_SUCCESS, payload: data?.categoryImage });
      toast.success(data?.message);
    } else {
      toast.error(data?.message);
    }
  } catch (error) {
    dispatch({
      type: CATEGORY_IMAGE_ADD_FAILURE,
    });
    toast.error(error?.message);
  }
};
export const fetchCategoryImages = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_IMAGE_GET_REQUEST });
    const { data } = await API.get(`/getCategoryImage`);
    dispatch({ type: CATEGORY_IMAGE_GET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CATEGORY_IMAGE_GET_FAILURE,
    });
  }
};

// export const resumeDelete = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: RESUME_DELETE_REQUEST });
//     const { data } = await API.delete(`/deleteResume?id=${id}`);
//     toast.success("Resume deleted successfully.");
//     dispatch({ type: RESUME_DELETE_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type: RESUME_DELETE_FAILURE,
//     });
//   }
// };

// export const courseUpdate = (course) => async (dispatch) => {
//   try {
//     dispatch({ type: COURSE_UPDATE_REQUEST });
//     const { data } = await API.put(`/updateCourse`, course);
//     dispatch({ type: COURSE_UPDATE_SUCCESS, payload: data.course_u });
//     toast.success("course updated successfully.");
//     return data;
//   } catch (error) {
//     console.log(error, "error");
//     toast.error(error);
//     dispatch({
//       type: COURSE_UPDATE_FAILURE,
//     });
//   }
// };
