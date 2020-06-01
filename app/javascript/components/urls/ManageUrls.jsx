import React, { Component } from "react";
import ListUrl from "./ListUrl";

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
  render() {
    return (
      <div className="container">
        <ListUrl url_list={this.state.url_list} />
      </div>
    );
  }
}

export default ManageUrls;
