import React, { Component } from "react";


import titulo from "../components/imagenes/titulo.png";

class Footer extends Component {
  render() {
    return (
      <footer className="navbar navbar-expand navbar-dark bg-dark text-white h-100">
        <div className="row">
          <div className="col row">
          <div className="col text-center">
              <img src={titulo} className="w-50 m-2" alt="titulo" /> <br/>
              Portafolio personal (React).  
              Diego Brunetti.
              
          </div>
          </div>
          <div className="col text-center">
              <span className="fw-bolder">Links</span>
              <br/>
              <a target="_BLANK" rel="noopener noreferrer" href="https://github.com/DiegoBrntt" className="text-white">GitHub</a>
              <br/>
              <a target="_BLANK" rel="noopener noreferrer" href="https://gitlab.com/diego.brntt12" className="text-white">GitLab</a>
          </div>

          <div className="col text-center">
              <span className="fw-bolder">Contactarme</span>
              <br/>
              <a target="_BLANK" rel="noopener noreferrer" href="https://www.linkedin.com/in/diego-brunetti-1a5b6a211/" className="text-white"><i className="bi bi-linkedin mx-2"></i></a>
              
              <i className="bi bi-envelope mx-2"></i> diego.brntt12@gmail.com
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
