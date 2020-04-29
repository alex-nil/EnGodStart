import React from "react";

class Keys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: ["Home", "Work", "Car"],
    };
  }

  render() {
    return (
      <div
        className="bg-dark col-sm-3"
        style={{ height: "45em", width: "15%" }}
      >
        <ul syle={{ liststyle: "none" }}>
          {this.state.keys.map((key, index) => {
            return (
              <div
                key={index.toString()}
                className="border-bottom border-secondary row bg-dark text-light"
              >
                <li className="d-flex" key={index.toString()}>
                  <h5>{key}</h5>
                </li>
                <span
                  key={"span" + index.toString()}
                  onClick={() => this.props.onClick(this.state.keys[index])}
                  className="badge badge-success"
                >
                  Add
                </span>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Keys;
