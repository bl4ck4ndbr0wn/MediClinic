import React, { Component } from "react";
import BannerGroup from "../common/BannerGroup";
import HomeAbout from "../common/HomeAbout";
import Appointment from "../common/Appointment";
import Services from "../services/Services";

class Service extends Component {
  render() {
    return (
      <div>
        <BannerGroup title="Services" url="/services" />
        <Services />
        <HomeAbout />
        <Appointment />
      </div>
    );
  }
}

export default Service;
