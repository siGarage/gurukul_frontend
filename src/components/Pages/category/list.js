import React, { useEffect, useState } from "react";
import * as datatable from "../../../data/Table/datatable/datatable";
import { Link, useNavigate } from "react-router-dom";
import { Row, Card, Col, Breadcrumb } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../../redux/Action/CategoryAction";
import { WarningModal } from "../../Modal/WarningModal";
export default function Category() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  const { Category } = useSelector((state) => ({
    Category: state?.category?.categories,
  }));
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const handleStatusUpdate = (row) => {
    // dispatch(userUpdate({ ...row, type: "user" }))
    //     .then(() => {
    //         dispatch(fetchUserByRole(2))
    //     })
    //     .catch(err => console.log(err))
  };

  const userDeleteAction = () => {
    // dispatch(CategoryDelete(deleteId));
    // setShow(false);
    // navigate("/category-list");
  };

  const handleShow = (id) => {
    setDeleteId(id);
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Category</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Category
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Category{" "}
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Link
            to="/category-add"
            className="btn btn-primary btn-icon text-white me-3"
          >
            <span>
              <i className="fe fe-plus"></i>&nbsp;
            </span>
            Add Category
          </Link>
        </div>
      </div>
      <Row className=" row-sm">
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Category</h3>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <datatable.DataTablesForCategory
                  handleStatusUpdate={handleStatusUpdate}
                  handleShow={handleShow}
                  Category={Category}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <WarningModal
        setShow={setShow}
        propertyDeleteAction={userDeleteAction}
        show={show}
        handleClose={handleClose}
      />
    </div>
  );
}
