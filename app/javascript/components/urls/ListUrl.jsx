import React, { Component } from "react";
import SingleUrl from "./SingleUrl";

class ListUrl extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Pin</th>
            <th scope="col">Original</th>
            <th scope="col">Shortened</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          {this.props.url_list &&
            this.props.url_list.map((url) => {
              return (
                <SingleUrl
                  key={url.id}
                  url={url}
                  handleResponse={this.props.handleResponse}
                />
              );
            })}
        </tbody>
      </table>
    );
  }
}

export default ListUrl;
