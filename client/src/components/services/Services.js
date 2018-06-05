import React, { Component } from "react";

class Services extends Component {
  render() {
    return (
      <section className="service-area section-gap">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 pb-40 header-text text-center">
              <h1 className="pb-10">What we Offer to our Customers</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-service">
                <img className="img-fluid" src="img/cname.png" alt="" />
                <a href="#">
                  <h4>Pregnancy crisis counselling</h4>
                </a>
                <p>
                  Assisting women after a spontaneous miscarriage or an
                  incomplete abortion.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-service">
                <img
                  className="img-fluid"
                  src="img/Cervical-Cancer_blog-image.jpg"
                  alt=""
                />
                <a href="#">
                  <h4>Cervical cancer screening</h4>
                </a>
                <p>Testing to detect early signs of cervical cancer</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-service">
                <img className="img-fluid" src="img/dd-1.png" alt="" />
                <a href="#">
                  <h4>Unsure of the options available to you?</h4>
                </a>
                <p>
                  Try our online contraceptive adviser to help you find the best
                  contraceptive that fits you and your partner's lifestyle.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-service">
                <img
                  className="img-fluid"
                  src="img/stdweb_itstime.jpg"
                  alt=""
                />
                <a href="#">
                  <h4>HIV / STI screening</h4>
                </a>
                <p>
                  We provide testing and treatment for sexually transmitted
                  infections. This includes testing for HIV and syphilis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
