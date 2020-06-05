import React, { Component } from "react";
import Pin from "./Pin";
import Dropdown from "./Dropdown";

class SingleUrl extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (id) => {
    const api = `/api/v1/urls/${id}`;
    const url = {
      pinned: !this.props.url.pinned,
    };
    fetch(api, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(url),
    }).then((response) => this.props.handleResponse(response));
  };

  render() {
    const { original, shortened, pinned, category_id, id } = this.props.url;
    const env = process.env.ROOT_URL;
    return (
      <tr>
        <th
          className={pinned ? "bi bi-alert-triangle text-success" : ""}
          scope="row"
          style={{ cursor: "pointer" }}
          onClick={() => this.handleClick(id)}
        >
          <Pin />
        </th>
        <td>
          <a className="btn btn-link" target="_blank" href={original}>
            {original}
          </a>
        </td>
        <td>
          <a className="btn btn-link" target="_blank" href={original}>
            {env}
            {shortened}
          </a>
        </td>
        <td>
          <Dropdown
            category_id={category_id}
            url_id={id}
            handleResponse={this.props.handleResponse}
          />
        </td>
      </tr>
    );
  }
}

export default SingleUrl;
