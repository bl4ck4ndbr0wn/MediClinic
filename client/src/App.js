import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/dashboard/Home";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Service from "./components/services/Service";
import Openinghour from "./components/openninghours/OpeningHours";
import Contact from "./components/contact/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Service} />
          <Route exact path="/opening-hour" component={Openinghour} />
          <Route exact path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
