import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import differenceBy from "lodash/differenceBy";
import { tableDataItems } from "./datatables";
import {
  Button,
  Dropdown,
  DropdownButton,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import moment from "moment";
import "react-data-table-component-extensions/dist/index.css";
import { Link, NavLink } from "react-router-dom";
import { borderRadius } from "@mui/system";
import parse from "html-react-parser";
import { color } from "echarts";

export const DataTablesForCategory = ({ handleShow, Category }) => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [data, setData] = React.useState(tableDataItems);

  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const columns = [
    {
      name: "NAME",
      cell: (row) => (
        <>
          <p>{row.name}</p>
        </>
      ),
      sortable: true,
    },
    {
      name: "ACTION",
      selector: (row) => [row.action],
      sortable: true,
      cell: (row) => (
        <span className="">
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            {/* <Link
              onClick={handleClickOpen("paper", row)}
              className="btn btn-primary btn-sm rounded-11 me-2"
            > */}
            <NavLink
              to={`/update-category/${row._id}`}
              className="btn btn-primary btn-sm rounded-11 me-2"
            >
              <i>
                <svg
                  className="table-edit"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
                </svg>
              </i>
            </NavLink>
            {/* </Link> */}
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Link
              onClick={() => handleShow(row?._id)}
              to="#"
              className="btn btn-danger btn-sm rounded-11"
            >
              <i>
                <svg
                  className="table-delete"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
                </svg>
              </i>
            </Link>
          </OverlayTrigger>
        </span>
      ),
    },
  ];

  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r) => r.SNO
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, "SNO"));
      }
    };

    return (
      <Button key="delete" onClick={handleDelete} icon="true">
        Delete
      </Button>
    );
  }, [data, selectedRows, toggleCleared]);
  const tableDatas = {
    columns,
    data,
  };

  return (
    // <DataTableExtensions {...tableDatas}>
    <DataTable
      title
      columns={columns}
      data={Category}
      selectableRows
      contextActions={contextActions}
      onSelectedRowsChange={handleRowSelected}
      clearSelectedRows={toggleCleared}
      pagination
    />
    // </DataTableExtensions>
  );
};
export const DataTablesForCategoryImage = ({ handleShow, CategoryImage }) => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [data, setData] = React.useState(tableDataItems);

  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const columns = [
    {
      name: "Title",
      cell: (row) => (
        <>
          <p>{row.title}</p>
        </>
      ),
      sortable: true,
    },
    {
      name: "ACTION",
      selector: (row) => [row.action],
      sortable: true,
      cell: (row) => (
        <span className="">
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            {/* <Link
              onClick={handleClickOpen("paper", row)}
              className="btn btn-primary btn-sm rounded-11 me-2"
            > */}
            <NavLink
              to={`/update-category/${row._id}`}
              className="btn btn-primary btn-sm rounded-11 me-2"
            >
              <i>
                <svg
                  className="table-edit"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
                </svg>
              </i>
            </NavLink>
            {/* </Link> */}
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Link
              onClick={() => handleShow(row?._id)}
              to="#"
              className="btn btn-danger btn-sm rounded-11"
            >
              <i>
                <svg
                  className="table-delete"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
                </svg>
              </i>
            </Link>
          </OverlayTrigger>
        </span>
      ),
    },
  ];

  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r) => r.SNO
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, "SNO"));
      }
    };

    return (
      <Button key="delete" onClick={handleDelete} icon="true">
        Delete
      </Button>
    );
  }, [data, selectedRows, toggleCleared]);
  const tableDatas = {
    columns,
    data,
  };

  return (
    // <DataTableExtensions {...tableDatas}>
    <DataTable
      title
      columns={columns}
      data={CategoryImage}
      selectableRows
      contextActions={contextActions}
      onSelectedRowsChange={handleRowSelected}
      clearSelectedRows={toggleCleared}
      pagination
    />
    // </DataTableExtensions>
  );
};
export const DataTablesForDeleteCategoryList = ({
  handleShow,
  userDeleteAction,
  handleClickOpen,
  status,
  category,
  role,
  hello,
}) => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const columns = [
    {
      name: "Icon",
      cell: (row) => (
        <span>
          <img
            crossorigin="anonymous"
            width={40}
            height={40}
            style={{ borderRadius: "360px" }}
            src={`${process.env.REACT_APP_API_BASE_URL}/images/${
              row?.logo ? row.logo : row?.image && row.image
            }`}
          />
        </span>
      ),
      sortable: true,
    },
    {
      name: "NAME",
      cell: (row) => (
        <>
          {row.parentCount > 0
            ? row.branch.map(() => {
                return <p>&#8722;</p>;
              })
            : ""}
          <p>{row.name}</p>
        </>
      ),
      sortable: true,
    },
    {
      name: "PARENT",
      selector: (row) => [row.parent],
      sortable: true,
    },
    {
      name: "ACTION",
      selector: (row) => [row.action],
      sortable: true,
      cell: (row) => (
        <span className="">
          <OverlayTrigger placement="top" overlay={<Tooltip>Restore</Tooltip>}>
            <Link
              onClick={handleShow(row?._id)}
              to="#"
              className="btn btn-danger btn-sm rounded-11"
            >
              <i>
                <svg
                  className="table-edit"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
                </svg>
              </i>
            </Link>
          </OverlayTrigger>
        </span>
      ),
    },
  ];

  return (
    <DataTable
      title
      columns={columns}
      data={category}
      selectableRows
      onSelectedRowsChange={handleRowSelected}
      clearSelectedRows={toggleCleared}
      pagination
    />
  );
};
export const DataTables = ({ handleOpen, users, handleStatusUpdate, role }) => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);

  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const handleOpenModal = (id) => {
    handleOpen(id);
  };
  const columns = [
    {
      name: "NAME",
      selector: (row) => [row.name],
      sortable: true,
    },
    {
      name: "EMAIL",
      selector: (row) => [row.email],
      sortable: true,
    },
    {
      name: " CONTACT",
      selector: (row) => [row.contact_no],
      sortable: true,
    },
    {
      name: "DATE",
      selector: (row) => [moment(row.created_at).format("MMM Do YY")],
      sortable: true,
    },
    {
      name: "APPROVAL STATUS",
      selector: (row) => [row.approval_status],
      sortable: true,
      cell: (row) => (
        <select
          type="button"
          onChange={(e) =>
            handleStatusUpdate({ ...row, approval_status: e.target.value })
          }
          value={row?.approval_status ? row.approval_status : ""}
          style={{ borderRadius: "12px" }}
        >
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      ),
    },
    {
      name: "ACTION",
      selector: (row) => [row.action],
      sortable: true,
      cell: (row) => (
        <span className="">
          <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
            <NavLink className="btn btn-yellow btn-sm rounded-11 me-2">
              <i
                className="fe fe-user"
                style={{ fontSize: "1.3rem" }}
                aria-hidden="true"
                onClick={() => handleOpenModal(row)}
              ></i>
            </NavLink>
          </OverlayTrigger>
        </span>
      ),
    },
  ];

  const columnsCafe = [
    {
      name: "NAME",
      selector: (row) => [row.name],
      sortable: true,
    },
    {
      name: "EMAIL",
      selector: (row) => [row.email],
      sortable: true,
    },
    {
      name: " CONTACT",
      selector: (row) => [row.contact_no],
      sortable: true,
    },
    {
      name: "CAFE NAME",
      selector: (row) => [row.cafename],
      sortable: true,
    },
    {
      name: "ACTION",
      selector: (row) => [row.action],
      sortable: true,
      cell: (row) => (
        <span className="">
          <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
            <NavLink className="btn btn-yellow btn-sm rounded-11 me-2">
              <i
                className="fe fe-user"
                style={{ fontSize: "1.3rem" }}
                aria-hidden="true"
                onClick={() => handleOpenModal(row)}
              ></i>
            </NavLink>
          </OverlayTrigger>
        </span>
      ),
    },
  ];

  return (
    <DataTable
      title
      columns={role == 4 ? columnsCafe : columns}
      data={users?.users}
      selectableRows
      onSelectedRowsChange={handleRowSelected}
      clearSelectedRows={toggleCleared}
      pagination
    />
  );
};
export const DataTablesForClient = ({ handleOpen, userList }) => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);

  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const handleOpenModal = (id) => {
    handleOpen(id);
  };
  const columns = [
    {
      name: "NAME",
      selector: (row) => [row.full_name],
      sortable: true,
    },
    {
      name: "EMAIL",
      selector: (row) => [row.email],
      sortable: true,
    },
    {
      name: " CONTACT",
      selector: (row) => [row.primary_contact],
      sortable: true,
    },
    {
      name: "ACTION",
      selector: (row) => [row.action],
      sortable: true,
      cell: (row) => (
        <span className="">
          <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
            <NavLink
              className="btn btn-yellow btn-sm rounded-11 me-2"
              to={`/${row.full_name}/profile/${row._id}`}
            >
              <i
                className="fe fe-user"
                style={{ fontSize: "1.3rem" }}
                aria-hidden="true"
              ></i>
            </NavLink>
          </OverlayTrigger>
        </span>
      ),
    },
  ];

  return (
    <DataTable
      title
      columns={columns}
      data={userList}
      selectableRows
      onSelectedRowsChange={handleRowSelected}
      clearSelectedRows={toggleCleared}
      pagination
    />
  );
};
export const DataTablesResume = ({ handleOpen, resume, handleShow }) => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);

  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const handleOpenModal = (id) => {
    handleOpen(id);
  };
  const columns = [
    {
      name: "Module",
      selector: (row) => [row.module],
      sortable: true,
    },
    {
      name: " SubModule",
      selector: (row) => [row.subModule],
      sortable: true,
    },
    {
      name: "ACTION",
      selector: (row) => [row.action],
      sortable: true,
      cell: (row) => (
        <span className="">
          <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
            <NavLink
              className="btn btn-yellow btn-sm rounded-11 me-2"
              to={`${process.env.REACT_APP_API_BASE_URL}/images/${row.resume}`}
            >
              <i
                className="fe fe-eye"
                style={{ fontSize: "1.3rem" }}
                aria-hidden="true"
                // onClick={handleShow(row?.resume)}
              ></i>
            </NavLink>
          </OverlayTrigger>
        </span>
      ),
    },
  ];
  return (
    <DataTable
      title
      columns={columns}
      data={resume}
      selectableRows
      onSelectedRowsChange={handleRowSelected}
      clearSelectedRows={toggleCleared}
      pagination
    />
  );
};
