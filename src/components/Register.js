import React, { useEffect, useState } from "react";
import '../styles/register.css'

const Register = () => {
  const [user, setUser] = useState({
    names: "",
    birth: "",
    age: "",
  });

  const HandleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmitRegister = (e) => {
    e.preventDefault();
    fetch("http://localhost:3002/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        names: user.names,
        birth: user.birth,
        age: user.age,
      }),
    })
      .then((resp) => {
        if (resp.status === 201) {
          alert("Account Created");
          return resp.json();
        } else alert("There was a mistake");
      })
      .catch((error) => {
        console.error("there was an error!!", error);
      });
  };
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  return (
    <div className="container pt-5">
      <div className="bodyshape mx-auto mt-auto">
        <h1>Inserting User Info </h1>
        <form onSubmit={onSubmitRegister}>
          <div className="mx-auto mt-auto">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Complete name"
                  name="names"
                  maxlength="20"
                  required
                  onChange={HandleChange}
                  value={user.names}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mx-auto pt-2">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Birth day"
                  name="birth"
                  min="1950-01-01"
                  max={date}
                  required
                  onChange={HandleChange}
                  value={user.birth}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mx-auto pt-2 pb-2">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Age"
                  min="1"
                  max="99"
                  name="age"
                  required
                  onChange={HandleChange}
                  value={user.age}
                />
              </div>
            </div>
            <input className="mb-2 btn btn-secondary" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
