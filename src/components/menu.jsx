import React, { Fragment } from "react";
import "../style/menu.css";
class Menu extends React.Component {
  loginButton() {
    if (this.props.isLoggedIn === "true") {
      console.log(this.props.isLoggedIn);
      return (
        <Fragment>
          <li className="nav-item">
            <a className="nav-link" onClick={this.props.onLogout} href="#">
              Logga Ut
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/app.html#/account">
              Konto
            </a>
          </li>
        </Fragment>
      );
    } else {
      return null;
    }
  }
  render() {
    return (
      <nav id="menu" className="navbar navbar-expand-sm bg-dark col-sm-12">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/app.html#/">
              Hantera Nycklar
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/app.html#/support">
              Support
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/app.html#/about">
              Om Oss
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/app.html#/contact">
              Kontakt
            </a>
          </li>
          {this.loginButton()}
        </ul>
      </nav>
    );
  }
}

export default Menu;
