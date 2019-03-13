import React, { Component } from "react";
import "./App.css";
import Routes from "./components/routes";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
// import Button from "@material-ui/core/Button";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#3A54B4"
    },
    primary: {
      main: "#fef7ed"
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Routes />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
