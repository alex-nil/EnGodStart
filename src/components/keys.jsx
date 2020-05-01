import React from "react";
import "../style/keys.css";
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
        className="table-responsive bg-dark col-sm-2"
        style={{ width: "10%" }}
      >
        <table className="table-borderless">
          <thead style={{ color: "white" }}>
            <tr>
              <th>Tillgängliga nycklar:</th>
              <th>{this.state.keys.length}</th>
            </tr>
          </thead>
          {this.state.keys.map((key, index) => {
            return (
              <tbody key={index.toString()}>
                <tr key={index.toString()}>
                  <td key={index.toString()}>
                    <h5 className="text-light">{key}</h5>
                  </td>
                  <td>
                    <span
                      key={"span" + index.toString()}
                      onClick={() => this.props.onClick(this.state.keys[index])}
                      className="badge badge-success"
                    >
                      Add
                    </span>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}

export default Keys;
