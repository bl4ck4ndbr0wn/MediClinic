import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-2  col-md-6">
              <div className="single-footer-widget">
                <h6>Top Products</h6>
                <ul className="footer-nav">
                  <li>
                    <a href="#">Managed Website</a>
                  </li>
                  <li>
                    <a href="#">Manage Reputation</a>
                  </li>
                  <li>
                    <a href="#">Power Tools</a>
                  </li>
                  <li>
                    <a href="#">Marketing Service</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4  col-md-6">
              <div className="single-footer-widget mail-chimp">
                <h6 className="mb-20">Contact Us</h6>
                <p>JUja Nairobi Kenya</p>
                <h3>254 723 342 097</h3>
              </div>
            </div>
            <div className="col-lg-6  col-md-12">
              <div className="single-footer-widget newsletter">
                <h6>Newsletter</h6>
                <p>
                  You can trust us. we only send promo offers, not a single
                  spam.
                </p>
                <div id="mc_embed_signup">
                  <form
                    target="_blank"
                    novalidate="true"
                    className="form-inline"
                  >
                    <div className="form-group row" style={{ width: "100%" }}>
                      <div className="col-lg-8 col-md-12">
                        <input
                          name="EMAIL"
                          placeholder="Your Email Address"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Your Email Address '"
                          required=""
                          type="email"
                        />
                      </div>

                      <div className="col-lg-4 col-md-12">
                        <button className="nw-btn primary-btn">
                          Subscribe<span className="lnr lnr-arrow-right" />
                        </button>
                      </div>
                    </div>
                    <div className="info" />
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="row footer-bottom d-flex justify-content-between">
            <p className="col-lg-8 col-sm-12 footer-text m-0">
              Copyright &copy;{new Date().getFullYear()}. All rights reserved |
              Designed by Alpha Nganga{" "}
              {/* <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a> */}
            </p>
            <div className="col-lg-4 col-sm-12 footer-social">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-dribbble" />
              </a>
              <a href="#">
                <i className="fa fa-behance" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      //
    );
  }
}

export default Footer;
