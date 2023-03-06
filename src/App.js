import React, { Component } from "react";

import NavHome from "./components/navBar.component";

import "bootstrap/dist/css/bootstrap.min.css";

import Skills from "./components/skills.component";
import Welcome from "./components/welcome.component";
import Grid from "./components/grid.component";
import Proyecto from "./components/proyectos.component";


class App extends Component {
  render() {
    return (
      <div className="w-100">
          <NavHome />
          <Welcome />
          <Proyecto />
          <Skills />
          <br/>
          <Grid />
          <br/>
      </div>
    );
  }
}

export default App;
