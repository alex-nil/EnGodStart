import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "username",
      password: "password",
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onClick(data) {}

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h1>{this.state.username}</h1>
            <h1>{this.state.password}</h1>
            <h4 className="card-title">Welcome</h4>
            <p className="card-text">Login to start managing your keys!</p>
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={this.onChange}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={this.onChange}
            />
            <p className="danger">{this.props.errorMsg}</p>
            <button onClick={() => this.props.onClick(this.state)}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
