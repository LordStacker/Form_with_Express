import React, { useEffect, useState } from "react";

const Login = () => {
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

  return (
    <div className="container">
      <h1>Creating account </h1>
      <form onSubmit={onSubmitRegister}>
        <div className="mx-auto mt-auto">
          <div className="row">
            <div className="col-md-3 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Complete name"
                name="names"
                required
                onChange={HandleChange}
                value={user.names}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mx-auto">
              <input
                type="date"
                className="form-control"
                placeholder="Birth day"
                name="birth"
                required
                onChange={HandleChange}
                value={user.birth}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mx-auto">
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
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;
