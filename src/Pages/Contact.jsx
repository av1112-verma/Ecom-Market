import React from "react";
import { Form, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="contact-section">
        <div className="overlay">
          <h1 className="contact-heading">CONTACT</h1>
          <p>HOME / CONTACT</p>
        </div>
      </div>
      <section className="_main_contact">
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6">
              <div className="contact-info mb-3">
                <h6 className="text-uppercase">Contact Us</h6>
                <h2 className="my-3">Contact With Us</h2>
                <p>
                  Rapidiously myocardinate cross-platform intellectual capital after the
                  model. Appropriately create interactive infrastructures after
                  maintance Holistically facilitate stand-alone
                </p>

                <div className="info-box d-flex align-items-center mb-4">

                  <div>
                    <div className="label">Call Us Now</div>
                    <div className="value">+9(1234) 567 220</div>
                  </div>
                </div>

                <div className="info-box d-flex align-items-center mb-4">
                  <div>
                    <div className="label">Sent Email</div>
                    <div className="value">example@yahoo.com</div>
                  </div>
                </div>

                <div className="info-box d-flex align-items-center">
                  <div>
                    <div className="label">Our Locations</div>
                    <div className="value">Ex:133 ABSCS Dehradun - 0000</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6 ">
              <div className="contact-form">
                <h3 className="text-uppercase fw-bold mb-4 text-center">Get In Touch</h3>
                <Form>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Your Name"
                      className="bg-dark text-white border-secondary"
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email"
                      className="bg-dark text-white border-secondary"
                    />
                  </Form.Group>

                  <Form.Group controlId="formMessage" className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Write Message"
                      className="bg-dark text-white border-secondary"
                    />
                  </Form.Group>

                  <Button variant="warning" className="text-white w-100">
                    SENT MESSAGE
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}

export default Contact
