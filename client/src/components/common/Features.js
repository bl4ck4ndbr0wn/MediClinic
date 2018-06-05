import React, { Component } from "react";

class Features extends Component {
  render() {
    return (
      <section className="feature-area section-gap">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-60 col-lg-8">
              <div className="title text-center">
                <h1 className="mb-10">Features that make us unique</h1>
                <p>Who are in extremely love with eco friendly system.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="single-feature d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-rocket" />
                </div>
                <div className="details">
                  <h4>24/7 Emergency</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-feature d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-heart-pulse" />
                </div>
                <div className="details">
                  <h4>Expert Consultation</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-feature d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-chart-bars" />
                </div>
                <div className="details">
                  <h4>X-Ray Service</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-feature d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-paw" />
                </div>
                <div className="details">
                  <h4>Dental Science</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-feature d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-bug" />
                </div>
                <div className="details">
                  <h4>Intensive Care</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-feature d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-users" />
                </div>
                <div className="details">
                  <h4>Family Planning</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Features;
