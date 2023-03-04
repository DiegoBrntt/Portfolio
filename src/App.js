import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavHome from "./components/navBar.component";

import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/skills.component";



class App extends Component {
  render() {
    return (
      <div className="w-100">
        <Router>
          <NavHome />
          <br />
          <Skills />
        </Router>
      </div>
    );
  }
}

export default App;
