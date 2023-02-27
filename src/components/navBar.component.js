
import React, { Component} from "react";
import { Link } from "react-router-dom";

class NavHome extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand mx-2">
          <i class="bi bi-briefcase ml-2"></i>  Portfolio
        </Link>
        <div className="collpase navbar-collapse d-flex">
          <ul className="navbar-nav mr-auto">
            <>
              <li className="navbar-item">
                <Link
                  to="/"
                  className="nav-link"
                >
                  Skills
                </Link>
              </li>
            </>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavHome;
