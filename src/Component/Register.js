import React from "react";
import axios from "axios";

const api = new axios.create({ baseURL: "http://localhost:5000/" });

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: "",
      email: "",
      pw: "",
      con: "",
      res: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.SaveLogin = this.SaveLogin.bind(this);
  }

  handleChange(event) {
    // console.log(event.target.name);
    let tname = event.target.name;
    if (tname === "pin") {
      this.setState({ pin: event.target.value });
    }
    if (tname === "email") {
      this.setState({ email: event.target.value });
    }
    if (tname === "password") {
      this.setState({ pw: event.target.value });
    }
    if (tname === "confirm") {
      this.setState({ con: event.target.value });
    }
  }

  SaveLogin(event) {
    event.preventDefault(event);
    console.log(this.state);
    api
      .post(
        "/register/" +
          this.state.pin +
          "/" +
          this.state.email +
          "/" +
          this.state.pw +
          "/" +
          this.state.com
      )
      .then((response) => {
        this.setState({ res: response.data });
      });

    console.log(this.state.res);
  }

  render() {
    return (
      <div className="register_background_wrapper">
        <div className="register_box_wrapper">
          <form className="register_from_wrapper">
            <label>Pin:</label>
            <input
              name="pin"
              type="text"
              onChange={this.handleChange}
              maxLength="20"
              required
            />
            <br />
            <label>Email:</label>
            <input
              name="email"
              type="email"
              onChange={this.handleChange}
              required
            />
            <br />
            <label>Password:</label>
            <input
              name="password"
              type="password"
              onChange={this.handleChange}
              required
            />
            <br />
            <label>Confirm Password:</label>
            <input
              name="confirm"
              type="password"
              onChange={this.handleChange}
              required
            />
            <br />
            <button onClick={this.SaveLogin}>Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
