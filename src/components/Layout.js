import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Register from "../views/Register";
import TableUsers from "../views/TableUsers";
import Navbar from "./Navbar";


const Layout = () => {
  

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Register />
        </Route>
        <Route exact path="/table">
            <TableUsers />
        </Route>
        <Route render={() => <h1>Not found</h1>}></Route>
      </Switch>
    </Router>
  );
};

export default Layout;