import React from "react";
import axios from "axios";
import { Redirect } from "react-router";
import propTypes from "prop-types";
import Updated from "./Updated.jsx";

class EditInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      redirect: false,
    };
    this.saveInfo = this.saveInfo.bind(this);
  }

  async componentDidMount() {
    await this.getInfo();
  }

  async getInfo() {
    await axios
      .get("http://localhost:3000/url")
      .then((response) => {
        console.log(response);
        if (response === 200) {
          console.log("YES IT IS");
        }
        this.setState({ username: response.data.username });
        this.setState({ email: response.data.email });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async saveInfo(e) {
    e.preventDefault();
    const body = {
      username: this.state.username,
      email: this.state.email,
    };
    try {
      await axios
        .post("http://localhost:3000/add", body)
        .then(function (response) {
          console.log(response);
        })
        .then(() => this.setState({ redirect: true }))
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/Updated",
            state: { username: this.state.username, email: this.state.email },
          }}
        />
      );
    }
    return (
      <div className="mx-auto">
        <form>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder={this.state.username}
              name="username"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder={this.state.email}
              name="email"
              onChange={this.onChange}
            />
          </div>
          <button onClick={this.saveInfo} className="btn btn-primary">
            Spara
          </button>
        </form>
        <ul>
          <li>{this.state.username}</li>
          <li>{this.state.email}</li>
        </ul>
      </div>
    );
  }
}
EditInfo.propType = {
  username: propTypes.number,
  email: propTypes.string,
};

export default EditInfo;
