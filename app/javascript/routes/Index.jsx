import React, { Component } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import ManageUrls from "../components/urls/ManageUrls";
import ManageCategories from "../components/categories/ManageCategories";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={ManageUrls} />
      <Route path="/categories" exact component={ManageCategories} />
    </Switch>
  </Router>
);
