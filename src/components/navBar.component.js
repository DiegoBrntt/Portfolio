import React, { Component } from "react";



class NavHome extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark text-white h-100">
          <a href="/" className="nav-link">
            <i class="bi bi-briefcase mx-2"></i> Portfolio
          </a>
        </nav>
    );
  }
}

export default NavHome;
