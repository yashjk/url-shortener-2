import React, { Component } from "react";
import { Link } from "react-router-dom";

class Reports extends Component {
  constructor() {
    super();
    this.state = {
      counts: null,
    };
  }
  componentDidMount() {
    const api = "/api/v1/counts";
    fetch(api)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          counts: response.counts,
        });
      });
  }
  render() {
    const { counts } = this.state;
    return (
      <div className="container">
        <div className="d-flex justify-content-end">
          <Link className="btn btn-link" to="/">
            Manage Urls
          </Link>
          <Link className="btn btn-link" to="/categories">
            Manage Categories
          </Link>
        </div>
        <h1
          style={{ padding: "1rem" }}
          className="d-flex justify-content-center"
        >
          Reports
        </h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Month</th>
              <th scope="col">Number of clicks</th>
            </tr>
          </thead>
          <tbody>
            {counts &&
              Object.entries(counts).map((report) => {
                return (
                  <tr key={report[0]}>
                    <td>{report[0]}</td>
                    <td>{report[1].length}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Reports;
