import React from "react";

import propTypes, { string } from "prop-types";

class Updated extends React.Component {
  render() {
    return (
      <div>
        <h1>Uppdaterat!</h1>
        <h2>Namn: {this.props.location.state.username}</h2>
        <h2>Email:{this.props.location.state.email}</h2>
      </div>
    );
  }
}

Updated.propTypes = {
  username: propTypes.string,
  email: propTypes.string,
};

export default Updated;
