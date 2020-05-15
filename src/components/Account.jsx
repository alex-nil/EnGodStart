import React from "react";
import axios from "axios";

class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
    };
  }

  componentDidMount() {
    this.getUserDetails();
  }
  async getUserDetails() {
    await axios
      .get("http://localhost:3000/url")
      .then((response) => {
        console.log(response.data);
        this.setState({ username: response.data.username });
        this.setState({ email: response.data.email });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="mx-auto" style={{ border: "1px solid black" }}>
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
