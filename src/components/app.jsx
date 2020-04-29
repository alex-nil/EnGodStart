import React from "react";

import Menu from "./menu.jsx";
import Login from "./loginForm.jsx";
import KeyBadge from "./keyBadge.jsx";
import Keys from "./keys.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "username",
      password: "password",
      isLoggedIn: false,
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
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ errorMsg: "Wrong input" });
    }
    console.log(this.state.errorMsg);
  }

  loginForm() {
    if (this.state.isLoggedIn == true) {
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

  render() {
    return (
      <div className="row">
        <Menu />
        <Keys onClick={this.onAddKey} />
        {this.loginForm()}
      </div>
    );
  }
}

export default App;
