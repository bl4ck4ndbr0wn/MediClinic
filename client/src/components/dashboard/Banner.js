import React from "react";

export default () => {
  return (
    <section className="banner-area relative" id="home">
      <div className="overlay overlay-bg" />
      <div className="container">
        <div className="row fullscreen d-flex justify-content-center align-items-center">
          <div className="banner-content col-lg-9 col-md-12 justify-content-center">
            <h6 className="text-uppercase">Welcome To Mediclinic Kenya</h6>
            <h1> How we can help</h1>
            <p className="text-white mx-auto">
              We are your trusted Pro-Choice reproductive health partner. Talk
              to us about the best contraceptive for you and yours, pregnancy
              crisis counseling, cervical cancer screening and anything else
              regarding your reproductive health. We are here for you.
            </p>
            <a
              href="#open-hours"
              className="primary-btn header-btn text-uppercase mt-10"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
