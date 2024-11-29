import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "react-datepicker/dist/react-datepicker.css";
import { FormSelect } from "../Forms/FormSelect";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { register, userUpdate } from "../../redux/Action/AuthAction";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name."),
  email: Yup.string()
    .email("Invalid email")
    .required("Email field is required"),
  contact_no: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

export function SimpleModal({
  open,
  role,
  scroll,
  handleClose,
  editUser,
  img,
}) {
  
  const descriptionElementRef = React.useRef(null);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      <Dialog
        open={open}
        fullScreen
        fullWidth
        onClose={handleClose}
        scroll={"body"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <iframe
          src={`${process.env.REACT_APP_API_BASE_URL}/images/${img}`}
          width="100%"
          height="100%"
        ></iframe>
      </Dialog>
    </>
  );
}
