import React, { Component } from "react";

import titulo from "./imagenes/titulo.png"

class Footer extends Component {
  state = {
    links: false,
    contacto: false,
  }

  handlingLinks = async () => {
    this.setState({links: this.state.links ? false : true,
                   contacto: false})
  }
  handlingContacto = async () => {
    this.setState({contacto: this.state.contacto ? false : true,
                   links: false})  }
  render() {
    return (
      <footer className="navbar navbar-expand navbar-dark bg-dark text-white h-100">
        <div className="accordion w-100 text-center" id="footer">
          <div className="accordion-item bg-dark border-0">
            
            <div className="accordion-header text-white col">
            <img src={titulo} alt="logo" className="w-25"></img>
            PORTFOLIO desarrollado por Diego B. <br/>
            <div className="mb-2">
            Diseñado para mostrar un poco de mis habilidades, <br/>
            ponerlas en práctica e ir perfeccionando con el tiempo.
            </div>
            
            </div>
          </div>
          <div className="accordion-item bg-dark border-0">
            <h2 className="accordion-header">
              <button
                className="btn btn-dark w-100 bg-dark text-white fs-2"
                type="button"
                onClick={this.handlingLinks}
                data-bs-toggle="collapse"
                data-bs-target="#links"
                aria-expanded="true"
                aria-controls="links"
              >
                Links
                {!this.state.links ?
                  <i class="bi bi-arrow-down-short mx-2"></i> :
                  <i class="bi bi-arrow-up-short mx-2"></i>
                }
                
              </button>
            </h2>
            <div
              id="links"
              className="accordion-collapse collapse"
              data-bs-parent="#footer"
            >
              <div className="accordion-body">
                <a
                  target="_BLANK"
                  rel="noopener noreferrer"
                  href="https://github.com/DiegoBrntt"
                  className="text-white mx-3 fs-4"
                >
                  <i class="bi bi-github mx-1"></i> GitHub
                </a>
                <a
                  target="_BLANK"
                  rel="noopener noreferrer"
                  href="https://gitlab.com/diego.brntt12"
                  className="text-white mx-3 fs-4"
                >
                  <i class="fa-brands fa-square-gitlab mx-2"></i>GitLab
                </a>
              </div>
            </div>
          </div>
          <div className="accordion-item bg-dark border-0">
            <h2 className="accordion-header text-center">
              <button
                className="btn w-100 btn-dark bg-dark text-white fs-2"
                type="button"
                onClick={this.handlingContacto}
                data-bs-toggle="collapse"
                data-bs-target="#contacto"
                aria-expanded="false"
                aria-controls="contacto"
              >
                Contacto
                {!this.state.contacto ?
                  <i class="bi bi-arrow-down-short mx-2"></i> :
                  <i class="bi bi-arrow-up-short mx-2"></i>
                }
              </button>
            </h2>
            <div
              id="contacto"
              className="accordion-collapse collapse"
              data-bs-parent="#footer"
            >
              <div className="accordion-body bg-dark text-white fs-4">
                <a
                  target="_BLANK"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/diego-brunetti-1a5b6a211/"
                  className="text-white"
                >
                  <i className="bi bi-linkedin mx-2"></i>
                </a>
                <i className="bi bi-envelope mx-2"></i> diego.brntt12@gmail.com
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
