import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Register from "./Register";
import TableUsers from "./TableUsers"



const Layout = () => {
  

  return (
    <Router>
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