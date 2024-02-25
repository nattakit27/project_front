import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
 
const EditReservation = () => {
   
  let history = useHistory(); //The useHistory hook gives you access to the history instance that you may use to navigate.
  const { id } = useParams();  //The useParams() hook helps us to access the URL parameters from a current route. 
  
 
  const [user ,setUser] = useState({
      firstname:"",
      lastname:"",
      idcard:"",
      sex:"",
      list:"",
      date:""
  })
 
 
  const { firstname, lastname, idcard, sex, list, date } = user;
 
  const onInputChange = e => {
    setUser({ ...user,[e.target.name]: e.target.value });
  };
 
  useEffect(() => {
    loadUser();
  }, []);
 
   
  const updateReservation = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:8889/reservation/${id}`, user);
    history.push("/");
  };
 
  const loadUser =  () => {
    fetch(`http://localhost:8889/reservation/${id}`,{
            method: "GET",
          })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
        setUser({
                    id: id,
                    update: true,
                    firstname: result.response[0].firstname,
          lastname: result.response[0].lastname,
          idcard: result.response[0].idcard,
          sex: result.response[0].sex,
          list: result.response[0].list,
          date: result.response[0].date,
                });
            })
            .catch((error) => console.log("error", error));
  };
 
  return (
    <div className="container">
     <div className="row mt-4"> 
      <div className="col-sm-5 col-offset-3 mx-auto shadow p-5">
        <h4 className="text-center mb-4">Edit A employee</h4>
       
          <h5 className="text-success">Employee ID : {user.id} </h5>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Name"
              name="firstname"
              value={firstname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Price"
              name="lastname"
              value={lastname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Description"
              name="idcard"
              value={idcard}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Description"
              name="sex"
              value={sex}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Description"
              name="list"
              value={list}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Description"
              name="date"
              value={date}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button onClick={updateEmployee} className="btn btn-secondary btn-block">Update Employee</button>
       
       </div>
      </div> 
    </div>
  );
};
 
export default EditReservation;