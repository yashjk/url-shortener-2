import React, { Component } from "react";

class SingleUrl extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { original, shortened, pinned, category_id } = this.props.url;
    return (
      <tr>
        <th scope="row">{pinned ? 1 : 0}</th>
        <td>{original}</td>
        <td>https://short.is/{shortened}</td>
        <td>{category_id}</td>
      </tr>
    );
  }
}

export default SingleUrl;
