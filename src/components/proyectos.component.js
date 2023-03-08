import React, { Component } from "react";

import C from "../components/imagenes/c.png";
import CS from "../components/imagenes/cs.png";
import JAVA from "../components/imagenes/java.jpg";
import Clojure from "../components/imagenes/Clojure_logo.svg";
import NASM from "../components/imagenes/Netwide_Assembler.svg";

class Proyectos extends Component {
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
        <h1 className="text-center text-decoration-underline bg-light m-0">PROYECTOS</h1>
        
        <div className="card-group bg-light m-0">
          <div className="card m-2 border border-1 border-dark">
            <div className="row text-center">
              <div className="col ">
                <img src={C} className="card-img-top w-50" alt="C" />
              </div>
            </div>

            <div className="card-body text-center bg-dark text-white border-top border-1 border-dark">
              <h5 className="card-title">Compilador PL0</h5>
              <p className="card-text">
                Compilador del lenguaje PL0 desarrollado en C.
              </p>
              <a
                href="https://github.com/DiegoBrntt/Compilador_PL0"
                className="btn btn-primary"
                target="_BLANK" rel="noopener noreferrer"
              >
                REPOSITORIO
              </a>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card m-2 border border-1 border-dark">
            <div className="row text-center">
              <div className="col">
                <img src={CS} className="card-img-top w-50" alt="C" />
              </div>
            </div>
            <div className="card-body text-center border-top border-1 border-dark bg-dark text-white">
              <h5 className="card-title">Defensa del castillo</h5>
              <p className="card-text">
                Videojuego desarrollado en Unity3D (C#) del estilo tower
                defense.
              </p>
              <a
                href="https://github.com/DiegoBrntt/Defende_el_Castillo"
                className="btn btn-primary mx-1"
                target="_BLANK" rel="noopener noreferrer"
              >
                REPOSITORIO
              </a>
              <a
                href="https://drive.google.com/drive/u/0/folders/1vEsoKeiTflHPZAnoAI9la9NxNTyIxlrB"
                className="btn btn-success mx-1"
                target="_BLANK" rel="noopener noreferrer"
              >
                JUEGO
              </a>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card m-2 border border-1 border-dark">
            <div className="row text-center">
              <div className="col">
                <img src={JAVA} className="card-img-top w-50" alt="JAVA" />
              </div>
            </div>

            <div className="card-body text-center border-top bg-dark text-white border-1 border-dark">
              <h5 className="card-title">Control de asaltos bancarios</h5>
              <p className="card-text">
                Proyecto de control policial en entidades bancarias.
                Desarrollado en JAVA utilizando Spring MVC y Hibernate.
              </p>
              <a
                href="https://github.com/DiegoBrntt/Control_Policial_SpringMVC_Hibernate"
                className="btn btn-primary mx-1"
                target="_BLANK" rel="noopener noreferrer"
              >
                REPOSITORIO
              </a>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>

        <div className="accordion" id="accordionProyectos">
            <div className="accordion-item border-0">
              <div
                id="collapseProyectos"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionProyectos"
              >
                <div className="accordion-body bg-light">
                <div className="card-group bg-light">
                  <div className="card m-2 border border-1 border-dark">
                    <div className="row text-center">
                      <div className="col">
                        <img src={C} className="card-img-top w-50" alt="C" />
                      </div>
                    </div>

                    <div className="card-body text-center border-top bg-dark text-white border-1 border-dark">
                      <h5 className="card-title">Estructuras de datos</h5>
                      <p className="card-text">
                        Operaciones CRUD en diferentes estructuras de datos desarrolladas en C.
                        TDA (Lista, Cola, Pila y Vector), Listas ligadas (simple y doble), Listas Circulares (simple y doble), 
                        Árboles.
                      </p>
                      <a
                        href="https://github.com/DiegoBrntt/Estructuras-de-datos"
                        className="btn btn-primary"
                        target="_BLANK" rel="noopener noreferrer"
                      >
                        REPOSITORIO
                      </a>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="card m-2 border border-1 border-dark">
                    <div className="row text-center">
                      <div className="col">
                        <img src={NASM} className="card-img-top m-9" alt="NASM" />
                      </div>
                    </div>
                    <div className="card-body text-center border border-1 border-dark bg-dark text-white">
                      <h5 className="card-title">Ejercicios de NASM</h5>
                      <p className="card-text">
                        Ejercicios básicos resueltos en NASM.
                      </p>
                      <a
                        href="https://github.com/DiegoBrntt/Ejercicios-NASM"
                        className="btn btn-primary"
                        target="_BLANK" rel="noopener noreferrer"
                      >
                        REPOSITORIO
                      </a>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="card m-2 border border-1 border-dark">
                    <div className="row text-center">
                      <div className="col">
                        <img
                          src={Clojure}
                          className="card-img-top w-50"
                          alt="Clojure"
                        />
                      </div>
                    </div>

                    <div className="card-body text-center border-top bg-dark text-white border-1 border-dark">
                      <h5 className="card-title">
                        Interprete de LISP
                      </h5>
                      <p className="card-text">
                        Interprete del Lenguaje LISP desarrollado en Clojure.
                      </p>
                      <a
                        href="https://github.com/DiegoBrntt/Interprete-LISP"
                        className="btn btn-primary mx-1"
                        target="_BLANK" rel="noopener noreferrer"
                      >
                        REPOSITORIO
                      </a>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <h2 className="accordion-header text-center bg-light" id="headingOne">
                <button
                  className="btn btn-lg btn-secondary m-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseProyectos"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                  onClick={this.handleMsg}
                >
                  {this.state.expandido === true ? (
                    <span>
                      Ver menos <i className="bi bi-caret-up"></i>
                    </span>
                  ) : (
                    <span>
                      Ver más <i className="bi bi-caret-down"></i>
                    </span>
                  )}
                </button>
              </h2>
            </div>
          </div>
      </>
    );
  }
}

export default Proyectos;
