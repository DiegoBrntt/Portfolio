import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center text-decoration-underline">SKILLS</h1>
        <br />
        <br />
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button bg-dark text-white text-align-middle"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <i class="bi bi-database mx-1"></i>{" "}
                <span className="fw-bolder">BACKEND</span>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body bg-light">
                <span className="fw-bolder mx-1">Languages: </span> Java (7-11),
                C, C#, C++, Clojure, Javascript, SQL.
                <br />
                <br />
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
                <br />
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
                <br/> .NET, ASP.NET, Entity Framework, Dapper.<br/>{" "}
                
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
                Sequelize, mongoose. <br/>{" "}
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
                SQL Server. <br/>
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
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed bg-dark text-white text-align-middle"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <i class="bi bi-pc-display mx-1"></i>{" "}
                <span className="fw-bolder">MORE</span>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body bg-light">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
