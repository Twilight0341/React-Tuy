import React, { Component } from "react";
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000/" });

class GetInform extends Component {
  state = {
    courses: [],
  };

  constructor(porps) {
    super(porps);
    api.post("/login/asd/asd").then((res) => {
      console.log(res.data);
      this.setState({ courses: res.data });
    });
  }

  render() {
    return (
      <div className="Backgourd-wrapper">
        {/* {Object.values(this.state.courses).map((keyValuePair, idx) => (
          <h2 key={idx}>{keyValuePair.toString()}</h2>
        ))} */}
        <h2>{Object.values(this.state.courses)}</h2>
      </div>
    );
  }
}

export default GetInform;
