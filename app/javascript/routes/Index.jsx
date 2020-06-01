import React, { Component } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import ManageUrls from "../components/urls/ManageUrls";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={ManageUrls} />
    </Switch>
  </Router>
);
