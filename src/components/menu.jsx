import React from "react";
import "../style/menu.css";
class Menu extends React.Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-expand-sm bg-dark col-sm-12">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="link">
              Tillgänliga nycklar
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="link">
              Support
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="link">
              Mitt konto
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="link">
              Logga Ut
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
