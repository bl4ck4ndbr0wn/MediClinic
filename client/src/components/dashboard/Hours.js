import React, { Component } from "react";

class Hour extends Component {
  render() {
    return (
      <section class="open-hour-area" id="open-hours">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12 open-hour-wrap">
              <h1>Opening Hours</h1>
              <p>Get ready to cast your vote and select the right one</p>
              <a class="open-btn" href="#">
                {" "}
                <span class="circle" />We are open Now
              </a>
              <div class="date-list d-flex flex-row justify-content-center">
                <ul class="colm-1">
                  <li>Monday - Friday</li>
                  <li>Saturday</li>
                  <li>Sunday</li>
                </ul>
                <ul class="colm-2">
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
    );
  }
}

export default Hour;
