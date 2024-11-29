import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ReactApexChart from "react-apexcharts";
import { Breadcrumb, Col, Row, Card } from "react-bootstrap";
import * as dashboard from "../../data/dashboard/dashboard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
// import { Chart } from "react-google-charts";
import API from "../../service/API";
import Spinner from "react-bootstrap/Spinner";
export default function Dashboard() {
  const [month, setMonth] = useState(moment().month() + 1);
  const dispatch = useDispatch();
  const [present, setPresent] = useState(0);
  const [absent, setAbsent] = useState(0);
  const [chartData, setCartData] = useState([]);
  useEffect(() => {
    let values = { month: month };
  }, []);

  const today = moment();

  // const data = [
  //   ["Year", "Present", "Absent"],
  //   ["1st May 2024", 500, 400],
  //   ["2.06.2024", 425, 75],
  //   ["3.06.2024", 987, 0],
  //   ["4.06.2024", 800, 187],
  //   ["4.06.2024", 900, 87],
  //   ["4.06.2024", 600, 87],
  //   ["4.06.2024", 900, 87],
  //   ["4.06.2024", 600, 87],
  //   ["4.06.2024", 400, 87],
  //   ["4.06.2024", 200, 87],
  //   ["4.06.2024", 800, 87],
  // ];

  const options = {
    title: "Monthly Attendence Performance",
    curveType: "function",
    legend: { position: "bottom" },
  };
  return (
    <div>
      <div className="page-header ">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Dashboard
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Row>
        <Col lg={12} md={12} sm={12} xl={12}>
          <Row>
            <Col lg={6} md={12} sm={12} xl={3}>
              <Card className=" overflow-hidden">
                <Card.Body className="card-body">
                  <Row>
                    <div className="col">
                      <h6 className="">Total Departments</h6>
                      <h3 className="mb-2 number-font">
                        <CountUp
                          // end={Departments.length}
                          end="10"
                          separator=","
                          start={0}
                          duration={2.94}
                        />
                      </h3>
                      {/* <p className="text-muted mb-0">
                        <span className="text-primary me-1">
                          <i className="fa fa-chevron-circle-up text-primary me-1"></i>
                          <span>3% </span>
                        </span>
                        last month
                      </p> */}
                    </div>
                    <div className="col col-auto">
                      <div className="counter-icon bg-primary-gradient box-shadow-primary brround ms-auto">
                        <i className="fa fa-building text-white  mb-1"></i>
                      </div>
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
