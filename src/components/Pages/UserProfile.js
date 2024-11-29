import React, { useEffect, useState } from "react";
import { Tabs, Tab, Breadcrumb, Card, Row, Col, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/Action/AuthAction";
import { fetchResume } from "../../redux/Action/ResumeAction";
import * as datatable from "../../data/Table/datatable/datatable";
import { SimpleModal } from "../Modal/SimpleModal";

export default function StudentProfile() {
  const dispatch = useDispatch();
  const params = useParams();
  const [open, setOpen] = React.useState(false);
  const [finalUser, setFinaluser] = React.useState([]);
  const [scroll, setScroll] = React.useState("paper");
  const [img, setImg] = React.useState("");
  const { user, resume } = useSelector((state) => ({
    user: state?.userAuth?.users?.filter((usr) => usr?._id == params?.id),
    resume: state?.resumes?.resumes,
  }));

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchResume(params?.id));
  }, []);
  // useEffect(() => {
  //   if (user?.length > 0) {
  //     console.log(user.length)
  //     let d = user?.filter((usr) => {
  //       console.log(usr._id==params.id);
  //     });
  //     setFinaluser(d);
  //   } else {
  //     dispatch(fetchUsers());
  //   }
  // }, [user]);
  function getFirstLetter(str) {
    return str.charAt(0);
  }

  const handleClose = () => {
    setOpen(false);
  };
  const handleShow = (img) => () => {
    console.log("kartik");
    setImg(img);
    setOpen(true);
  };

  return (
    <div className="mt-2">
      {user.length && resume.length > 0 ? (
        <Row id="user-profile">
          <Col lg={6} md={6} xl={6} sm={12}>
            <Card className="bg-transparent shadow-none border-0">
              <Card.Body className="bg-white small-radius">
                <div className="wideget-user">
                  <Row>
                    <Col
                      lg={2}
                      md={2}
                      xl={2}
                      sm={12}
                      className="d-flex justify-content-center"
                    >
                      {/* <img
                        className="rounded"
                        src={profile}
                        width={100}
                        height={100}
                      /> */}

                      <img
                        src={`${process.env.REACT_APP_API_BASE_URL}/images/${user[0]?.profile_image}`}
                        width={200}
                        height={100}
                      />
                    </Col>
                    <Col lg={10} md={10} xl={10} sm={12} xs={12}>
                      <Row>
                        <Col>
                          <h4 className="mb-0">
                            <strong>{user[0]?.full_name}</strong>
                          </h4>
                        </Col>
                        <Col className="d-flex justify-content-end">
                          <h4 className="mb-0">
                            <strong>{user[0].email}</strong>
                          </h4>
                        </Col>
                      </Row>
                      {/* <Row className="border-bottom border-dark">
                        <Col className="d-flex justify-content-end">
                          {user[0]?.full_name}
                        </Col>
                      </Row> */}
                      <Row>
                        <Col className="p-4 mt-2 ">
                          <p className="mb-0">
                            <strong style={{ color: "red" }}>Phone:</strong>
                            &nbsp;
                            {user[0]?.primary_contact}
                          </p>
                          <p className="mb-0">
                            <strong style={{ color: "red" }}>
                              Current Address:
                            </strong>
                            &nbsp;
                            {user[0]?.current_address}
                          </p>
                          <p className="mb-0">
                            <strong style={{ color: "red" }}>
                              Parmanent Name:
                            </strong>
                            &nbsp; {user[0]?.current_address}
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        ""
      )}
      <div className="table-responsive">
        <Card>
          <Card.Title>
            <div className="d-flex pt-5 ps-5 pe-5 text-center align-item-center justify-content-between">
              <h3>{`Applied Resumes by ${user[0]?.full_name}`}</h3>
            </div>
          </Card.Title>
          <Card.Body>
            <div className="table-responsive">
              <datatable.DataTablesResume
                handleShow={handleShow}
                resume={resume}
              />
            </div>
          </Card.Body>
        </Card>
      </div>
      <SimpleModal img={img} open={open} handleClose={handleClose} />
      {/* <EditProfileModal profile="profile" role={sessionStorage.getItem("role")} editUser={profileData} open={open} scroll={scroll} handleClose={handleClose} /> */}
      {/* <UserDetailModal/> */}
    </div>
  );
}
