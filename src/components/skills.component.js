import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center text-decoration-underline">SKILLS</h1>
        <br />
        <br />
        <div className="table-responsive">
          <table className="table table-bordered b-2 text-center">
            <thead>
              <tr>
                <th className="w-33">
                  <i className="bi bi-database fw-bold"></i>
                </th>
                <th className="w-33">
                  <i className="bi bi-database fw-bold"></i>
                </th>
                <th className="w-33">
                  <i className="bi bi-database fw-bold"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-33">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <div className="fw-bold"> - JAVA (7-11) </div>
                      <div>SpringMVC - Spring Boot - Hibernate</div>
                    </li>
                    <li className="list-group-item">
                      <div className="fw-bold"> - Clojure </div>
                      <div>Tadam</div>
                    </li>
                    <li className="list-group-item">
                      <div className="fw-bold"> - Javascript </div>
                      <div>Node, Express, Mongo, MySQL, Sequelize</div>
                    </li>
                  </ul>
                </td>
                <td className="w-33">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <div className="fw-bold"> - JAVA (7-11) </div>
                      <div>FrameWorks: SpringMVC - Spring Boot - Hibernate</div>
                    </li>
                    <li className="list-group-item">
                      - 
                    </li>
                  </ul>
                </td>
                <td className="w-33">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <div className="fw-bold"> - JAVA (7-11) </div>
                      <div>FrameWorks: SpringMVC - Spring Boot - Hibernate</div>
                    </li>
                    <li className="list-group-item">
                      - 
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Skills;
