import React, { Component } from "react";
import Banner from "./Banner";
import Hours from "./Hours";
import Services from "../services/Services";
import Latest_Blog from "../blog/Latest_Blog";
import HomeAbout from "../common/HomeAbout";
import Appointment from "../common/Appointment";

class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Hours />
        <Services />
        <HomeAbout />
        <Appointment />
        <Latest_Blog />
      </div>
    );
  }
}

export default Home;
