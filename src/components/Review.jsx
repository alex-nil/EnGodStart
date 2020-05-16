import React from "react";
import propTypes from "prop-types";
class Review extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>
        <p>{this.props.desc}</p>
        <hr />
        <label>Namn</label>
        <input type="text" />
        <textarea></textarea>
      </div>
    );
  }
}
Review.propTypes = {
  header: propTypes.string,
  desc: propTypes.string,
};

export default Review;
