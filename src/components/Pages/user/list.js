import React, { useEffect, useState } from "react";
import * as datatable from "../../../data/Table/datatable/datatable";
import { Link, useNavigate } from "react-router-dom";
import { Row, Card, Col, Breadcrumb } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchResume, resumeDelete } from "../../../redux/Action/ResumeAction";
import { fetchUsers } from "../../../redux/Action/AuthAction";
import { WarningModal } from "../../Modal/WarningModal";
export default function User() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const { user } = useSelector((state) => ({
    user: state?.userAuth?.users,
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
    dispatch(resumeDelete(deleteId));
    setShow(false);
    navigate("/resume-list");
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
          <h1 className="page-title">User</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              User
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              User{" "}
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        {/* <div className="ms-auto pageheader-btn">
          <Link
            to="/add-department"
            className="btn btn-primary btn-icon text-white me-3"
          >
            <span>
              <i className="fe fe-plus"></i>&nbsp;
            </span>
            Add User
          </Link>
        </div> */}
      </div>
      <Row className=" row-sm">
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">User</h3>
            </Card.Header>
            <Card.Body>
              {user?.length > 0 ? (
                <div className="table-responsive">
                  <datatable.DataTablesForClient
                    handleStatusUpdate={handleStatusUpdate}
                    handleShow={handleShow}
                    userList={user}
                  />
                </div>
              ) : (
                ""
              )}
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
