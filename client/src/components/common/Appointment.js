import React, { Component } from "react";

class Appointment extends Component {
  render() {
    return (
      <section className="appoinment-area section-gap relative">
        <div className="container">
          <div className="row align-items-center justify-content-end">
            <div className="col-lg-6 no-padding appoinment-right">
              <h1 className="text-white">
                Book an <br />
                Appoinment
              </h1>
              <form className="appoinment-form" id="myForm">
                <div className="row">
                  <div className="col-lg-12 d-flex flex-column">
                    <input
                      name="patient-name"
                      placeholder="Patient Name"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Patient Name'"
                      className="form-control mt-20"
                      required=""
                      type="text"
                    />
                  </div>
                  <div className="col-lg-6 d-flex flex-column">
                    <input
                      name="phone"
                      placeholder="Phone"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Phone'"
                      className="form-control mt-20"
                      required=""
                      type="text"
                    />
                  </div>
                  <div className="col-lg-6 d-flex flex-column">
                    <input
                      name="email"
                      placeholder="Email address"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Email address'"
                      className="form-control mt-20"
                      required=""
                      type="email"
                    />
                  </div>
                  <div className="col-lg-6 d-flex flex-column">
                    <input
                      name="dob"
                      placeholder="Date of birth"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Date of birth'"
                      className="form-control mt-20"
                      required=""
                      type="text"
                      id="datepicker"
                    />
                  </div>
                  <div className="col-lg-6 d-flex flex-column">
                    <input
                      name="appoinment-date"
                      placeholder="Appoinment date"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Appoinment date'"
                      className="form-control mt-20"
                      required=""
                      type="text"
                      id="datepicker2"
                    />
                  </div>
                  <div className="col-lg-12 flex-column">
                    <textarea
                      rows="5"
                      className="form-control mt-20"
                      name="message"
                      placeholder="Messege"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Messege'"
                      required=""
                    />
                  </div>

                  <div className="col-lg-12 d-flex justify-content-end send-btn">
                    <button className="genric-btn primary mt-20 text-uppercase ">
                      Confirm booking
                    </button>
                  </div>

                  <div className="alert-msg" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Appointment;
