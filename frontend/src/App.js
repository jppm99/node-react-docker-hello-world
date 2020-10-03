import axios from 'axios';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import hello_world from "./Components/hello-world.component";
import test_api from "./Components/test-api.component";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={hello_world} />
        <Route path="/api" component={test_api} />
      </Router>
    );
  }
}

export default App;