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
    this.onLogin = this.onLogin.bind(this);
  }
  onLogin(e) {
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
  onLogout = () => {
    this.setState({ isLoggedIn: "false" });
    localStorage.setItem("isLoggedIn", false);
  };
  loginForm() {
    if (this.state.isLoggedIn === "true") {
      return (
        <KeyBadge
          onRemoveKey={this.onRemoveKey}
          keys={this.state.keys}
          username={this.state.username}
        />
      );
    } else {
      return <Login onClick={this.onLogin} errorMsg={this.state.errorMsg} />;
    }
  }
  onAddKey = (item) => {
    if (this.state.keys.includes(item)) {
      console.log("Allready appended that key");
    } else {
      this.state.keys.push(item);
    }

    const myList = this.state.keys;
    this.setState({ keys: myList });
  };
  onRemoveKey = (item) => {
    const array = this.state.keys;
    const index = array.indexOf(item);
    array.splice(index, 1);
    this.setState({ keys: this.state.keys });
    console.log(item);
  };
  conditionMenu() {
    if (this.state.isLoggedIn === "true") {
      return <Keys onClick={this.onAddKey} />;
    }
  }

  render() {
    return (
      <div className="row">
        <Menu isLoggedIn={this.state.isLoggedIn} onLogout={this.onLogout} />
        {this.conditionMenu()}

        {this.loginForm()}
        <Footer />
      </div>
    );
  }
}

export default App;
