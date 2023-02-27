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
              <tr className="bg-dark text-white">
                <th className="w-33">
                  <i className="bi bi-database fw-bold"></i>
                  <div>Backend</div>
                </th>
                <th className="w-33">
                  <i className="bi bi-laptop fw-bold"></i>
                  <div>Frontend</div>
                </th>
                <th className="w-33">
                  <i className="bi bi-pc-display fw-bold"></i>
                  <div>More</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-33">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <div className="fw-bold text-decoration-underline"> JAVA (7-11) </div>
                      <div>SpringMVC - Spring Boot - Hibernate - Servlets</div>
                      <div className="col border bg-success text-white">Advanced</div>
                    </li>
                    <li className="list-group-item">
                      <div className="fw-bold text-decoration-underline"> C# </div>
                      <div>.NET - ASP.NET - Dapper - Entity FrameWork</div>
                      <div className="col border bg-success text-white">Advanced</div>
                    </li>
                    <li className="list-group-item">
                      <div className="fw-bold text-decoration-underline"> Clojure </div>
                      <div>Tadam</div>
                      <div className="col border bg-success text-white">Advanced</div>
                    </li>
                    <li className="list-group-item">
                      <div className="fw-bold text-decoration-underline"> Javascript </div>
                      <div>Node - Express - Mongo - MySQL - Sequelize</div>
                      <div className="col border bg-success text-white">Advanced</div>
                    </li>
                    <li className="list-group-item">
                      <div className="fw-bold text-decoration-underline"> C </div>
                      <div className="col border bg-success text-white">Advanced</div>
                    </li>
                    <li className="list-group-item">
                      <div className="fw-bold text-decoration-underline"> C++ </div>
                      <div className="col border bg-success text-white">Advanced</div>
                    </li>
                    <li className="list-group-item">
                      <div className="fw-bold text-decoration-underline"> SQL </div>
                      <div>MySQL - SQLite - SQL Server</div>
                      <div className="col border bg-warning">Intermediate</div>
                    </li>
                  </ul>
                </td>
                <td className="w-33">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <div className="fw-bold text-decoration-underline"> JAVA (7-11) </div>
                      <div>JPA - Thymeleaf</div>
                      <div className="col border bg-warning">Intermediate</div>
                    </li>
                    <li className="list-group-item">
                      <div className="fw-bold text-decoration-underline"> Javascript </div>
                      <div>React</div>
                      <div className="col border bg-warning">Intermediate</div>
                    </li>
                    <li className="list-group-item">
                      <div className="fw-bold text-decoration-underline"> CSS </div>
                      <div>Bootstrap</div>
                      <div className="col border bg-warning">Intermediate</div>
                    </li>
                    <li className="list-group-item">
                      <div className="fw-bold text-decoration-underline"> C# (HTMLCS) </div>
                      <div>Razor</div>
                      <div className="col border bg-warning">Intermediate</div>
                    </li>
                    <li className="list-group-item">
                      <div className="fw-bold text-decoration-underline"> HTML </div>
                      <div className="col border bg-warning">Intermediate</div>
                    </li>
                  </ul>
                </td>
                <td className="w-33">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <div className="fw-bold text-decoration-underline"> Programming Paradigms </div>
                      <div>Structured -  Object Oriented - Functional</div>
                      <div className="col border bg-success text-white">Advanced</div>
                    </li>
                    <li className="list-group-item">
                      <div className="fw-bold text-decoration-underline"> Diagrams </div>
                      <div>UML</div>
                      <div className="col border bg-success text-white">Advanced</div>
                    </li>
                    <li className="list-group-item">
                      <div className="fw-bold text-decoration-underline"> Data Structure </div>
                      <div>Linked List (simple - double) - Circle Linked List (simple - double) - Stack - Queue - Trees</div>
                      <div className="col border bg-success text-white">Advanced</div>
                    </li>
                    <li className="list-group-item">
                      <div className="fw-bold text-decoration-underline"> Video game development </div>
                      <div>Unity3D</div>
                      <div className="col border bg-warning">Intermediate</div>
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
