import React, { Component } from "react";

import laptop from "../components/imagenes/imagen.png";
import surf from "../components/imagenes/imagen2.png";
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
                  <img src={laptop} className="d-block w-100" alt="laptop" />
            </div>
            <div className="carousel-item">
                  <img src={surf} className="d-block w-100" alt="surf" />
            </div>
            <div className="carousel-item">
            <div className="row bg-primary">
                <div className="col text-center">
                  <img src={porta} className="w-100" alt="portafolio" />
                </div>
                <div className="col position-relative">
                    <p className="h5 position-absolute top-50 start-50 translate-middle">
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
