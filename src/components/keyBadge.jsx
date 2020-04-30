import React from "react";
import "../style/keyBadge.css";
class KeyBadge extends React.Component {
  render() {
    return (
      <div className="col-sm-9">
        <div id="keyBadge" className="card mx-auto" style={{ width: "30%" }}>
          <img
            className="card-img-top"
            src="../../images/key.jpg"
            alt="Card image"
          />
          <div className="card-body bg-dark">
            <h4 className="card-title text-light">
              Välkommen,
              <span className="text-primary">{this.props.username}</span>
            </h4>
            <p className="card-text text-light" style={{ color: "green" }}>
              Logga in för att lägga till nycklar till din nyckelbricka
            </p>
            <p className="text-light">
              Du har {this.props.keys.length} nyclar i brickan.
            </p>
          </div>
          <ul className="list-group" style={{ backgroundColor: "black" }}>
            {this.props.keys.map((key, index) => {
              return (
                <li key={index.toString()} className="list-group-item">
                  <h5>{key}</h5>
                  <span className="badge badge-danger">Remove</span>
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
