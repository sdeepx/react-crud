import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import DataTableExtension from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateUser from "./CreateUser";
import EditUser from "./EditUser";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEModal, setShowEModal] = useState(false);
  const [eValue, setEValue] = useState(null);

  const [users, setUsers] = useState([
    {
      name: "Shubhadeep",
      userName: "shubha",
    },
  ]);

  const addUser = (values) => {
    const newUser = [...users];
    newUser.push(values);
    setUsers(newUser);
  };

  const deleteUser = (value) => {
    const newUsers = [...users];
    const index = newUsers.indexOf(value);
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  const updateUser = (value) => {
    const newUsers = [...users];
    const index = newUsers.indexOf(eValue);
    newUsers[index] = value;
    setUsers(newUsers);
  };

  const columns = [
    {
      name: "Name",
      sortable: true,
      selector: (row) => row.name,
    },

    {
      name: "User Name",
      sortable: true,
      selector: (row) => row.userName,
    },

    {
      name: "Actions",
      sortable: true,
      cell: (value) => (
        <div>
          <button
            className="btn btn-primary"
            onClick={() => {
              setShowEModal(true);
              setEValue(value);
            }}
          >
            Edit User
          </button>
          <button className="btn btn-danger" onClick={() => deleteUser(value)}>
            Delete User
          </button>
        </div>
      ),
    },
  ];

  const tableData = {
    columns,
    data: users,
  };

  return (
    <div className="container p-5 ">
      <div>
        <Button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Create User
        </Button>
      </div>
      <DataTableExtension {...tableData}>
        <DataTable noHeader defaultSortField="id" highlightOnHover />
      </DataTableExtension>

      <CreateUser
        showModal={showModal}
        setShowModal={setShowModal}
        addUser={addUser}
      />

      <EditUser
        showEModal={showEModal}
        user={eValue}
        updateUser={updateUser}
        setShowEModal={setShowEModal}
      />
    </div>
  );
}

export default App;
