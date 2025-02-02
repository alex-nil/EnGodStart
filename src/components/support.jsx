import React from "react";
import propTypes from "prop-types";

class Support extends React.Component {
  render() {
    return (
      <div className="mx-auto">
        <h1>{this.props.header}</h1>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

Support.propTypes = {
  header: propTypes.string,
  desc: propTypes.string,
};
export default Support;
