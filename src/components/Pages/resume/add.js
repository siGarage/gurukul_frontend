import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import "../../../App.css";
import { Col, Row, Card, Breadcrumb, Button } from "react-bootstrap";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DropImg } from "../DropImg";
import { register } from "../../../redux/Action/AuthAction";
import { createResume } from "../../../redux/Action/ResumeAction";
import * as Yup from "yup";
import { toast } from "react-toastify";
export default function ResumeAdd() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const SignupSchema = Yup.object().shape({
    full_name: Yup.string().required("*Required"),
    email: Yup.string()
      .email("*Invalid email")
      .required("*Required"),
    phone: Yup.number().required("*Required"),
    permanent_address: Yup.string().required("*Required"),
  });
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      remarks: "",
      phone: "",
      photo: "",
      permanent_address: "",
      cv: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      if (typeof values.photo == "object" && typeof values.cv == "object") {
        let formData = new FormData();
        for (let value in values) {
          formData.append(value, values[value]);
        }
        dispatch(createResume(formData));
        navigate("/resume-list");
      } else {
        toast.error("Photo and CV are required.");
      }
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Row className=" row-sm">
          <Col lg={12} xl={12} md={12} sm={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Add Resume</Card.Title>
              </Card.Header>
              <Col sm={12} lg={12} md={12} xl={12}>
                <Card>
                  <Row>
                    <section>
                      <div className="row">
                        <div className="col-md-6">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            placeholder="E-mail"
                            className="form-control required"
                          />
                          {formik.errors.email && formik.touched.email ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.email}
                            </div>
                          ) : null}
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Name</label>
                          <input
                            type="text"
                            name="full_name"
                            onChange={formik.handleChange}
                            value={formik.values.full_name}
                            placeholder="Name"
                            className="form-control"
                          />
                          {formik.errors.full_name &&
                          formik.touched.full_name ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.full_name}
                            </div>
                          ) : null}
                        </div>
                        <div className="col-md-6">
                          <label className="fw-bold mt-5 ">Contact No</label>
                          <input
                            type="number"
                            name="phone"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                            placeholder="Phone"
                            className="form-control required"
                          />
                          {formik.errors.phone && formik.touched.phone ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.phone}
                            </div>
                          ) : null}
                        </div>
                        <div className="col-md-6">
                          <label className="fw-bold mt-5 ">
                            Permanent Address
                          </label>
                          <input
                            type="text"
                            name="permanent_address"
                            onChange={formik.handleChange}
                            value={formik.values.permanent_address}
                            placeholder="Permanent Address"
                            className="form-control required"
                          />
                          {formik.errors.permanent_address &&
                          formik.touched.permanent_address ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.permanent_address}
                            </div>
                          ) : null}
                        </div>
                        <div className="col-md-12">
                          <label className="fw-bold mt-5 ">Photo</label>
                          <div className="control-group form-group mb-0 drop">
                            <label className="form-label">Photo</label>
                            <DropImg
                              type="file"
                              className="dropify"
                              imgtype="photo"
                              formik={formik}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <label className="fw-bold mt-5 ">CV</label>
                          <div className="control-group form-group mb-0 drop">
                            <label className="form-label">CV</label>
                            <DropImg
                              type="file"
                              className="dropify"
                              imgtype="cv"
                              formik={formik}
                            />
                          </div>
                        </div>
                        <div>
                          <Button
                            type="submit"
                            variant="primary"
                            className="me-1 mt-5"
                          >
                            Submit
                          </Button>
                        </div>
                      </div>
                    </section>
                  </Row>
                </Card>
              </Col>
            </Card>
          </Col>
        </Row>
      </form>
    </div>
  );
}
