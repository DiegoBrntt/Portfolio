import React, { Component } from "react";

import laptop from "../components/imagenes/imagen.png";
import surf from "../components/imagenes/imagen2.png";
import porta from "../components/imagenes/imagen3.png";
import titulo from "../components/imagenes/titulo.png";

class Welcome extends Component {
  render() {
    return (
      <>
        <div className="text-center">
          <img src={titulo} className="w-25" alt="titulo" />
        </div>
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
              className="active"
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
              <img src={laptop} className="d-block w-100 h-50" alt="laptop" />
            </div>
            <div className="carousel-item">
              <img src={surf} className="d-block w-100  h-50" alt="surf" />
            </div>
            <div className="carousel-item">
              <div className="row bg-primary">
                <img src={porta} className="d-block w-100 h-50" alt="portafolio" />
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
