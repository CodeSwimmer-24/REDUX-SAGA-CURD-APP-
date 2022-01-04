import {
  MDBBtn,
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBTooltip,
} from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadUserStart } from "../redux/action";

function Home() {
  const { users } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUserStart());
  }, []);

  const handleDelete = (id) => {
    console.log("delete btn");
  };
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
          users.map((items, index) => (
            <MDBTableBody key={index}>
              <tr>
                <th scope="row">{index + 1}</th>
                <td scope="row">{items.name}</td>
                <td scope="row">{items.description}</td>
                <td scope="row">{items.sourceApp}</td>
                <td>
                  <MDBBtn
                    className="m-1"
                    tag="a"
                    color="none"
                    onClick={() => handleDelete(items.id)}
                  >
                    <MDBTooltip title="Delete" tag="a">
                      <MDBIcon
                        fas
                        icon="trash"
                        style={{ color: "#dd4b39" }}
                        size="lg"
                      />
                    </MDBTooltip>
                    <Link to={`/editUser/${items.id}`}>
                      <MDBTooltip title="Edit" tag="a">
                        <MDBIcon
                          fas
                          icon="pen"
                          style={{ color: "#000", marginLeft:"20px" }}
                          size="lg"
                        />
                      </MDBTooltip>
                    </Link>
                    <Link to={`/userInfo/${items.id}`}>
                      <MDBTooltip title="view" tag="a">
                        <MDBIcon
                          fas
                          icon="eye"
                          style={{ color: "#55acee", marginLeft:"20px" }}
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
