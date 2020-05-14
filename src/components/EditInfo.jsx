import React from "react";
import axios from "axios";
import { Redirect } from "react-router";

class EditInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "asd",
      email: "",
      redirect: true,
    };
    this.saveInfo = this.saveInfo.bind(this);
  }

  componentDidMount() {
    this.getInfo();
  }

  async getInfo() {
    await axios
      .get("http://localhost:3000/url")
      .then((response) => {
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
        .catch((error) => {
          console.log(error);
        });
      return this.props.history.push("/Updated");
    } catch (error) {
      console.log("This is the error" + error);
    }
  }

  render() {
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
          <li>{this.state.redirect}</li>
        </ul>
      </div>
    );
  }
}

export default EditInfo;
