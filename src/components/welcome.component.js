import React, { Component } from "react";

import laptop from "../components/imagenes/laptop wave.png";
import surf from "../components/imagenes/surfing the net.png";
import arreglo from "../components/imagenes/control z.png";

class Welcome extends Component {
  render() {
    return (
      <>
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
              <div className="row bg-primary">
                <div className="col text-center">
                  <h1 className="text-decoration-underline">
                    ¡Saludos, has llegado a mi página!
                  </h1>
                  <img src={laptop} className="w-50 text-center" alt="laptop" />
                  
                </div>
                <div className="col text-center">
                  

                </div>
              </div>
            </div>
            <div className="carousel-item">
            <div className="row bg-primary">
                <div className="col text-center">
                  <h1 className="text-decoration-underline">
                    ¡Saludos, has llegado a mi página!
                  </h1>
                  <img src={surf} className="w-50 text-center" alt="surf" />
                  
                </div>
                <div className="col text-center">
                  

                </div>
              </div>
            </div>
            <div className="carousel-item">
            <div className="row bg-primary">
                <div className="col text-center">
                  <h1 className="text-decoration-underline">
                    ¡Saludos, has llegado a mi página!
                  </h1>
                  <img src={arreglo} className="w-50 text-center" alt="arreglo" />
                  
                </div>
                <div className="col text-center">
                  

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
