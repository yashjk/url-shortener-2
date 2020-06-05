import React, { Component } from "react";
import Category from "./Category";

class CategoryList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let category_list = this.props.category_list;
    return (
      <div style={{ paddingTop: "1rem" }} className="table_container">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {category_list &&
              category_list.map((category) => (
                <Category
                  key={category.id}
                  category={category}
                  handleResponse={this.props.handleResponse}
                />
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CategoryList;
