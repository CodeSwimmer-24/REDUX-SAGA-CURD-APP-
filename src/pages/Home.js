import {
  MDBBtn,
  MDBIcon,
  MDBSpinner,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBTooltip,
} from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUserStart, loadUserStart } from "../redux/action";

function Home() {
  const { users, loading } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUserStart());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete the Asset")) {
      dispatch(deleteUserStart(id));
    }
  };

  if (loading) {
    return (
      <MDBSpinner>
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    );
  }

  return (
    <div className="container" style={{ margin: "15px auto" }}>
      <MDBTable>
        <MDBTableHead dark>
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">SourceApp</th>
            <th scope="col">Action</th>
          </tr>
        </MDBTableHead>
        {users &&
          users.map((item, index) => (
            <MDBTableBody key={index}>
              <tr>
                <th scope="row">{index + 1}</th>
                <td scope="row">{item.name}</td>
                <td scope="row">{item.description}</td>
                <td scope="row">{item.sourceApp}</td>
                <td>
                  <MDBBtn
                    className="m-1"
                    tag="a"
                    color="none"
                    onClick={() => handleDelete(item.id)}
                  >
                    <MDBTooltip title="Delete" tag="a">
                      <MDBIcon
                        fas
                        icon="trash"
                        style={{ color: "#dd4b39" }}
                        size="lg"
                      />
                    </MDBTooltip>
                  </MDBBtn>
                  <MDBBtn className="m-1" tag="a" color="none">
                    <Link to={`/editUser/${item.id}`}>
                      <MDBTooltip title="Edit" tag="a">
                        <MDBIcon
                          fas
                          icon="pen"
                          style={{ color: "#000", marginLeft: "20px" }}
                          size="lg"
                        />
                      </MDBTooltip>
                    </Link>
                  </MDBBtn>
                  <MDBBtn
                    className="m-1"
                    tag="a"
                    color="none"
                    onClick={() => handleDelete(item.id)}
                  >
                    <Link to={`/userInfo/${item.id}`}>
                      <MDBTooltip title="view" tag="a">
                        <MDBIcon
                          fas
                          icon="eye"
                          style={{ color: "#55acee", marginLeft: "20px" }}
                          size="lg"
                        />
                      </MDBTooltip>
                    </Link>
                  </MDBBtn>
                </td>
              </tr>
            </MDBTableBody>
          ))}
      </MDBTable>
    </div>
  );
}

export default Home;
