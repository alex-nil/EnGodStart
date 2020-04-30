import React from "react";

import Menu from "./menu.jsx";
import Login from "./loginForm.jsx";
import KeyBadge from "./keyBadge.jsx";
import Keys from "./keys.jsx";
import Footer from "./footer.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "username",
      password: "password",
      isLoggedIn: localStorage.getItem("isLoggedIn"),
      errorMsg: "",
      keys: [],
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    if (
      e.username === this.state.username &&
      e.password === this.state.password
    ) {
      window.localStorage.setItem("isLoggedIn", true);
      this.setState({ isLoggedIn: localStorage.getItem("isLoggedIn") });
    } else {
      this.setState({ errorMsg: "Wrong input" });
    }
    console.log(this.state.errorMsg);
  }
  onLogout() {
    this.setState({ isLoggedIn: false });
  }
  loginForm() {
    if (this.state.isLoggedIn === "true") {
      return <KeyBadge keys={this.state.keys} username={this.state.username} />;
    } else {
      return <Login onClick={this.onClick} errorMsg={this.state.errorMsg} />;
    }
  }
  onAddKey = (item) => {
    console.log(item);
    this.state.keys.push(item);
    const myList = this.state.keys;
    this.setState({ keys: myList });
  };
  conditionMenu() {
    if (this.state.isLoggedIn === "true") {
      return <Keys onClick={this.onAddKey} />;
    } else {
      console.log("does'nt work");
    }
  }

  render() {
    return (
      <div className="row">
        <Menu />
        {this.conditionMenu()}

        {this.loginForm()}
        <Footer />
      </div>
    );
  }
}

export default App;
