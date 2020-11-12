import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "assets/css/light-bootstrap-dashboard-pro-react.min.css";
import "assets/css/style.css";
import "assets/css/pe-icon-7-stroke.css";
import "assets/css/global.css";

import AuthLayout from "layouts/Auth.jsx";
import AdminLayout from "layouts/Admin.jsx";
import MapLayout from "layouts/Map.jsx";


ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/map" render={props => <MapLayout {...props} />} />
      <Redirect from="/" to="/Auth/Login" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
