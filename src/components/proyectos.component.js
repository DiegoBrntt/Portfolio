import React, { Component } from "react";

import C from "../components/imagenes/c.png"
import CS from "../components/imagenes/cs.png"
import JAVA from "../components/imagenes/java.jpg"

class Proyectos extends Component {
  render() {
    return (
      <>
        <h3 className="text-center text-decoration-underline">PROYECTOS</h3>
        <br/>
        <div className="card-group">
          <div className="card">
            <div className="row text-center">
              <div className="col">
              <img src={C} className="card-img-top w-50" alt="C" />
              </div>
            </div>
            
            <div className="card-body text-center">
              <h5 className="card-title">Compilador PL0</h5>
              <p className="card-text">
                Compilador del lenguaje PL0 desarrollado en C.
              </p>
              <a href="https://github.com/DiegoBrntt/Compilador_PL0" className="btn btn-primary">REPOSITORIO</a>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
          <div className="row text-center">
              <div className="col">
              <img src={CS} className="card-img-top w-50" alt="C" />
              </div>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">Defensa del castillo</h5>
              <p className="card-text">
                Videojuego desarrollado en Unity3D (C#) del estilo tower defense.
              </p>
              <a href="https://github.com/DiegoBrntt/Defende_el_Castillo" className="btn btn-primary mx-1">REPOSITORIO</a>
                <a href="https://drive.google.com/drive/u/0/folders/1vEsoKeiTflHPZAnoAI9la9NxNTyIxlrB" className="btn btn-success mx-1">JUEGO</a>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
          <div className="row text-center">
              <div className="col">
              <img src={JAVA} className="card-img-top w-50" alt="JAVA" />
              </div>
            </div>
            
            <div className="card-body text-center">
              <h5 className="card-title">Control de asaltos bancarios</h5>
              <p className="card-text">
                Proyecto de control policial en entidades bancarias. Desarrollado 
                en JAVA utilizando Spring MVC y Hibernate.
              </p>
              <a href="https://github.com/DiegoBrntt/Control_Policial_SpringMVC_Hibernate" className="btn btn-primary mx-1">REPOSITORIO</a>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Proyectos;
