import React, { Component } from "react";

class HomeAbout extends Component {
  render() {
    return (
      <section className="home-about-area section-gap relative">
        <div className="container">
          <div className="row align-items-center justify-content-end">
            <div className="col-lg-6 no-padding home-about-right">
              <h1 className="text-white">
                Who we are <br />
                to Serve the nation
              </h1>
              <p>
                Mediclinic Kenya is at the cutting edge of medical diagnostic
                services, delivering a world class service that ensures the
                highest quality of medical testing and the very best in medical
                support. Unique in East and Central Africa, PathCare Kenya was
                the first diagnostic laboratory in the Region to achieve
                international accreditation ISO/IEC 17025/15189. Accreditation
                confirms the international standards that PathCare Kenya has met
                in the quality of its tests and the integrity of its processes.
              </p>
              <div className="row no-gutters">
                <div className="single-services col">
                  <span className="lnr lnr-diamond" />
                  <a href="#">
                    <h4 className="text-white">Expert Services</h4>
                  </a>
                </div>
                <div className="single-services col">
                  <span className="lnr lnr-phone" />
                  <a href="#">
                    <h4 className="text-white">Great Support</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeAbout;
