import React, { Component } from "react";

import idea from "../components/imagenes/solucion.png";
import lenguajes from "../components/imagenes/lenguajes.png";
import back from "../components/imagenes/back.png";
import gaming from "../components/imagenes/gaming.png";

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
                    a nuevas tecnologias que van surgiendo a través del tiempo, permitiendome el perfeccionarme cada dia un poco más.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
            <div className="card border-0">
                <div className="text-center">
                <img src={back} className="card-img-top" alt="..." />
                </div>
                
                <div className="card-body">
                  <p className="card-text">
                    Mayormente orientado al area de Backend, con conocimientos basicos de 
                    creación de Base de datos y normalización. Tanto en SQL y NoSQL. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col">
              <div className="card border-0">
                <div className="text-center">
                <img src={gaming} className="card-img-top" alt="..." />
                </div>
                
                <div className="card-body">
                  <p className="card-text">
                    Experiencia en el desarrollo y prohramación de videojuegos con Unity3D (C#).
                    En generos de tower defense y space shooter.
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
                    a nuevas tecnologias que van surgiendo a través del tiempo, permitiendome el perfeccionarme cada dia un poco más.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
            <div className="card border-0">
                <div className="text-center">
                <img src={back} className="card-img-top" alt="..." />
                </div>
                
                <div className="card-body">
                  <p className="card-text">
                    Mayormente orientado al area de Backend, con conocimientos basicos de 
                    creación de Base de datos y normalización. Tanto en SQL y NoSQL. 
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
