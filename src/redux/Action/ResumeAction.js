import API from "../../service/API";
import {
  RESUME_ADD_FAILURE,
  RESUME_ADD_REQUEST,
  RESUME_ADD_SUCCESS,
  RESUME_GET_FAILURE,
  RESUME_GET_SUCCESS,
  RESUME_GET_REQUEST,
  RESUME_DELETE_FAILURE,
  RESUME_DELETE_SUCCESS,
  RESUME_DELETE_REQUEST,
} from "../Constants/Constants";
import { ToastContainer, toast } from "react-toastify";

//Add Status action
export const createResume = (resume) => async (dispatch) => {
  try {
    dispatch({ type: RESUME_ADD_REQUEST });
    const { data } = await API.post("/createResume", resume);
    if (data.status_code == 201) {
      dispatch({ type: RESUME_ADD_SUCCESS, payload: data?.course });
      toast.success(data?.message);
    } else {
      toast.error(data?.message);
    }
  } catch (error) {
    dispatch({
      type: RESUME_ADD_FAILURE,
    });
    toast.error(error?.message);
  }
};
export const fetchResume = (id) => async (dispatch) => {
  try {
    dispatch({ type: RESUME_GET_REQUEST });
    let data2 = { id: id };
    const { data } = await API.post(`/getResumeById`, data2);
    dispatch({ type: RESUME_GET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RESUME_GET_FAILURE,
    });
  }
};

export const resumeDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: RESUME_DELETE_REQUEST });
    const { data } = await API.delete(`/deleteResume?id=${id}`);
    toast.success("Resume deleted successfully.");
    dispatch({ type: RESUME_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RESUME_DELETE_FAILURE,
    });
  }
};

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
