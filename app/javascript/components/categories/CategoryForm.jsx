import React, { Component } from "react";

class CategoryForm extends Component {
  constructor() {
    super();
    this.state = {
      categoryTitle: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const api = "/api/v1/categories/";
    const category = {
      title: this.state.categoryTitle,
    };
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    }).then((response) => {
      this.props.handleResponse(response);
      this.setState({
        categoryTitle: "",
      });
    });
  };

  render() {
    return (
      <>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Category Title"
              value={this.state.categoryTitle}
              onChange={this.handleChange}
              name="categoryTitle"
            />
          </div>
          <div className="d-flex justify-content-end">
            <button
              type="submit"
              onClick={this.handleSubmit}
              className="btn btn-link justify-content-end"
            >
              Submit
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default CategoryForm;
