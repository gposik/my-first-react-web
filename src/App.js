import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import React from "react";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/'/>
      </Switch>
    </Router>
  );
}

export default App;
