import React, { Component } from "react";

import laptop from "../components/imagenes/laptop wave.png";
import surf from "../components/imagenes/surfing the net.png";
import porta from "../components/imagenes/going to work happy.png";

class Welcome extends Component {
  render() {
    return (
      <>
        <h1 className="text-center">PORTAFOLIO</h1>
        
        
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <h1 className="text-center bg-primary p-0 m-0 text-decoration-underline">
                ¡Saludos, has llegado a mi página!
              </h1>
              <div className="row bg-primary">
                <div className="col text-center">
                  <img src={laptop} className="w-100" alt="laptop" />
                </div>
                <div className="col position-relative">
                    <p className="h3 position-absolute top-50 start-50 translate-middle">
                      Mi nombre es Diego Brunetti y soy desarrollador web con
                      mejor desempeño dentro del area de backend. Poseo fuertes
                      conocimientos acerca de paradigmas de la programación lo
                      que me permite adaptarme facilmente a nuevas tecnologias
                      para desarrollar una solución en base a los requerimientos
                      del proyecto.
                    </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
            <div className="row bg-success">
                <div className="col position-relative">
                    <p className="h3 text-white position-absolute top-50 start-50 translate-middle">
                      En esta pagina podras conocer acerca de mis habilidades y
                      proyectos. Tambien encontrara informacion acerca de mi formación 
                      academica.
                    </p>
                </div>
                <div className="col text-center">
                  <img src={surf} className="w-100" alt="surf" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
            <div className="row bg-primary">
                <div className="col text-center">
                  <img src={porta} className="w-100" alt="portafolio" />
                </div>
                <div className="col position-relative">
                    <p className="h3 position-absolute top-50 start-50 translate-middle">
                      Podras visitar los repositorios de algunos de mi proyectos para 
                      observar un poco de mis habilidades. Y acceder a algunos otros que ya esten
                      desplegados
                    </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </>
    );
  }
}

export default Welcome;
