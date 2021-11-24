import { useEffect, useState } from "react";
import "./App.css";
import Register from "./components/Register";
import TableUsers from "./components/TableUsers";


function App() {
  
  return (
    <div className="App">
      <Register />
      <TableUsers/>
    </div>
  );
}

export default App;
