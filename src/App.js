import React, { Component } from "react";
import "./App.css";
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000/" });

class App extends Component {
  state = {
    courses: [],
  };

  constructor(porps) {
    super(porps);
    api.get("/").then((res) => {
      console.log(res.data);
      this.setState({ courses: res.data });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* Object.entries => [[key, value], [key, value]...] */}
          {Object.values(this.state.courses).map((keyValuePair, idx) => (
            <h2 key={idx}>{keyValuePair.toString()}</h2>
          ))}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
