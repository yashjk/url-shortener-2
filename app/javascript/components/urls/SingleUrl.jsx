import React, { Component } from "react";
import Pin from "./Pin";

class SingleUrl extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { original, shortened, pinned, category_id } = this.props.url;
    return (
      <tr>
        <th
          className={pinned ? "" : "bi bi-alert-triangle text-success"}
          scope="row"
          style={{ cursor: "pointer" }}
          onClick={() => this.handleClick(id)}
        >
          <Pin />
        </th>
        <td>{original}</td>
        <td>https://short.is/{shortened}</td>
        <td>{category_id}</td>
      </tr>
    );
  }
}

export default SingleUrl;
