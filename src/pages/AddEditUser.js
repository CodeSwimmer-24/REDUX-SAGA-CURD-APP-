import { MDBBtn, MDBInput, MDBValidation } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserStart } from "../redux/action";

const initialState = {
  name: "",
  description: "",
  sourceApp: "",
};

function AddEditUser() {
  const [formValue, setFormValue] = useState(initialState);
  const [editMode, setEditMode] = useState(false);
  const { users } = useSelector((state) => state.data);
  const { name, description, sourceApp } = formValue;
  const history = useHistory();
  const dispatch = useDispatch();
  const {id} = useParams();
  console.log(id)
  useEffect(() => {
    if (users.id) {
      setEditMode(true)
      const singleUser = users.find((item) => item.id === (id));
      setFormValue({ ...singleUser });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && sourceApp) {
      dispatch(createUserStart(formValue));
      toast.success("AssetAdded Successfully");
      setTimeout(() => history.push("/"), 500);
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <MDBValidation
      className="row g-3"
      style={{ marginTop: "100px", textAlign: "center" }}
      noValidate
      onSubmit={handleSubmit}
    >
      <p className="fs-2 fw-bold">{!editMode ? 'Add Asset' : "Update Asset"}</p>
      <div
        style={{
          margin: "0 auto",
          padding: "15px",
          maxWidth: "450px",
          textAlign: "center",
        }}
      >
        {" "}
        <MDBInput
          value={name || ""}
          name="name"
          type="text"
          onChange={onInputChange}
          required
          label="Name"
          validation="Please enter the name"
        />
        <br />
        <MDBInput
          value={description || ""}
          name="description"
          type="text"
          onChange={onInputChange}
          required
          label="Description"
          validation="Please enter the name"
        />
        <br />
        <MDBInput
          value={sourceApp || ""}
          name="sourceApp"
          type="text"
          onChange={onInputChange}
          required
          label="SourceApp"
          validation="Please enter the name"
        />
        <div className="col-12" style={{ marginTop: "20px" }}>
          <MDBBtn style={{ marginRight: "10px" }} type="submit">
            {!editMode ? 'Add':'Update'}
          </MDBBtn>
          <MDBBtn onClick={() => history.push("/")} color="danger">
            Go Back
          </MDBBtn>
        </div>
      </div>
    </MDBValidation>
  );
}

export default AddEditUser;
