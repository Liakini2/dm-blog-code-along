import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import "./App.css";
//import routes file from routes assigned to routes variable
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {/* insert and render routes needs to be in curly brackets
        since it is a variable and not a component*/}
        {routes}
      </div>
    );
  }
}

export default App;
