import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    errorMessage: "",
  };

  static getDerivedStateFromError(error) {
    return { errorMessage: error.toString() };
  }

  logErrorToServices = console.log;
  render() {
    if (this.state.errorMessage) {
      return (
        <div>
          <h1>Nånting gick fel, försök igen.</h1>
          <h5>{this.state.errorMessage}</h5>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
