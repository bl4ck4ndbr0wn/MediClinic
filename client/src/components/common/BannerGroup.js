import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Banner = ({ title, url }) => {
  return (
    <section class="banner-area relative about-banner" id="home">
      <div class="overlay overlay-bg" />
      <div class="container">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="about-content col-lg-12">
            <h1 class="text-white">{title}</h1>
            <p class="text-white link-nav">
              <a href="/">Home </a> <span class="lnr lnr-arrow-right" />{" "}
              <Link to={url}> {title}</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Banner;
