import React from "react";
import propTypes from "prop-types";
class Support extends React.Component {
  constructor() {
    super();
    this.info = {
      header: "Support",
      desc: "Kontakta oss vid behov av support!",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.info.header}</h1>
        <p>{this.info.desc}</p>
      </div>
    );
  }
}

Support.propTypes = {
  header: propTypes.number,
  desc: propTypes.number,
};
export default Support;
