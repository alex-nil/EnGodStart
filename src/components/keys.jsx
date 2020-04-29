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
        className="col-sm-2 bg-dark d-inline-flex"
        style={{ height: "1200px" }}
      >
        <ul className="list-group">
          {this.state.keys.map((key, index) => {
            return (
              <li key={index.toString()} className="list-group-item">
                {key}
                <i
                  onClick={() => this.props.onClick(this.state.keys[index])}
                  className="fas fa-plus"
                ></i>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Keys;
