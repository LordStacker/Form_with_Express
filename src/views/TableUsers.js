import React from "react";
import { useEffect, useState } from "react";
import "../styles/table.css";

const TableUsers = () => {
  //Variable que sostiene el array de usuarios// variable that holds the array of users
  const [existing, setExisting] = useState([]);

  useEffect(() => {
    ReadData();
  }, []);
//Lectura de backend usuarios/reading method for users in backend
  const ReadData = () => {
    fetch("http://localhost:3002/users", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => setExisting(data))
      .catch((error) => console.log(error));
    console.log(existing);
  };
  //Testing code/codigo de testing.
  /*<table>
              {existing.map((x) => (
                <tr key={x}>
                  {Object.values(x).map((val) => (
                    <td>{val}</td>
                  ))}
                </tr>
              ))}
            </table>*/
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h1>Table</h1>
          <div>
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Names</th>
                  <th scope="col">Age</th>
                  <th scope="col">Birth</th>
                </tr>
              </thead>
              <tbody>
              {existing.map((x) => (
                <tr key={x}>
                  {Object.values(x).map((val) => (
                    <td>{val}</td>
                  ))}
                </tr>
              ))}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableUsers;
