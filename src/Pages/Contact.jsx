import React from "react";
import { Form, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="contact-section">
        <div className="overlay">
          <h1>CONTACT</h1>
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

    <div>
      <div class="text-center p-5 light-bg">
        <div class="contact_content_section">
          <p class="text-center">Contact</p>
          <h1 class="p-heading text-center">Fill out the form to be contacted by a member  of the Ecom team.</h1>
        </div>
      </div>
      <div class="box p-5 my-5 mx-auto contact_form_section light-bg">
        <form class="contact_form_section">
          <div class="row flex flex-wrap mb-3">
            <div class="col-md-6 px-3">
              <label class="d-block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">First Name</label>
              <input class="appearance-none d-block w-100 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter First Name" />
            </div>
            <div class="col-md-6 px-3">
              <label class="d-block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">Email Address</label>
              <input class="appearance-none d-block w-100 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Email Address" />
            </div>
          </div>
          <div class="row flex flex-wrap mb-3">
            <div class="col-12 px-3">
              <label class="d-block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">Subject</label>
              <input class="appearance-none d-block w-100 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Subject" />
            </div>
          </div>
          <div class="row flex flex-wrap mb-3">
            <div class="col-12 px-3">
              <label class="d-block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">Message</label>
              <textarea class="appearance-none d-block w-100 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 textarea" placeholder="Enter a message"></textarea>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="col-12 px-1">
              <div className="d-flex gap-2 align-items-center mb-3">
                <input type="checkbox" name='grid-state' id='grid-state' />
                <label class="d-block uppercase tracking-wide text-gray-700 text-xs font-bold" for="grid-state">I agree with Prasasti Privacy Policy</label>
              </div>
              <a href="/contact-us" class="submit_btn" type='button'>Submit</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )

}

export default Contact
