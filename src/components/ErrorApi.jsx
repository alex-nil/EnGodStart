import React from "react";
import propTypes from "prop-types";

class ErrorApi extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.errorMsg}</h1>
        <a href="http://localhost:8080/app.html#/account">
          {this.props.tryAgain}
        </a>
      </div>
    );
  }
}

ErrorApi.propTypes = {
  errorMsg: propTypes.string,
  tryAgain: propTypes.string,
};

export default ErrorApi;
