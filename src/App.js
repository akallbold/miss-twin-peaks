import React, { Component } from "react";
import MainContainer from "./Components/MainContainer";
import Header from "./Components/Header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContainer />
      </div>
    );
  }
}

export default App;
