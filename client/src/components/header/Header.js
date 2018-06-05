import React, { Component } from "react";
import { a } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="header-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-6 col-4 header-top-left no-padding">
                <a href="/">
                  {/* <img src="img/logo.png" alt="" title="" /> */}
                  <h3 className="text-dark">Mediclinic</h3>
                </a>
              </div>
              <div className="col-lg-6 col-sm-6 col-8 header-top-right no-padding">
                <a className="btns" href="tel:+254 723 342 097">
                  +254 723 342 097
                </a>
                <a className="btns" href="mailto:support@colorlib.com">
                  support@alpha.com
                </a>
                <a className="icons" href="tel:+254 723 342 097">
                  <span className="lnr lnr-phone-handset" />
                </a>
                <a className="icons" href="mailto:support@alpha.com">
                  <span className="lnr lnr-envelope" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container main-menu">
          <div className="row align-items-center justify-content-between d-flex">
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li className="menu-active">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/opening-hour">Opening Hour </a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </nav>
            {/* <!-- #nav-menu-container --> */}
            <div className="menu-social-icons">
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
      </header>
    );
  }
}

export default Header;
