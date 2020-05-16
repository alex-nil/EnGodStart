import React, { Fragment } from "react";
import { BrowserRouter, Route, HashRouter } from "react-router-dom";
import Menu from "./menu.jsx";
import Login from "./loginForm.jsx";
import KeyBadge from "./keyBadge.jsx";
import Keys from "./keys.jsx";
import Footer from "./footer.jsx";
import About from "./about.jsx";
import Support from "./support.jsx";
import Account from "./Account.jsx";
import EditInfo from "./EditInfo.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import Updated from "./Updated.jsx";
import Contact from "./Contact.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Alex",
      password: "123",
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
        <Fragment>
          {this.conditionMenu()}
          <KeyBadge
            onRemoveKey={this.onRemoveKey}
            keys={this.state.keys}
            username={this.state.username}
          />
        </Fragment>
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
      <HashRouter>
        <div className="row">
          <Menu isLoggedIn={this.state.isLoggedIn} onLogout={this.onLogout} />

          <ErrorBoundary>
            <Route exact path="/" component={() => this.loginForm()} />
            <Route path="/about" component={About} />
            <Route
              path="/support"
              render={(props) => (
                <Support
                  {...props}
                  header={"Support"}
                  desc={"Här kan du kontakta oss om du behöver hjälp."}
                />
              )}
            />
            <Route path="/account" component={Account} />
            <Route path="/editinfo" component={EditInfo} />
            <Route path="/updated" component={Updated} />
            <Route
              path="/contact"
              render={(props) => (
                <Contact
                  {...props}
                  header={"Kontakta Oss"}
                  desc={"Här kan du kontakta oss om du har frågor"}
                />
              )}
            />
          </ErrorBoundary>
        </div>

        <Footer />
      </HashRouter>
    );
  }
}

export default App;
