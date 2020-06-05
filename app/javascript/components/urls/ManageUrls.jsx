import React, { Component } from "react";
import ListUrl from "./ListUrl";
import { Link } from "react-router-dom";

class ManageUrls extends Component {
  constructor() {
    super();
    this.state = {
      url_list: null,
    };
  }

  componentDidMount() {
    this.loadUrlList();
  }

  loadUrlList = () => {
    const api = "/api/v1/urls";
    fetch(api)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          url_list: response.url_list,
        });
      });
  };

  handleResponse = (response) => {
    if (response.status == 200) {
      this.loadUrlList();
    } else {
      response.json().then((err) => {
        this.setState({
          errors: err.errors,
        });
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-end">
          <Link className="btn btn-link" to="/categories">
            Manage Categories
          </Link>
        </div>
        <h1
          style={{ padding: "1rem" }}
          className="d-flex justify-content-center"
        >
          Url List
        </h1>
        <ListUrl
          url_list={this.state.url_list}
          handleResponse={this.handleResponse}
        />
      </div>
    );
  }
}

export default ManageUrls;
