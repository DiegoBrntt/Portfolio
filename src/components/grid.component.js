import React, { Component } from "react";

import idea from "../components/imagenes/solucion.png";
import lenguajes from "../components/imagenes/lenguajes.png";
import back from "../components/imagenes/back.png";
import gaming from "../components/imagenes/gaming.png";
import patrones from "../components/imagenes/patrones.png";
import full from "../components/imagenes/full.png";

class Grid extends Component {
  state = {
    expandir: true,
    expandido: false
  }

  handleMsg = async() => {
    if (this.state.expandir) {
      return this.setState({expandido: true, expandir : false});
    }
    return this.setState({expandido: false, expandir : true});
  }

  render() {
    return (
      <>
        <h1 className="text-center text-decoration-underline bg-light m-0 p-2">UN POCO DE MI</h1>
        <div className="bg-light w-100">
          <div className="row text-center bg-light">
            <div className="col">
              <div className="card border-0 bg-light p-2">
                <div className="text-center">
                  <img
                    src={idea}
                    className="card-img-top w-50 my-2"
                    alt="..."
                  />
                </div>

                <div className="card-body">
                  <p className="card-text">
                    Enfocado en soluciones simples para problemas complejos.
                    Diviendo en simples tareas para llevar a cabo un rendimiento
                    eficiente.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 bg-light">
                <div className="text-center">
                  <img src={patrones} className="card-img-top" alt="..." />
                </div>

                <div className="card-body">
                  <p className="card-text">
                    Buen manejo en diferentes patrones de diseños como Facade,
                    Strategy, MVC, MVVM, Factory. Aplicados junto con principios
                    SOLID y buenas practicas de codificación.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion bg-light" id="accordionGrid">
            <div className="accordion-item border-0">
              <div
                id="collapseGrid"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionGrid"
              >
                <div className="accordion-body bg-light">
                  <div className="row show text-center">
                    <div className="col">
                      <div className="card border-0 bg-light">
                        <div className="text-center">
                          <img src={back} className="card-img-top" alt="back" />
                        </div>

                        <div className="card-body">
                          <p className="card-text">
                            Mayormente orientado al area de Backend, con
                            conocimientos basicos de creación de Base de datos y
                            normalización. Tanto en SQL y NoSQL.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card border-0 bg-light">
                        <div className="text-center">
                          <img
                            src={full}
                            className="card-img-top"
                            alt="gaming"
                          />
                        </div>

                        <div className="card-body">
                          <p className="card-text">
                            Manejo de stacks y frameworks para desarrollo
                            fullstack. Siendo MERN (Mongo, Express, React, Node)
                            y MySQL, Sequelize, Express, React, Node de los
                            cuales tengo experiencia. De facil adaptaciónn a
                            nuevos stacks.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row text-center">
                    <div className="col">
                      <div className="card border-0 bg-light">
                        <div className="text-center">
                          <img
                            src={gaming}
                            className="card-img-top"
                            alt="gaming"
                          />
                        </div>

                        <div className="card-body">
                          <p className="card-text">
                            Experiencia en el desarrollo y programación de
                            videojuegos con Unity3D (C#). En generos de tower
                            defense y space shooter.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card border-0 bg-light">
                        <div className="text-center">
                          <img
                            src={lenguajes}
                            className="card-img-top"
                            alt="..."
                          />
                        </div>

                        <div className="card-body">
                          <p className="card-text">
                            Un conocimiento avanzado de los paradigmas de la
                            programación (estructurada, orientaa a objetos y
                            funcional) me facilitan la adaptación a nuevas
                            tecnologias que van surgiendo a través del tiempo,
                            permitiendome el perfeccionarme cada dia un poco
                            más.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="accordion-header text-center bg-light" id="headingOne">
                <button
                  className="btn btn-lg btn-primary m-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseGrid"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                  onClick={this.handleMsg}
                >
                  {this.state.expandido === true? <span>Ver menos <i className="bi bi-caret-up"></i></span> : <span>Ver más <i className="bi bi-caret-down"></i></span>  } 
                </button>
              </h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Grid;
