import React, { Component } from "react";

import NavHome from "./components/navBar.component";

import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/skills.component";



class App extends Component {
  render() {
    return (
      <div className="w-100">
          <NavHome />
          <br />
          <Skills />
      </div>
    );
  }
}

export default App;
