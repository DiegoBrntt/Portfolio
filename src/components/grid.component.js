import React, { Component } from "react";

import idea from "../components/imagenes/solucion.png";
import lenguajes from "../components/imagenes/lenguajes.png";

class Grid extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <div className="card border-0">
                <div className="text-center">
                <img src={idea} className="card-img-top w-50 my-2" alt="..." />
                </div>
                
                <div className="card-body">
                  <p className="card-text">
                    Enfocado en soluciones simples para problemas complejos. Diviendo 
                    en simples tareas para llevar a cabo un rendimiento eficiente.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
            <div className="card border-0">
                <div className="text-center">
                <img src={lenguajes} className="card-img-top" alt="..." />
                </div>
                
                <div className="card-body">
                  <p className="card-text">
                    Un conocimiento avanzado de los paradigmas de la programación me facilitan la adaptación 
                    a nuevas tecnologias que van surgiendo atraves del tiempo, permitiendome el perfeccionarme cada dia un poco más.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
            <div className="card">
                <div className="text-center">
                <img src={idea} className="card-img-top w-50 my-2" alt="..." />
                </div>
                
                <div className="card-body">
                  <p className="card-text">
                    Enfocado en soluciones simples para problemas complejos. Diviendo 
                    en simples tareas para llevar a cabo un rendimiento eficiente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Grid;
