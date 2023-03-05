import React, { Component } from "react";

import NavHome from "./components/navBar.component";

import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/skills.component";
import Welcome from "./components/welcome.component";



class App extends Component {
  render() {
    return (
      <div className="w-100">
          <NavHome />
          <Welcome />
          
          <br/>
          <Skills />
      </div>
    );
  }
}

export default App;
