import React, { Component } from "react"
import "./EmployeeList.css";

class EmployeeList extends Component {
  render() {
    return (
      <article className="employees">
        <h3>EMPLOYEE LIST</h3>
        {
          this.props.employees.map(employee =>
            <div className="employees" key={employee.id}>{employee.name}</div>
          )
        }
      </article>
    );
  }
}

export default EmployeeList