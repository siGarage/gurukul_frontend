import { Navigate, Route, Routes } from "react-router-dom";
import ChangePassword from "./components/Authentication/ForgotPassword/ChangePassword";
import ForgotPassword from "./components/Authentication/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/Authentication/ForgotPassword/ResetPassword";
import Login from "./components/Authentication/Login/Login";
import Profile from "./components/Pages/Profile";
import Register from "./components/Authentication/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import ResumeAdd from "./components/Pages/resume/add";
import CategoryAdd from "./components/Pages/category/add";
import CategoryList from "./components/Pages/category/list";
import CategoryImageList from "./components/Pages/categoryImage/list";
import CategoryImageAdd from "./components/Pages/categoryImage/add";
import Resumelist from "./components/Pages/resume/list";
import Userlist from "./components/Pages/user/list";
import UserProfileResume from "./components/Pages/UserProfile";
import RootApp from "./helper/RootApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const authenticate = sessionStorage.getItem("accessToken");
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path={"/register"} element={<Register />} />
        <Route path={"/"} element={<Login />} />
        <Route path={"/forgotPassword"} element={<ForgotPassword />} />
        <Route path={"/resetPassword"} element={<ResetPassword />} />
        <Route path={"/changePassword/:id"} element={<ChangePassword />} />

        {authenticate ? (
          <>
            {" "}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
            <Route path={`/`} element={<RootApp />}>
              <Route index element={<Dashboard />} />
              <Route path={"/profile"} element={<Profile />} />
              <Route path={"/dashboard"} element={<Dashboard />} />
              <Route path={"/resume-add"} element={<ResumeAdd />} />
              <Route path={"/resume"} element={<Resumelist />} />
              <Route path={"/category"} element={<CategoryList />} />
              <Route path={"/category-image"} element={<CategoryImageList />} />
              <Route
                path={"/category-image-add"}
                element={<CategoryImageAdd />}
              />
              <Route path={"/category-add"} element={<CategoryAdd />} />
              <Route path={"/user-list"} element={<Userlist />} />
              <Route
                path={"/:user/profile/:id"}
                element={<UserProfileResume />}
              />
            </Route>
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </>
  );
}

export default App;
