import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";


function App() {
  const [existing, setExisting] = useState([]);
  
  useEffect(() => {
    ReadData();
  }, []);

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
      console.log(existing)
  };
  return (
    <div className="App">
      <Login />
      <div>
        <h1>Table</h1>
        <div>
          <table>
            {existing.map((x) => (
              <tr key={x}>
                {Object.values(x).map((val) => (
                  <td>{val}</td>
                ))}
                </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
