import React, { Component } from "react";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_list: [],
    };
  }
  componentDidMount() {
    const api = "/api/v1/categories";
    fetch(api)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ category_list: response.category_list });
      });
  }

  handleEdit = (category_id) => {
    const api = `/api/v1/urls/${this.props.url_id}`;
    const url = {
      category_id: category_id,
    };
    fetch(api, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(url),
    })
      .then((response) => this.props.handleResponse(response))
  };

  findCategory = (category_id) => {
    let cat = this.state.category_list.filter(
      (category) => category.id === category_id
    )[0];
    return cat && cat.title;
  };

  render() {
    const { category_list } = this.state;
    const { category_id } = this.props;
    return (
      <div className="dropdown">
        {category_id ? (
          <button
            className="btn btn-link dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {this.findCategory(category_id)}
          </button>
        ) : (
          <button
            className="btn btn-link dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Choose category
          </button>
        )}
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {category_list &&
            category_list.map((category) => {
              return (
                <a
                  style={{ cursor: "pointer", marginLeft: "0.5rem" }}
                  key={category.id}
                  onClick={() => this.handleEdit(category.id)}
                  className="dropdown-item"
                >
                  {category.title}
                </a>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Dropdown;
