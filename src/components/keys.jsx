import React from "react";

class Keys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: {
        key1: "Home",
        key2: "Work",
        key3: "Car",
      },
    };
  }
  myKeys() {
    return this.state.keys.map((key) => <li>key</li>);
  }

  render() {
    return (
      <div>
        <ul className="list-group">{this.myKeys}</ul>
      </div>
    );
  }
}

export default Keys;
