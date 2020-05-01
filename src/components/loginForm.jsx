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
      <div className="mx-auto" style={{ height: "400px", padding: "40px" }}>
        <div
          className="card"
          style={{
            padding: "20px",
            margin: "20px",
            width: "400px",
            height: "400px",
            backgroundImage: "url(" + "../../images/lock.jpg" + ")",
            backgroundSize: "contain",
            backgroundSize: "cover",
          }}
        >
          <div className="card-body justify-content-center">
            <h2 className="card-title text-light">Welcome</h2>
            <h4 className="card-text text-light">
              Login to start managing your keys!
            </h4>
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
            <button
              type="button"
              className="button btn-primary"
              onClick={() => this.props.onClick(this.state)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
