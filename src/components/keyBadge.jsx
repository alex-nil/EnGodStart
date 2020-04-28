import React from "react";

class KeyBadge extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="card" style={{ width: "400px" }}>
          <img
            className="card-img-top"
            src="../../images/key.jpg"
            alt="Card image"
          />
          <div className="card-body" style={{ backgroundColor: "darkgray" }}>
            <h4 className="card-title">{this.props.username}</h4>
            <p className="card-text" style={{ color: "green" }}>
              Some example text.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default KeyBadge;
