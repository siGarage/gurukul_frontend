import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import "../../../App.css";
import { Col, Row, Card, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createResume } from "../../../redux/Action/ResumeAction";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { createCategory } from "../../../redux/Action/CategoryAction";
export default function CategoryAdd() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("*Required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      dispatch(createCategory(values));
      navigate('/category')
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Row className=" row-sm">
          <Col lg={12} xl={12} md={12} sm={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Add Category</Card.Title>
              </Card.Header>
              <Col sm={12} lg={12} md={12} xl={12}>
                <Card>
                  <Row>
                    <section>
                      <div className="row">
                        <div className="col-md-6">
                          <label className="form-label">Name</label>
                          <input
                            type="text"
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            placeholder="Name"
                            className="form-control"
                          />
                          {formik.errors.name &&
                          formik.touched.name ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.name}
                            </div>
                          ) : null}
                        </div>
                        <div className="col-md-12 mt-5">
                          <label className="fw-bold ">Note</label>
                          <input
                            type="text"
                            name="note"
                            onChange={formik.handleChange}
                            value={formik.values.note}
                            placeholder="Note"
                            className="form-control required"
                          />
                          {formik.errors.note &&
                          formik.touched.note ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.note}
                            </div>
                          ) : null}
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
