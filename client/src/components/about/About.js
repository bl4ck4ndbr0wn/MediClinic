import React, { Component } from "react";
import BannerGroup from "../common/BannerGroup";
import HomeAbout from "../common/HomeAbout";
import Appointment from "../common/Appointment";
import Services from "../services/Services";
import Features from "../common/Features";

class About extends Component {
  render() {
    return (
      <div>
        <BannerGroup title="About" url="/about" />
        <Features />
        <HomeAbout />
        <Services />
        <Appointment />
      </div>
    );
  }
}

export default About;
