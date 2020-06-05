import React, { Component } from "react";
import CategoryForm from "./CategoryForm";
import CategoryList from "./CategoryList";
import { Link } from "react-router-dom";

class ManageCategories extends Component {
  constructor() {
    super();
    this.state = {
      category_list: null,
      errors: [],
    };
  }

  componentDidMount() {
    this.loadCategories();
  }

  loadCategories = () => {
    const url = "/api/v1/categories";
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ category_list: response.category_list, errors: [] });
      });
  };

  handleResponse = (response) => {
    if (response.status == 200) {
      this.loadCategories();
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
        {this.state.errors &&
          this.state.errors.map((error, i) => {
            return (
              <div style={{ paddingTop: "1rem" }} key={i}>
                <div
                  className="alert alert-warning alert-dismissible fade show"
                  role="alert"
                >
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <strong>{error}</strong>
                </div>
              </div>
            );
          })}
        <div className="d-flex justify-content-end">
          <Link className="btn btn-link" to="/">
            Manage Urls
          </Link>
          <Link className="btn btn-link" to="/reports">
            Reports
          </Link>
        </div>
        <h1
          style={{ padding: "2rem" }}
          className="d-flex justify-content-center"
        >
          Category List
        </h1>
        <CategoryForm handleResponse={this.handleResponse} />
        <CategoryList
          category_list={this.state.category_list}
          handleResponse={this.handleResponse}
        />
      </div>
    );
  }
}

export default ManageCategories;
