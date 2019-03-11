import React, { Component } from "react";
import "./App.css";
import Routes from "./components/routes";
import Button from "@material-ui/core/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          <Button variant="contained" color="primary">
            login
          </Button>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Routes />
      </div>
    );
  }
}

export default App;
