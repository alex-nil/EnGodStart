import React from "react";
import axios from "axios";
import propTypes, { string } from "prop-types";

class Updated extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
    };
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
  render() {
    return (
      <div>
        <h1>Uppdaterat!</h1>
        <h2>Namn: {this.state.username}</h2>
        <h2>Email:{this.state.email}</h2>
      </div>
    );
  }
}

Updated.propTypes = {
  username: propTypes.string,
  email: propTypes.string,
};

export default Updated;
