import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import "../../../App.css";
import { Col, Row, Card, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createCategoryImage } from "../../../redux/Action/CategoryImageAction";
import { fetchCategory } from "../../../redux/Action/CategoryAction";
import { DropImg } from "../DropImg";
import * as Yup from "yup";
export default function CategoryAdd() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const { Category } = useSelector((state) => ({
    Category: state?.category?.categories,
  }));
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);
  // const [inputs, setInputs] = useState([{ id: 1, textValue: "", file: null }]);
  // console.log(inputs);
  // const handleChange = (event, index) => {
  //   const { name, value } = event.target;
  //   const list = [...inputs];
  //   list[index][name] = value;
  //   setInputs(list);
  // };

  // const handleFileChange = (event, index) => {
  //   const file = event.target.files[0];
  //   const list = [...inputs];
  //   list[index].file = file;
  //   setInputs(list);
  // };

  // const addInput = () => {
  //   const newInput = { id: inputs.length + 1, textValue: "", file: null };
  //   setInputs([...inputs, newInput]);
  // };

  // const removeInput = (index) => {
  //   const list = [...inputs];
  //   list.splice(index, 1);
  //   setInputs(list);
  // };
  const SignupSchema = Yup.object().shape({
    title: Yup.string().required("*Required"),
    category_id: Yup.string().required("*Required"),
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      category_id: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values.image == "object");
      if (typeof values.image == "object") {
        let formData = new FormData();
        for (let value in values) {
          formData.append(value, values[value]);
        }
        dispatch(createCategoryImage(formData));
        navigate("/category-image");
      } else {
        dispatch(createCategoryImage(values));
        navigate("/category-image");
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
                <Card.Title as="h3">Add Category</Card.Title>
              </Card.Header>
              <Col sm={12} lg={12} md={12} xl={12}>
                <Card>
                  <Row>
                    <section>
                      <div className="row">
                        <div className="col-md-6">
                          <label className="form-label">Title</label>
                          <input
                            type="text"
                            name="title"
                            onChange={formik.handleChange}
                            value={formik.values.title}
                            placeholder="Title"
                            className="form-control"
                          />
                          {formik.errors.title && formik.touched.title ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.title}
                            </div>
                          ) : null}
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Category</label>
                          <select
                            onChange={formik.handleChange}
                            value={formik.values.category_id}
                            className="form-control required"
                            name="category_id"
                          >
                            <option>Please Select Category</option>
                            <option value={0}>Computer Training</option>
                            <option value={1}>
                              Online Accounting, Taxation(GST)
                            </option>
                            <option value={2}>
                              How to set up manufacturing/service/business unit
                            </option>
                            <option value={3}>E-commerce</option>
                            <option value={4}>
                              Recruitment and Placement Services
                            </option>
                            <option value={5}>Career Counselling</option>
                            <option value={6}>Legal Services</option>
                            <option value={7}>Financial Services</option>
                            <option value={8}>
                              Social And Cultural Activities
                            </option>
                          </select>
                          {formik.errors.category_id &&
                          formik.touched.category_id ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.category_id}
                            </div>
                          ) : null}
                        </div>
                        <div>
                          <label className="fw-bold mt-5 ">
                            Category Image
                          </label>
                          <div className="control-group form-group mb-0 drop">
                            <label className="form-label">Catgory Image</label>
                            <DropImg
                              type="file"
                              className="dropify"
                              imgtype="image"
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
