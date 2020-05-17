import React from "react";
import axios from "axios";

import ErrorApi from "./ErrorApi.jsx";

class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      errorMsg: "Nånting gick fel.",
      tryAgain: "Försök igen",
      error: false,
    };
  }

  async componentDidMount() {
    this.getUserDetails();
  }
  async getUserDetails() {
    try {
      await axios
        .get("http://localhost:3000/url")
        .then((response) => {
          if (response.status === 200) {
            console.log(response);
            console.log(response.data);
            this.setState({ username: response.data.username });
            this.setState({ email: response.data.email });
          }
        })
        .catch((error) => {
          this.setState({ error: true });
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  }
  renderError = () => {
    if (this.state.error) {
      return (
        <ErrorApi
          errorMsg={this.state.errorMsg}
          tryAgain={this.state.tryAgain}
        />
      );
    }
  };
  render() {
    return (
      <div className="mx-auto" style={{ border: "1px solid black" }}>
        {this.renderError()}
        <h1>Namn: {this.state.username}</h1>
        <h1>Email: {this.state.email}</h1>
        <button className="btn btn-primary">
          <a style={{ color: "white" }} href="/app.html#/editinfo">
            Ändra uppgifter
          </a>
        </button>
      </div>
    );
  }
}

export default Account;
