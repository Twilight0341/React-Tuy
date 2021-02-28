import React from "react";
import axios from "axios";
import "../CSS/Login.sass";

const api = new axios.create({ baseURL: "http://localhost:5000/" });

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acc: "",
      pw: "",
      res: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.SaveLogin = this.SaveLogin.bind(this);
  }

  handleChange(event) {
    // console.log(event.target.name);
    let tname = event.target.name;
    if (tname === "user") {
      this.setState({ acc: event.target.value });
    }
    if (tname === "password") {
      this.setState({ pw: event.target.value });
    }
  }

  SaveLogin(event) {
    event.preventDefault();
    console.log(this.state);
    api
      .post("/login/" + this.state.acc + "/" + this.state.pw)
      .then((response) => {
        this.setState({ res: response.data });
      });

    console.log(this.state.res);
  }

  render() {
    return (
      <div className="login_background_wrapper">
        <div className="login_box_wrapper">
          <form className="login_from_wrapper">
            <label>Account:</label>
            <input
              name="user"
              type="text"
              onChange={this.handleChange}
              maxLength="20"
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
            <button onClick={this.SaveLogin}>Login</button>
            {/*<input type="submit" value="Login"></input>*/}
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
