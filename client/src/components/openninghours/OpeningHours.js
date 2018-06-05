import React, { Component } from "react";
import Banner from "../common/BannerGroup";
import Hours from "../dashboard/Hours";
import Services from "../services/Services";
import HomeAbout from "../common/HomeAbout";

class OpeningHour extends Component {
  render() {
    return (
      <div>
        <Banner title="Opening Hour" url="/opening-hour" />
        <section className="open-hour-area openhour-page">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 open-hour-wrap">
                <h1>Opening Hours</h1>
                <p>Get ready to cast your vote and select the right one</p>
                <a className="open-btn" href="#">
                  {" "}
                  <span className="circle" />We are open Now
                </a>
                <div className="date-list d-flex flex-row justify-content-center">
                  <ul className="colm-1">
                    <li>Monday - Friday</li>
                    <li>Saturday</li>
                    <li>Sunday</li>
                  </ul>
                  <ul className="colm-2">
                    <li>
                      <span>:</span> 10:00am to 05:00pm
                    </li>
                    <li>
                      <span>:</span> 12:00am to 03:00pm
                    </li>
                    <li>
                      <span>:</span> closed
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <HomeAbout />
        <Services />
      </div>
    );
  }
}

export default OpeningHour;
