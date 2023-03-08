import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center text-decoration-underline m-0 p-2">HABILIDADES</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button bg-dark text-white text-align-middle"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <i class="bi bi-database mx-1"></i>{" "}
                <span className="fw-bolder">BACKEND</span>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body bg-light">
              <span className="fw-bolder text-decoration-underline">
                  Programming Paradigms{" "}
                  <span className="mx-2">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  </span>
                </span> 
                <br /> 
                Structured, Object Oriented Programming, and Functional Programming.
                <hr />
                <span className="fw-bolder text-decoration-underline">
                  JAVA 
                  <span className="mx-2">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star"></i>
                  </span>
                  
                </span>{" "}
                <br /> 
                Spring Boot, Spring MVC, Hibernate.
                <hr />
                <span className="fw-bolder text-decoration-underline">
                  C#
                  <span className="mx-2">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star"></i>
                  </span>
                </span>
                <br/> .NET, ASP.NET, Entity Framework, Dapper, Unity3D.<hr/>{" "}
                <span className="fw-bolder text-decoration-underline">
                  C/C++{" "}
                  <span className="mx-2">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star"></i>
                  </span>
                </span>
                <br/> Files, Data Structures, Algorithms.{" "}
                <hr />
                <span className="fw-bolder text-decoration-underline">
                  Clojure{" "}
                  <span className="mx-2">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star"></i>
                  </span>
                </span> 
                <br/> Tadam.{" "}
                <hr />
                <span className="fw-bolder text-decoration-underline">
                  Javascript
                  <span className="mx-2">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  </span>
                </span> <br/> Node, Express,
                Sequelize, mongoose. <hr/>{" "}
                <span className="fw-bolder text-decoration-underline">
                  DB
                  <span className="mx-2">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  </span>
                </span>
                <br/> MongoDB, MySQL, SQLite,
                SQL Server. <hr/>
                <span className="fw-bolder text-decoration-underline">
                  NASM{" "}
                  <span className="mx-2">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  </span>
                </span> 
                <br />
                
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed bg-dark text-white text-align-middle"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <i class="bi bi-laptop mx-1"></i>{" "}
                <span className="fw-bolder">FRONTEND</span>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body bg-light">
              <span className="fw-bolder text-decoration-underline">
                  JSP - Thymeleaf (Java){" "}
                  <span className="mx-2">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  </span>
                  <br />
                  Razor (C#){" "}
                  <span className="mx-2">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  </span>
                  <br />
                  React{" "}
                  <span className="mx-2">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  </span>
                  <br/>
                  Javascript{" "}
                  <span className="mx-2">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  </span>
                  <br/>
                  CSS{" "}
                  <span className="mx-2">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  </span><br/>
                  HTML{" "}
                  <span className="mx-2">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  </span>
                  <br/>
              </span> 
              
              </div>
            </div>
          </div>
          
        </div>
        <br/>
      </div>
    );
  }
}

export default Skills;
