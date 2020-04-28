import ReactDOM from "react-dom";
import React from "react";

import Menu from "./menu.jsx";
import Login from "./loginForm.jsx";
import KeyBadge from "./keyBadge.jsx";
import Header from "./header.jsx";
import Keys from "./keys.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "username",
      password: "password",
      isLoggedIn: false,
      errorMsg: "",
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    if (
      e.username === this.state.username &&
      e.password === this.state.password
    ) {
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ errorMsg: "Wrong input" });
    }
    console.log(this.state.errorMsg);
  }

  loginForm() {
    if (this.state.isLoggedIn == true) {
      return <KeyBadge username={this.state.username} />;
    } else {
      return <Login onClick={this.onClick} errorMsg={this.state.errorMsg} />;
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Keys />
        {this.loginForm()}
      </div>
    );
  }
}

export default App;
