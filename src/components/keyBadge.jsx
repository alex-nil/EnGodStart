import React from "react";

class KeyBadge extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="card" style={{ width: "20%" }}>
          <img
            className="card-img-top"
            src="../../images/key.jpg"
            alt="Card image"
          />
          <div className="card-body bg-dark">
            <h4 className="card-title">{this.props.username}</h4>
            <p className="card-text text-light" style={{ color: "green" }}>
              Login to add keys to your keychain
            </p>
          </div>
          <ul className="list-group" style={{ backgroundColor: "black" }}>
            {this.props.keys.map((key, index) => {
              return (
                <li key={index.toString()} className="list-group-item">
                  <h5>{key}</h5>
                  <i className="fas fa-ban"></i>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default KeyBadge;
