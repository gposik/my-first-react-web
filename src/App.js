import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Footer from "./components/pages/Footer/Footer";
import Home from './components/pages/HomePage/Home'
import Navbar from "./components/Navbar";
import React from "react";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
