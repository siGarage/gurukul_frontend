import API from "../../service/API";
import {
  CATEGORY_ADD_FAILURE,
  CATEGORY_ADD_REQUEST,
  CATEGORY_ADD_SUCCESS,
  CATEGORY_GET_REQUEST,
  CATEGORY_GET_SUCCESS,
  CATEGORY_GET_FAILURE,
} from "../Constants/Constants";
import { ToastContainer, toast } from "react-toastify";

//Add Status action
export const createCategory = (Category) => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_ADD_REQUEST });
    const { data } = await API.post("/createCategory", Category);
    if (data.status_code == 201) {
      dispatch({ type: CATEGORY_ADD_SUCCESS, payload: data?.category });
      toast.success(data?.message);
    } else {
      toast.error(data?.message);
    }
  } catch (error) {
    dispatch({
      type: CATEGORY_ADD_FAILURE,
    });
    toast.error(error?.message);
  }
};
export const fetchCategory = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_GET_REQUEST });
    const { data } = await API.get(`/getCategory`);
    dispatch({ type: CATEGORY_GET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CATEGORY_GET_FAILURE,
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
