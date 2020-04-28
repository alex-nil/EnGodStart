import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark">
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
        </ul>
      </nav>
    );
  }
}

export default Menu;
