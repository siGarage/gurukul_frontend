import { combineReducers } from "redux";
import userAuthReducer from "./Reducer/AuthReducer";
import resumeReducer from "./Reducer/ResumeReducer";
import categoryReducer from "./Reducer/CategoryReducer";
import categoryImageReducer from "./Reducer/CategoryImageReducer";
const reducer = combineReducers({
  userAuth: userAuthReducer,
  resumes: resumeReducer,
  category: categoryReducer,
  categoryImage: categoryImageReducer
});
export default reducer;
