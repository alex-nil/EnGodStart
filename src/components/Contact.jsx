import React from "react";
import propTypes from "prop-types";

class Contact extends React.Component {
  render() {
    return (
      <div className="mx-auto">
        <div style={{ border: "1px solid black" }}>
          <h1>{this.props.header}</h1>
          <h5>{this.props.desc}</h5>
          <label>Email:</label>
          <input type="text" />
          <hr />
          <textarea></textarea>
          <button className="btn btn-primary">Skicka</button>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  header: propTypes.string,
  desc: propTypes.string,
};

export default Contact;
